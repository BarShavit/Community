package managers;

import configurations.SocketIOConstants;
import database.DAL;
import models.Category;
import models.Forum;
import socketIO.ISocketIOSender;

import java.util.List;

/**
 Managing categories via DAL.
 */
public class CategoriesManager {
    private DAL dal;
    private ISocketIOSender socketIOSender;

    public CategoriesManager(DAL d, ISocketIOSender socketIOSender){
        dal = d;
        this.socketIOSender = socketIOSender;
    }

    /**
     * @return list all the categories with forums
     */
    @SuppressWarnings("unchecked")
    public List<Category> getCategories(){
        return (List<Category>)dal.getManager().createQuery("SELECT c FROM Category c").getResultList();
    }

    public void addCategory(Category category){
        // Logic
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(category);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.NewCategory, category);
    }

    public boolean addForumToCategory(int categoryId, Forum forum){
        var category = dal.getManager().find(Category.class, categoryId);
        if(category == null){
            return false;
        }

        dal.getManager().getTransaction().begin();

        category.getForums().add(forum);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.NewForum, category);

        return true;
    }

    public boolean remove(int categoryId){
        var category = dal.getManager().find(Category.class, categoryId);
        if(category == null)
            return false;

        dal.getManager().getTransaction().begin();

        dal.getManager().remove(category);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.DeletedCategory, category.getId());

        return true;
    }

    public boolean deleteForumFromCategory(int categoryId, int forumId){
        var category = dal.getManager().find(Category.class, categoryId);
        if(category == null)
            return false;

        dal.getManager().getTransaction().begin();

        category.getForums().removeIf(forum -> forum.getId() == forumId);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.DeletedForum, category);

        return true;
    }
}
