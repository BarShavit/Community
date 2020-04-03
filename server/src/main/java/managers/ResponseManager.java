package managers;

import configurations.SocketIOConstants;
import database.DAL;
import models.Response;
import models.Topic;
import socketIO.ISocketIOSender;

import java.util.List;

public class ResponseManager {
    private DAL dal;
    private ISocketIOSender socketIOSender;
    private UsersManager usersManager;
    private TopicsManager topicsManager;

    public ResponseManager(DAL dal, ISocketIOSender s, UsersManager usersManager, TopicsManager topicsManager) {
        this.dal = dal;
        this.socketIOSender = s;
        this.usersManager = usersManager;
        this.topicsManager = topicsManager;
    }

    @SuppressWarnings("unchecked")
    public List<Response> getResponses(int topicId){
        return (List<Response>)dal.getManager().createQuery(
                "SELECT r FROM Response r WHERE r.topic.id=:id")
                .setParameter("id", topicId).getResultList();
    }

    public boolean add(Response response){
        // Validations
        if(usersManager.getUser(response.getCreator().getId()) == null)
            return false;
        if(topicsManager.getTopic(response.getTopic().getId()) == null)
            return false;

        // Logic
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(response);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.NewResponseKey, response);

        return true;
    }

    public boolean delete(int responseId){
        var response = dal.getManager().find(Response.class, responseId);
        if(response == null)
            return false;

        dal.getManager().getTransaction().begin();

        dal.getManager().remove(response);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.DeletedResponse, response);

        return true;
    }
}
