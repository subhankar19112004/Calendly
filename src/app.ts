import express, {Express} from "express";
import { usersRouter } from "./routes/users.routes.js";
import { errorHandler } from "./middlewares/error-handlers.js";

const app: Express = express();

app.use(express.json());

app.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        message: 'Service is running',
        timestamp: new Date().toISOString()
    });
});

app.use('/users', usersRouter);

app.use(errorHandler)


export default app;