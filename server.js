const jsonServer = require("json-server");
const auth = require("json-server-auth");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 9000;
app.db = router.db;

app.use(middlewares);
app.use(auth);
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
module.exports = app;
