const mongoose = require("mongoose");

const connectDatebase = () => {
  mongoose.connect(process.env.DB_lOCAL_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
  }).then(con=>{
      console.log(`MongoDB DataBase Connected with HOST:${con.connection.host}`)
  });
};

module.exports = connectDatebase;
