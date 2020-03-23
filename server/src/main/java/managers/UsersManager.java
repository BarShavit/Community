package managers;

import database.DAL;
import models.User;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
Manage the users. Including register, login, user data and etc
 */
public class UsersManager {
    private DAL dal;

    public UsersManager(DAL dal) {
        this.dal = dal;
    }

    public boolean add(User user) throws NoSuchAlgorithmException {
        if(getUser(user.getUsername()) != null){
            return false;
        }

        // Can't add a admin user
        user.setAdmin(false);

        // set the password with sha256
        user.setPassword(user.getPassword());

        dal.getManager().getTransaction().begin();
        dal.getManager().persist(user);
        dal.getManager().getTransaction().commit();

        return true;
    }

    public User getUser(int id){
        return dal.getManager().find(User.class, id);
    }

    public User getUser(String name){
        var usersList = dal.getManager().createQuery("SELECT user FROM User user WHERE user.username=:name")
                .setParameter("name", name).getResultList();

        if(usersList.isEmpty()){
            return null;
        }

        return (User)usersList.get(0);
    }

    /**
    * @Return True if the given login data is valid. Else, false.
     */
    public boolean login(String name, String pass){
        try{
            var user = getUser(name);
            if(user == null){
                return false;
            }

            var digest = MessageDigest.getInstance("SHA-256");
            var hash = digest.digest(pass.getBytes(StandardCharsets.UTF_8));
            var hashedPass = new String(hash, StandardCharsets.UTF_8);

            return hashedPass.equals(user.getPassword());
        } catch (Exception e){
            return false;
        }
    }
}
