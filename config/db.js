<<<<<<< HEAD
import  mongoose  from 'mongoose';
=======
import  Mongoose  from 'mongoose';
>>>>>>> ba842a41db7caf33f56380a90f6da86c46ce9b52
import  config from 'config';

const db = config.get('mongoURI');

const connectDatabase = async () =>
{
    try{
<<<<<<< HEAD
         await mongoose.connect(db,
=======
         Mongoose.connect(db,
>>>>>>> ba842a41db7caf33f56380a90f6da86c46ce9b52
            { useUnifiedTopology: true });
        console.log('Connected to MongoDB');   
    }catch(error)
    {
        console.error(error.message);

        process.exit(1);
    }
};

export default connectDatabase;

