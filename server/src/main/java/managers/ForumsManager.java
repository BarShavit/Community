package managers;

import database.DAL;
import models.Forum;

public class ForumsManager {
    private DAL dal;
    private CategoriesManager categoriesManager;

    public ForumsManager(DAL d, CategoriesManager categoriesManager){
        dal = d;
        this.categoriesManager = categoriesManager;
    }

    public Forum getForum(int id){
        return (Forum)dal.getManager().createQuery(
                "SELECT f FROM Forum f WHERE f.id=:id")
                .setParameter("id", id).getSingleResult();
    }

    public boolean addForum(int categoryId, Forum forum){
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(forum);

        dal.getManager().getTransaction().commit();

        return categoriesManager.addForumToCategory(categoryId, forum);
    }
}
