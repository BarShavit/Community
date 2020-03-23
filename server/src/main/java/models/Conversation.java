package models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "conversations", catalog = "community")
public class Conversation {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "subject")
    private String subject;

    @OneToMany
    private List<User> participants;
}
