package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import io.javalin.Javalin;
import managers.UsersManager;
import models.User;
import java.security.NoSuchAlgorithmException;

import static io.javalin.apibuilder.ApiBuilder.*;

public class UsersController {
    private Gson gson;
    private UsersManager manager;

    public UsersController(Javalin server, UsersManager man) {
        manager = man;

        var gsonBuilder = new GsonBuilder().excludeFieldsWithoutExposeAnnotation();
        gson = gsonBuilder.create();

        server.routes(() -> path("users", () -> {
            get("", (ctx) -> ctx.result(gson.toJson(manager.getAll())));
            get("/:name", (ctx) -> {
                var user = getUser(ctx.pathParam("name"));
                if (user == null) {
                    ctx.status(400);
                } else {
                    ctx.result(gson.toJson(user));
                }
            });
            post("", (ctx) -> {
                var succeed = add(gson.fromJson(ctx.body(), User.class));
                if (succeed) {
                    ctx.status(200);
                } else {
                    ctx.status(400);
                }
            });
            put(":name/:pass", (ctx -> {
                var succeed = login(ctx.pathParam("name"), ctx.pathParam("pass"));
                if (succeed) {
                    ctx.status(200);
                } else {
                    ctx.status(400);
                }
            }));
        }));
    }

    private User getUser(String name){
        return manager.getUser(name);
    }

    private boolean add(User user) throws NoSuchAlgorithmException {
        // Validations
        if(user.getUsername() == null || user.getUsername().equals("") ||
                user.getPassword() == null || user.getPassword().equals("") ||
                user.getEmail() == null || user.getEmail().equals("")){
            return false;
        }

        return manager.add(user);
    }

    private boolean login(String username, String password){
        return manager.login(username, password);
    }
}
