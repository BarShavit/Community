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

    public TopicsManager(DAL d, ISocketIOSender s){
        dal = d;
        socketIOSender = s;
    }

    public void add(Topic topic){
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(topic);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.NewTopicKey, topic);
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
