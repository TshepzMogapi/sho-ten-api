const mongoose = require('mongoose');

module.exports = async () => {
  try {
    //TODO: use env variable?
    await mongoose.connect('mongodb://localhost:27017/sho-ten-dev', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected :)');
  } catch (error) {
    console.log('DB Connection Error!!!');
    throw new Error(error);
  }
};
