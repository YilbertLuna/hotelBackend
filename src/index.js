import 'dotenv/config';
import app from "./server/server.js";
import { connectDb } from './db/conection/conection.db.js';
import os from "os"

const PORT = process.env.PORT || 3000;

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        const inter = interfaces[interfaceName];
        for (const iface of inter) {
            if (iface.family === "IPv4" && !iface.internal) {
                console.log(iface.address);
            }
        }
    }
}

async function startServer() {
    try {
        await connectDb()
    } catch (error) {
        process.exit(1);
    }
    app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor corriendo en http://0.0.0.0:3000');
    getLocalIP()
    });
}



startServer();