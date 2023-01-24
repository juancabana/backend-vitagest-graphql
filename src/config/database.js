import {connect} from 'mongoose';

const connectDB = async () => {
    try {
        await connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
          });
          console.log('DB Connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;
