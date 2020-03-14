package models;

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
    private Forum forum;
    @Column(name = "publishDate")
    private Date publishDate;
    @Column(name = "subject")
    private String subject;
    @Column(name = "body")
    private String body;
}
