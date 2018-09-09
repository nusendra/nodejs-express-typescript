import { Router, Request, Response, NextFunction} from 'express';
import User from '../models/User';

class UserRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public index(req: Request, res: Response): void {
    User.find().then(result => {
      res.status(200).json(result);
    });
  }

  public store(req: Request, res: Response): void {
    
  }

  public update(req: Request, res: Response): void {
    
  }

  public delete(req: Request, res: Response): void {
    
  }

  routes() {
    this.router.get('/', this.index);
  }
}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;