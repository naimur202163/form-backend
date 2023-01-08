const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter the Required Numbers"],
    trim: true,
  },
  selector: {
    type: String,
    required: [true, "Please Enter the Required Selector"],
  },
  agree: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Form", formSchema);
