package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.ConversationManager;
import models.Conversation;
import models.ConversationMessage;

import static io.javalin.apibuilder.ApiBuilder.*;
import static java.lang.Integer.parseInt;

public class ConversationController {
    private Gson gson = new Gson();
    private ConversationManager manager;

    public ConversationController(Javalin server, ConversationManager manager) {
        this.manager = manager;

        server.routes(() -> path("conversation", () -> {
            get(":/id", ctx -> ctx.result(gson.toJson(manager.getAllConversations(parseInt(ctx.pathParam("id"))))));
            get("messages/:id", ctx -> ctx.result(gson.toJson(manager.getConversationMessages(parseInt(ctx.pathParam("id"))))));
            post("", (ctx ->{
                if (addConversation(gson.fromJson(ctx.body(), Conversation.class)))
                    ctx.status(200);
                else
                    ctx.status(400);
            }));
            post("messages", (ctx -> {
                if (addMessage(gson.fromJson(ctx.body(), ConversationMessage.class)))
                    ctx.status(200);
                else
                    ctx.status(400);
            }));
        }));
    }

    private boolean addConversation(Conversation conversation){
        if(conversation.getParticipants() == null ||
        conversation.getParticipants().isEmpty() ||
        conversation.getSubject() == null ||
                conversation.getSubject().equals("")){
            return false;
        }

        return manager.addConversation(conversation);
    }

    private boolean addMessage(ConversationMessage message){
        if(message.getCreator() == null || message.getConversation() == null ||
        message.getMessage() == null || message.getMessage().equals("")){
            return false;
        }

        return manager.addMessage(message);
    }
}
