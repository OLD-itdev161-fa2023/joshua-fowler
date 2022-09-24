import  mongoose  from 'mongoose';
import  Mongoose  from 'mongoose';

import  config from 'config';
const db = config.get('mongoURI');

const connectDatabase = async () =>
{
await mongoose.connect(db,{ useUnifiedTopology: true  });
         Mongoose.connect(db,
            { useUnifiedTopology: true });
        console.log('Connected to MongoDB');   
    }catch(error)
    {
        console.error(error.message);

        process.exit(1);
    }
};

export default connectDatabase;

