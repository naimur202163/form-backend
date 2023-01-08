const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(`mongodb://localhost:27017/formData`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with the server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;