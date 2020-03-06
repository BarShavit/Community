package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.CategoriesManager;

import static io.javalin.apibuilder.ApiBuilder.get;
import static io.javalin.apibuilder.ApiBuilder.path;

public class CategoriesController {
    private Gson gson = new Gson();
    private CategoriesManager manager;

    public CategoriesController(Javalin server, CategoriesManager man){
        manager = man;

        server.routes(() -> path("category", () -> {
            get("", (ctx) -> ctx.result(gson.toJson(manager.getCategories())));
        }));
    }
}
