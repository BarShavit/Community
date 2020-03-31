package controllers;

import com.google.gson.Gson;
import io.javalin.Javalin;
import managers.CategoriesManager;
import models.Category;

import static io.javalin.apibuilder.ApiBuilder.*;

public class CategoriesController {
    private Gson gson = new Gson();
    private CategoriesManager manager;

    public CategoriesController(Javalin server, CategoriesManager man) {
        manager = man;

        server.routes(() -> path("category", () -> {
            get("", ctx -> ctx.result(gson.toJson(manager.getCategories())));
            post("", ctx -> {

                if (add(gson.fromJson(ctx.body(), Category.class)))
                    ctx.status(200);
                else
                    ctx.status(400);
            });
        }));
    }

    private boolean add(Category category){
        if(category.getName() == null ||
                category.getName().isBlank()){
            return false;
        }

        manager.addCategory(category);

        return true;
    }
}