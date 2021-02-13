import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = {
    success: true,
    msg: "Hello World!",
  };
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8080");

app.listen(`localhost:8080`);
