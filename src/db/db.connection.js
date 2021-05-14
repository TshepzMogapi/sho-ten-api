const mongoose = require('mongoose');

module.exports = async () => {
  try {
    //TODO: use env variable?
    await mongoose.connect(`${process.env.DB_URL}`, {
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
