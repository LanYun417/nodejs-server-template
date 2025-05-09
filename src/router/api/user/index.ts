import express from 'express';
import { Router } from 'express';
import { userHandle } from './handler/user.handle';

const router: Router = express.Router();

/**
 * @api {get} /user/getUser 请求用户信息
 * @apiName 请求用户信息
 * @apiGroup 用户
 *
 * @apiSampleRequest /user/getUser
 *
 * @apiSuccess {Number} code 响应状态码
 * @apiSuccess {String} message 响应消息
 * @apiSuccess {String} username 用户名
 * @apiSuccess {String} password 密码
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "username": "lanyun",
 *       "password": "123456"
 *     }
 */
router.get('/getUser', userHandle);

export default router;
