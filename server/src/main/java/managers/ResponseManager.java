package managers;

import configurations.SocketIOConstants;
import database.DAL;
import models.Response;
import socketIO.ISocketIOSender;

import java.util.List;

public class ResponseManager {
    private DAL dal;
    private ISocketIOSender socketIOSender;

    public ResponseManager(DAL dal, ISocketIOSender s) {
        this.dal = dal;
        this.socketIOSender = s;
    }

    @SuppressWarnings("unchecked")
    public List<Response> getResponses(int topicId){
        return (List<Response>)dal.getManager().createQuery(
                "SELECT r FROM Response r WHERE r.topic.id=:id")
                .setParameter("id", topicId).getResultList();
    }

    public void add(Response response){
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(response);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.NewResponseKey, response);
    }
}
