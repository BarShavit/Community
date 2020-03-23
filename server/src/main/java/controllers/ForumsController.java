package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.ForumsManager;

import static io.javalin.apibuilder.ApiBuilder.*;
import static java.lang.Integer.parseInt;

public class ForumsController {
    private Gson gson = new Gson();

    public ForumsController(Javalin server, ForumsManager manager) {
        server.routes(() -> path("forum", () ->
                get("/:id", (ctx) ->
                        ctx.result(gson.toJson(manager.getForum(parseInt(ctx.pathParam("id"))))))));
    }
}
