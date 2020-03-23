package managers;

import configurations.SocketIOConstants;
import database.DAL;
import models.Topic;
import socketIO.ISocketIOSender;

import java.util.List;

/**
 * Managing topics for forums
 * Search for all the topics in a forum via DAL
 */
public class TopicsManager {
    private DAL dal;
    private ISocketIOSender socketIOSender;
    private UsersManager usersManager;
    private ForumsManager forumManager;

    public TopicsManager(DAL d, ISocketIOSender s, UsersManager usersManager, ForumsManager forumsManager){
        this.dal = d;
        this.socketIOSender = s;
        this.usersManager = usersManager;
        this.forumManager = forumsManager;
    }

    public boolean add(Topic topic){
        if(usersManager.getUser(topic.getCreator().getId()) == null)
            return false;

        if(forumManager.getForum(topic.getForum().getId()) == null)
            return false;

        dal.getManager().getTransaction().begin();

        dal.getManager().persist(topic);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.NewTopicKey, topic);

        return true;
    }

    @SuppressWarnings("unchecked")
    public List<Topic> getTopics(int forumId){
        return (List<Topic>)dal.getManager().createQuery(
                "SELECT t FROM Topic t WHERE t.forum.id=:id")
                .setParameter("id", forumId).getResultList();
    }

    public Topic getTopic(int topicId){
        return (Topic)dal.getManager().createQuery(
                "SELECT t FROM Topic t WHERE t.id=:id")
                .setParameter("id", topicId).getSingleResult();
    }
}
