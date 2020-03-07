package managers;

import database.DAL;
import models.Category;

import java.util.List;

/**
 Managing categories via DAL.
 */
public class CategoriesManager {
    private DAL dal;
    public CategoriesManager(DAL d){
        dal = d;
    }

    /**
     *
     * @return list all the categories with forums
     */
    @SuppressWarnings("unchecked")
    public List<Category> getCategories(){
        return (List<Category>)dal.getManager().createQuery("SELECT c FROM Category c").getResultList();
    }
}
