const app = require("./src/server/api");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});



//const greeting = require('./src/greeting');

//console.log(greeting('bro'));
