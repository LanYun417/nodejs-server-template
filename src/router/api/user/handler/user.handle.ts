import { sendResult } from '@/utils/u.sendResult';
import { NextFunction, Request, Response } from 'express';

export function userHandle(req: Request, res: Response, next: NextFunction): void {
	sendResult(res, 200, 'Success', {
		username: 'lanyun',
		password: '123456',
	});
}
