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
        var resultList = dal.getManager().createQuery(
                "SELECT f FROM Forum f WHERE f.id=:id")
                .setParameter("id", id).getResultList();

        if(resultList.isEmpty())
            return null;

        return (Forum)resultList.get(0);
    }

    public boolean addForum(int categoryId, Forum forum){
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(forum);

        dal.getManager().getTransaction().commit();

        return categoriesManager.addForumToCategory(categoryId, forum);
    }
}
