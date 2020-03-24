package models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "conversation_messages", catalog = "community")
public class ConversationMessage {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    private User creator;

    @ManyToOne
    private Conversation conversation;

    @Column(name = "message")
    private String message;

    @Column(name = "publishDate")
    private Date publishDate;

    public Conversation getConversation() {
        return conversation;
    }

    public User getCreator() {
        return creator;
    }

    public String getMessage() {
        return message;
    }
}
