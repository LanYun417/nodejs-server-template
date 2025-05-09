import cors from 'cors';
import cookieParser from 'cookie-parser';
import { error } from '@/utils/u.logger';
import apiRouter from '@/router/api/index';
import { morganMiddleware } from '@/middleware/morgan';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morganMiddleware());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/api', apiRouter);
app.use('/apiDoc', express.static('apidoc'));
app.use('/static', express.static('upload'));

// Express 统一错误处理
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
	error(err);
});

export const exp = app;
