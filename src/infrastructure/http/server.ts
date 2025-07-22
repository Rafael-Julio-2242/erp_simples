import express from 'express';
import { handle } from 'i18next-http-middleware';
import i18next from '../../shared/i18n/config';
import indexRouter from './routes';

const app = express();

app.use(express.json());
app.use(handle(i18next));
app.use('/api', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
