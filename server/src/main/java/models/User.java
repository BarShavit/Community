package models;

import com.google.gson.annotations.Expose;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Entity
@Table(name = "users", catalog = "community")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Expose
    private int id;
    @Column(name = "username", length = 50, unique = true)
    @Expose
    private String username;
    @Column(name = "password")
    @Expose(serialize = false)
    private String password;
    @Column(name = "email")
    @Expose
    private String email;
    @Column(name = "isAdmin")
    @Expose
    private boolean isAdmin;

    public User(){

    }

    public User(String username, String password, String email, boolean isAdmin) throws NoSuchAlgorithmException {
        this.username = username;
        this.setPassword(password);
        this.email = email;
        this.isAdmin = isAdmin;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    /*
    We don't want to save the string text, so we use SHA256 hash.
    As soon as we save the new user after register, it will be hashed.
     */
    public void setPassword(String password) throws NoSuchAlgorithmException {
        var digest = MessageDigest.getInstance("SHA-256");
        var hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
        this.password = new String(hash, StandardCharsets.UTF_8);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}