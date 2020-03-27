package managers;

import configurations.SocketIOConstants;
import database.DAL;
import models.Conversation;
import models.ConversationMessage;
import socketIO.ISocketIOSender;

import java.util.List;

/**
 * Managing conversation and their messages.
 * Each conversation has participants list and it's related messages.
 */
public class ConversationManager {
    private DAL dal;
    private UsersManager usersManager;
    private ISocketIOSender socketIOSender;

    public ConversationManager(DAL dal, UsersManager usersManager, ISocketIOSender socketIOSender) {
        this.dal = dal;
        this.usersManager = usersManager;
        this.socketIOSender = socketIOSender;
    }

    public Conversation getConversation(int conversationId){
        return dal.getManager().find(Conversation.class, conversationId);
    }

    @SuppressWarnings("unchecked")
    public List<Conversation> getAllConversations(int userId){
        return (List<Conversation>)dal.getManager().createQuery(
                "SELECT c FROM Conversation c LEFT JOIN c.participants p WHERE p.id=:id")
                .setParameter("id", userId).getResultList();
    }

    @SuppressWarnings("unchecked")
    public List<ConversationMessage> getConversationMessages(int conversationId){
        return (List<ConversationMessage>)dal.getManager().createQuery(
                "SELECT m FROM ConversationMessage m WHERE m.conversation.id=:id")
                .setParameter("id", conversationId).getResultList();
    }

    public boolean addMessage(ConversationMessage message){
        // Validations
        if(getConversation(message.getConversation().getId()) == null)
            return false;
        if(usersManager.getUser(message.getCreator().getId()) == null)
            return false;

        // Logic
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(message);

        dal.getManager().getTransaction().commit();

        socketIOSender.emitData(SocketIOConstants.NewConversationMessage, message);

        return true;
    }

    public boolean addConversation(Conversation conversation){
        // Validations
        for(var participant : conversation.getParticipants()){
            if(usersManager.getUser(participant.getId()) == null){
                return false;
            }
        }

        // Logic
        dal.getManager().getTransaction().begin();

        dal.getManager().persist(conversation);

        dal.getManager().getTransaction().commit();

        return true;
    }
}
