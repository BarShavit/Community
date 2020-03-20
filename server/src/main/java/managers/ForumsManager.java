package managers;

import database.DAL;
import models.Forum;

public class ForumsManager {
    private DAL dal;

    public ForumsManager(DAL d){
        dal = d;
    }

    public Forum getForum(int id){
        return (Forum)dal.getManager().createQuery(
                "SELECT f FROM Forum f WHERE f.id=:id")
                .setParameter("id", id).getSingleResult();
    }
}
