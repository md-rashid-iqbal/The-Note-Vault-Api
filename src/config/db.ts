import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI || '';
        if (!mongoURI) throw new Error('MONGO_URI environmental variable is unmapped.');
        
        const conn = await mongoose.connect(mongoURI);
        console.log(`[database]: Data engine securely anchored at: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`[database connection failure]: ${error.message}`);
        process.exit(1);
    }
};