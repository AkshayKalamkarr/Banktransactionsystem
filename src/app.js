import express from 'express';
import router from './routes/auth.routes';


const app=express();

app.use("/api/auth",router)





export default app;