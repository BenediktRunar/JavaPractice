const app = require("./src/server/api");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});



//const router = express.Router;
//router.get("/greeting/:name", ??? );

//const api = require('api.js');
//app.use("/api", api);