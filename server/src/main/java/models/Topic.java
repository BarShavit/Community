package models;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "topics", catalog = "community")
public class Topic {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @ManyToOne
    private User creator;
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Forum forum;
    @Column(name = "publishDate")
    private Date publishDate;
    @Column(name = "subject")
    private String subject;
    @Column(name = "body")
    private String body;

    public Forum getForum() {
        return forum;
    }

    public String getSubject() {
        return subject;
    }

    public String getBody() {
        return body;
    }

    public User getCreator() {
        return creator;
    }

    public int getId() {
        return id;
    }
}
