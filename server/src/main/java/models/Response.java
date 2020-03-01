package models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "responses", catalog = "community")
public class Response {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @ManyToOne
    private Topic topic;
    @ManyToOne
    private User creator;
    @Column(name = "publishDate")
    private Date publishDate;
    @Column(name = "body")
    private String body;
}
