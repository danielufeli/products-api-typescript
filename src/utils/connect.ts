import mongoose from 'mongoose';
import config from 'config';

const connect = async () => {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        console.log("DB Connected");
    } catch (error) {
        console.error('Could not connect to db');
        process.exit(1);
    }
}

export default connect;