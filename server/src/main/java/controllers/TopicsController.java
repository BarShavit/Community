package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.TopicsManager;
import models.Topic;

import static io.javalin.apibuilder.ApiBuilder.*;
import static java.lang.Integer.parseInt;

public class TopicsController {
    private Gson gson = new Gson();

    public TopicsController(Javalin server, TopicsManager manager) {

        server.routes(() -> {
            path("topic", () -> {
                get("/:forumId", (ctx) -> {
                    ctx.result(gson.toJson(manager.getTopics(parseInt(ctx.pathParam("forumId")))));
                });
                post("", (ctx -> {
                    manager.add(gson.fromJson(ctx.body(), Topic.class));
                    ctx.status(200);
                }));
            });
        });
    }
}