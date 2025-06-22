import * as express from 'express';
import { Response, Request } from 'express';
import { Db } from '../../../../database/db';
import { Logger } from '../../../../helpers/logger';
import { genericError, RequestBody, RequestQuery } from '../../../../helpers/utils';
import { UserService } from '../services/user.service';
import { Entities, Hash } from '../../../../helpers';
import { jwtAuth } from '../middlewares/api-auth';

export class UserController {
  constructor() {
    Logger.info('User controller initialized...');
  }

  // Get current user handler
  public getCurrentUser = async (req: Request, res: Response): Promise<void> => {
    let body;
    try {
      const db = res.locals.db as Db;
      const service = new UserService({ db });
      const userId = req.userId;
      const response = await service.GetUserById(userId);

      body = {
        data: response,
      };
    } catch (error) {
      genericError(error, res);
    }
    res.json(body);
  };
}
