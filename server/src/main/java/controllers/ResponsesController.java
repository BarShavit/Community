package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.ResponseManager;
import models.Response;

import static io.javalin.apibuilder.ApiBuilder.*;
import static java.lang.Integer.parseInt;

public class ResponsesController {
    private Gson gson = new Gson();
    private ResponseManager manager;

    public ResponsesController(Javalin server, ResponseManager manager) {
        this.manager = manager;

        server.routes(() -> path("response", () -> {
            get("/:topicId", (ctx) -> ctx.result(gson.toJson(manager.getResponses(parseInt(ctx.pathParam("topicId"))))));
            post("", (ctx -> {
                if (add(gson.fromJson(ctx.body(), Response.class)))
                    ctx.status(200);
                else
                    ctx.status(400);
            }));
        }));
    }

    private boolean add(Response response) {
        if (response.getTopic() == null || response.getCreator() == null ||
                response.getBody() == null || response.getBody().equals("")) {
            return false;
        }

        return manager.add(response);
    }
}