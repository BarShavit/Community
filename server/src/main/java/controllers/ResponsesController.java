package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.ResponseManager;
import models.Response;

import static io.javalin.apibuilder.ApiBuilder.*;
import static java.lang.Integer.parseInt;

public class ResponsesController {
    private Gson gson = new Gson();

    public ResponsesController(Javalin server, ResponseManager manager) {
        server.routes(() -> {
            path("response", () -> {
                get("/:topicId", (ctx) -> {
                    ctx.result(gson.toJson(manager.getResponses(parseInt(ctx.pathParam("topicId")))));
                });
                post("", (ctx -> {
                    manager.add(gson.fromJson(ctx.body(), Response.class));
                    ctx.status(200);
                }));
            });
        });
    }
}
