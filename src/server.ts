import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import apiRouter from './routes/index.js';
// import exampleRouter from './routes/exampleRouter';

const app: Application = express();
const __dirname = path.resolve();
const PORT= process.env.PORT || '5000';

// <--- Setting middlewares -->

// moran
if (process.env.NODE_ENV === 'production') { 
    app.use(morgan('combined')); // 배포환경이면
 } else {
    app.use(morgan('dev')); // 개발환경이면
 }

 // static routing
app.use('/', express.static(path.join(__dirname, 'src/public')));

// dynamic routing
// app.use('/example', exampleRouter );

app.use('/api', apiRouter);
app.get('/example', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        isSucess: true,
        message: 'example page'
    });
});

// setting body-parser
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.listen(PORT, () => {
    console.log(`웹서버 실행, http://localhost:${PORT}`)
})
