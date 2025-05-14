import 'dotenv/config';
import app from "./server/server.js";
import { connectDb } from './db/conection/conection.db.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDb()
    } catch (error) {
        process.exit(1);
    }
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();