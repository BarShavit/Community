package database;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/*
Manage the connection to the DB.
For now, we don't manage a reliable connection and assume
that the DB is active and working.
 */
public class DAL {
    private EntityManager manager;

    public DAL(){
        EntityManagerFactory factory =
                Persistence.createEntityManagerFactory(
                        "org.jpa.community");
        manager =  factory.createEntityManager();
    }


    public EntityManager getManager() {
        return manager;
    }
}
