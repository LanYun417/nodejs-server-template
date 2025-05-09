import sequelize from '@/models';
import { verifyToken } from '@/utils/u.crypto';
import { sendResult } from '@/utils/u.sendResult';
import { Handler, NextFunction, Request, Response } from 'express';

/**
 * 权限校验中间件
 * @param { string | string[] } authorityName 权限名称，传入 * 表示允许所有管理用户
 */
export function permissionsValidation(authorityName: string | string[]): Handler {
  return async (req: Request, res: Response, next: NextFunction) => {
    // 获取 Token
    const authorization: string | undefined = req.headers.authorization;

    if (authorization && authorization !== void 0) {
      if (!authorization.includes('Bearer')) {
        sendResult(res, 401, 'Token 格式错误');
        return;
      }

      try {
        const token = authorization.split('Bearer')[1].trim();

        const verifyResult: any = await verifyToken(token);

        if (verifyResult.id && verifyResult.id !== void 0) {
          // 获取用户信息
          const [results] = await sequelize.query(`
            SELECT auth.name as authority 
            FROM admin_users as user
            JOIN admin_authoritys as auth
            ON user.authority = auth.id
            WHERE user.id = '${verifyResult.id}' LIMIT 1;
          `);

          if (results.length < 1) {
            sendResult(res, 401, '用户不存在');
            return;
          }

          const auth = (results[0] as any).authority;

          if (typeof authorityName === 'string') {
            // 允许所有管理用户
            if (authorityName === '*') {
              req['verifyInfo'] = verifyResult;
              next();
              return;
            }

            if (auth === authorityName) {
              req['verifyInfo'] = verifyResult;
              next();
            } else {
              sendResult(res, 401, '权限不足');
            }
            return;
          }

          if (authorityName instanceof Array) {
            if (authorityName.includes(auth)) {
              req['verifyInfo'] = verifyResult;
              next();
            } else {
              sendResult(res, 401, '权限不足');
            }
            return;
          }
        } else {
          sendResult(res, 401, 'Token无效');
          return;
        }
      } catch (error: unknown) {
        next(error as Error);
      }
      return;
    } else {
      sendResult(res, 401, '请先登录');
    }
  };
}
