package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.ForumsManager;
import models.Forum;

import static io.javalin.apibuilder.ApiBuilder.*;
import static java.lang.Integer.parseInt;

public class ForumsController {
    private Gson gson = new Gson();
    private ForumsManager manager;

    public ForumsController(Javalin server, ForumsManager manager) {
        this.manager = manager;

        server.routes(() -> path("forum", () -> {
            get("/:id", (ctx) ->
                    ctx.result(gson.toJson(manager.getForum(parseInt(ctx.pathParam("id"))))));
            post("/:categoryId", ctx -> {
                if (add(Integer.parseInt(ctx.pathParam("categoryId")),
                        gson.fromJson(ctx.body(), Forum.class))) {
                    ctx.status(200);
                } else {
                    ctx.status(400);
                }
            });
            delete("/:categoryId/:forumId", ctx -> {
                if(manager.delete(parseInt(ctx.pathParam("categoryId")),
                        parseInt(ctx.pathParam("forumId"))))
                    ctx.status(200);
                else
                    ctx.status(400);
            });
        }));
    }

    private boolean add(int categoryId, Forum forum){
        if(forum.getName() == null || forum.getName().isBlank() ||
        forum.getDescription() == null || forum.getDescription().isBlank()){
            return false;
        }

        return manager.addForum(categoryId, forum);
    }
}
