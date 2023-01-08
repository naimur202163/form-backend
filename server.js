const app = require("./app");
const PORT = 5000;
const dbConnect = require("./config/dbconnection");
// Database Connecting
dbConnect();

app.listen(PORT, () => {
  console.log(`the server is runnig on https://localhost${PORT}`);
});
