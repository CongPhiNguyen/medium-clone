import mongoose from 'mongoose';

const connection  = {
}


async function dbConnect() {
  if(connection.isConnected){
    return;
  }
  // console.log("process.env",process.env);
  const mongoURI = process.env.MONGODB_URI;
  const db = await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

export default dbConnect; 