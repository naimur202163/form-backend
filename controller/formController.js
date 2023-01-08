const Form = require("../model/formSchema");

exports.getAllFormData = async (req, res, next) => {
  try {
    let datas = await Form.find({});
    res.status(200).json({
      success: true,
      message: "from data loaded successfuly",
      datas,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.crateFormData = async (req, res, next) => {
  try {
    const form = await Form.create(req.body);
    res.status(200).json({
      message: "Form data added success fully",
      success: true,
      form,
    });
  } catch (error) {
    console.log(error);
  }
};
