import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import { ProjectRoute } from './app/modules/project/project.route';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { BlogRoute } from './app/modules/blog/blog.route';
import { UserRoute } from './app/modules/user/user.route';
import { AuthRoutes } from './app/modules/auth/auth.route';

const app: Application = express();

app.use(express.json());
app.use(
  cors({ origin: 'https://merry-torte-663ccf.netlify.app', credentials: true }),
);

//application route.

app.use('/', BlogRoute);
app.use('/', ProjectRoute);

app.use('/', UserRoute);
app.use('/', AuthRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
  });
});
//route error handler
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
  });
});

app.use(globalErrorHandler);
export default app;
