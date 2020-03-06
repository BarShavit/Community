package managers;

import database.DAL;
import models.Category;

import java.util.List;

public class CategoriesManager {
    private DAL dal;
    public CategoriesManager(DAL d){
        dal = d;
    }

    @SuppressWarnings("unchecked")
    public List<Category> getCategories(){
        return (List<Category>)dal.getManager().createQuery("SELECT c FROM Category c").getResultList();
    }
}
