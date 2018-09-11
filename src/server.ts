import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
require('dotenv').config();

// import router
import UserRouter from './routers/UserRouter';

// server class
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    const MONGO_URI = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DBNAME}?authSource=admin`
    mongoose.set('useCreateIndex', true);
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI, { useNewUrlParser: true });

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(cors());
  }

  public routes():void {
    this.app.route('/').get((req, res) => {
      res.status(200).json('Catatan Keuangan Rest API');
    });    
    
    this.app.use('/users', UserRouter);
  }
}

export default new Server().app;