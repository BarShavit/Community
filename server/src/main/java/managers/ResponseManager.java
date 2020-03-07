package managers;

import database.DAL;
import models.Response;

import java.util.List;

public class ResponseManager {
    private DAL dal;

    public ResponseManager(DAL dal) {
        this.dal = dal;
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
    }
}
