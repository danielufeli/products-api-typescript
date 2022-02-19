import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

const connect = async () => {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        logger.info("DB Connected");
    } catch (error) {
        logger.error('Could not connect to db');
        process.exit(1);
    }
}

export default connect;