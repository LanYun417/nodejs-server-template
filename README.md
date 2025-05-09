<div align="center">
  <br/>
  <br/>
  <img src="./logo.svg" width="100" alt="NodeJS Logo">
  <br/>
  <br/>
  <p>一个简单的 NodeJS + TS 接口服务项目模板</p>
</div>

<h1 align="center">NodeJS 接口服务项目模板</h1>

## 📚 目录

- [📚 目录](#-目录)
- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [环境要求](#环境要求)
- [快速开始](#快速开始)
  - [安装](#安装)
  - [配置](#配置)
  - [启动服务](#启动服务)
- [开发指南](#开发指南)
  - [项目配置](#项目配置)
  - [数据库配置](#数据库配置)
  - [日志配置](#日志配置)
  - [API 路由开发](#api-路由开发)
  - [中间件使用](#中间件使用)
  - [模型定义](#模型定义)
  - [工具类使用](#工具类使用)
- [API 文档](#api-文档)
- [部署指南](#部署指南)
  - [开发环境](#开发环境)
  - [测试环境](#测试环境)
  - [生产环境](#生产环境)
- [常见问题](#常见问题)
  - [数据库连接失败](#数据库连接失败)
  - [API 文档生成失败](#api-文档生成失败)
  - [启动服务失败](#启动服务失败)
- [贡献指南](#贡献指南)
- [许可证](#许可证)
- [作者](#作者)

## 项目简介

NodeJS Server Template 是一个功能完善的 Node.js 服务器项目模板，基于 Express 框架和 TypeScript 开发。该模板提供了一套完整的后端服务架构，包括 API 路由、数据库集成、用户认证、日志记录、错误处理等功能。适用于快速搭建 RESTful API 服务、Web 应用后端以及各类中小型服务端项目。

本模板旨在提供一个规范、可扩展的项目结构，帮助开发者快速进入业务开发阶段，无需花费大量时间在项目框架搭建上。同时，模板集成了当前流行的技术栈和最佳实践，确保开发出的应用具有良好的性能和可维护性。

## 功能特性

- ✅ **完整的 TypeScript 支持**：提供了类型安全和高效的开发体验
- ✅ **Express 框架**：基于成熟稳定的 Web 服务框架
- ✅ **MySQL 数据库集成**：使用 Sequelize ORM 进行数据库操作
- ✅ **RESTful API**：标准化的 API 设计和实现
- ✅ **API 文档自动生成**：使用 apiDoc 自动生成 API 文档
- ✅ **用户认证**：集成 JWT 认证机制
- ✅ **日志系统**：使用 log4js 进行日志记录
- ✅ **文件上传**：支持文件上传和处理
- ✅ **跨域支持**：内置 CORS 中间件
- ✅ **错误处理**：统一的错误处理机制
- ✅ **环境配置**：基于 dotenv 的环境配置
- ✅ **IP 地址解析**：集成 ip2region 进行 IP 地址查询
- ✅ **加密工具**：提供常用的加密解密功能
- ✅ **热重载**：开发模式下支持热重载

## 技术栈

- **运行环境**：Node.js (>=16.20.2)
- **开发语言**：TypeScript
- **Web 框架**：Express
- **ORM 框架**：Sequelize
- **数据库**：MySQL
- **日志工具**：log4js, morgan
- **文档工具**：apiDoc
- **认证机制**：JWT (jsonwebtoken)
- **其他工具**：
  - cors (跨域)
  - multer (文件上传)
  - dotenv (环境变量)
  - ip2region (IP 地址解析)
  - webp-converter (WebP 图片转换)

## 项目结构

```
nodejs-server-template/
├── apidoc/                # API文档生成目录
├── config/                # 项目配置文件
│   ├── db.config.ts       # 数据库配置
│   └── log4js.config.ts   # 日志配置
├── logs/                  # 日志文件目录
├── node_modules/          # 依赖包
├── public/                # 静态资源目录
├── src/                   # 源代码目录
│   ├── express/           # Express应用配置
│   │   └── index.ts       # Express实例和中间件配置
│   ├── middleware/        # 自定义中间件
│   │   └── morgan.ts      # Morgan日志中间件
│   ├── models/            # 数据模型
│   │   ├── init.ts        # 模型初始化
│   │   └── index.ts       # Sequelize配置
│   ├── router/            # 路由目录
│   │   └── api/           # API路由
│   │       ├── user/      # 用户相关API
│   │       │   ├── handler/  # 请求处理器
│   │       │   └── index.ts  # 用户路由定义
│   │       └── index.ts   # API路由入口
│   └── utils/             # 工具类
│       ├── u.crypto.ts    # 加密解密工具
│       ├── u.file.ts      # 文件处理工具
│       ├── u.ip2region.ts # IP解析工具
│       ├── u.logger.ts    # 日志工具
│       └── u.sendResult.ts # 响应结果工具
├── .env                   # 环境变量配置
├── .gitignore             # Git忽略文件
├── .nvmrc                 # Node版本配置
├── apidoc.json            # API文档配置
├── check-node-version.js  # Node版本检查脚本
├── env.d.ts               # 环境变量类型定义
├── index.ts               # 应用入口文件
├── package.json           # 项目依赖和脚本
├── package-lock.json      # 依赖版本锁定
├── README.md              # 项目说明文档
└── tsconfig.json          # TypeScript配置
```

## 环境要求

- Node.js >= 16.20.2
- npm 或 yarn
- MySQL 数据库

## 快速开始

### 安装

1. 克隆仓库到本地：

```bash
git clone https://gitee.com/lanyun417/odeservertemplate.git
cd nodejs-server-template
```

2. 安装依赖：

```bash
npm install
# 或使用 yarn
yarn install
```

如果您的 Node.js 版本低于 16.20.2，安装过程中会提示错误。请使用 NVM 或其他工具升级 Node.js 版本。

### 配置

1. 环境变量配置

复制`.env.example`文件（如果存在）或创建一个新的`.env`文件，根据您的环境进行配置：

```bash
# 接口运行端口
SERVER_PORT=3000

# 接口域名 || 地址
SERVER_HOST=http://localhost:3000

# Token 密钥
TOKEN_SECRET=your_secret_key
```

2. 数据库配置

修改`config/db.config.ts`文件中的数据库连接信息：

```typescript
export const dbConfig: DatabaseConfig = {
	host: 'localhost', // 数据库地址
	user: 'root', // 数据库用户名
	database: 'your_db', // 数据库名称
	password: 'your_password', // 数据库密码
	dialect: 'mysql', // 数据库类型
	pool: {
		// 连接池配置
		max: 10, // 最大连接数
		min: 1, // 最小连接数
		acquire: 30000, // 最大连接时间
		idle: 10000, // 空闲连接回收时间
	},
	timezone: '+08:00', // 东八时区
};
```

确保已创建对应的数据库，或在首次运行时允许 Sequelize 自动创建数据库。

### 启动服务

1. 开发模式启动（带热重载）：

```bash
npm run dev
# 或使用 yarn
yarn dev
```

2. 生产模式启动：

```bash
npm start
# 或使用 yarn
yarn start
```

3. 生成 API 文档：

```bash
npm run doc
# 或使用 yarn
yarn doc
```

启动成功后，您可以通过以下地址访问服务：

- API 服务：http://localhost:3000/api
- API 文档：http://localhost:3000/apiDoc

## 开发指南

### 项目配置

项目的主要配置文件包括：

1. `.env`：环境变量配置
2. `config/db.config.ts`：数据库配置
3. `config/log4js.config.ts`：日志配置
4. `tsconfig.json`：TypeScript 配置
5. `apidoc.json`：API 文档配置

### 数据库配置

数据库配置位于`config/db.config.ts`文件中，支持 MySQL 数据库。通过修改该文件可以配置数据库连接信息和连接池参数。Sequelize 实例的创建位于`src/models/index.ts`文件中。

```typescript
import { Sequelize } from 'sequelize';
import { dbLog } from '@/utils/u.logger';
import { dbConfig } from 'config/db.config';

// 数据库连接配置
const { host, user, password, database, dialect, pool, timezone } = dbConfig;

// 创建 Sequelize 实例
const sequelize: Sequelize = new Sequelize(database, user, password, {
	host,
	pool,
	dialect,
	timezone,
	logging: (log: string): void => dbLog(log),
});

export default sequelize;
```

### 日志配置

日志配置位于`config/log4js.config.ts`文件中，使用 log4js 库进行日志记录。日志文件存储在`logs`目录下，按照不同的日志级别和用途分为多个文件。

日志工具封装在`src/utils/u.logger.ts`文件中，提供了不同级别的日志记录函数：

```typescript
import log4js from 'log4js';

// 导入日志配置
log4js.configure(/* 配置 */);

// 获取不同类型的日志记录器
const logConsole = log4js.getLogger('console');
const logDebug = log4js.getLogger('debug');
const logError = log4js.getLogger('error');
const logDatabase = log4js.getLogger('database');

// 导出日志函数
export const console = (message: any): void => logConsole.info(message);
export const debug = (message: any): void => logDebug.debug(message);
export const error = (message: any): void => logError.error(message);
export const dbLog = (message: any): void => logDatabase.info(message);
```

### API 路由开发

API 路由采用模块化组织，位于`src/router/api`目录下。每个功能模块有自己的路由文件和处理器。

例如，用户模块的路由定义在`src/router/api/user/index.ts`文件中：

```typescript
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
```

添加新的 API 路由需要：

1. 在对应的模块目录下创建路由文件
2. 在路由文件中定义 API 路由和处理函数
3. 在上级路由文件中引入并注册新路由

### 中间件使用

中间件配置位于`src/express/index.ts`文件中，已经配置了常用的中间件：

```typescript
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
```

添加自定义中间件可以：

1. 在`src/middleware`目录下创建中间件文件
2. 在`src/express/index.ts`文件中引入并使用中间件

### 模型定义

数据模型定义位于`src/models`目录下，使用 Sequelize ORM 进行定义。模型文件应遵循命名约定：`m.实体名称.ts`。

添加新的数据模型：

1. 在`src/models`目录下创建模型文件
2. 在模型文件中定义数据模型和关联关系
3. 在`src/models/init.ts`文件中引入模型

### 工具类使用

项目提供了多个工具类，位于`src/utils`目录下：

- `u.crypto.ts`：加密解密工具
- `u.file.ts`：文件处理工具
- `u.ip2region.ts`：IP 解析工具
- `u.logger.ts`：日志工具
- `u.sendResult.ts`：响应结果工具

使用工具类只需导入对应的函数即可：

```typescript
import { encrypt, decrypt } from '@/utils/u.crypto';
import { success, fail } from '@/utils/u.sendResult';
```

## API 文档

项目使用 apiDoc 自动生成 API 文档。在 API 路由定义中添加 apiDoc 注释，然后运行以下命令生成文档：

```bash
npm run doc
```

生成的文档位于`apidoc`目录下，可以通过`http://localhost:3000/apiDoc`访问。

apiDoc 注释示例：

```typescript
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
```

## 部署指南

### 开发环境

开发环境建议使用`npm run dev`命令启动，支持热重载，便于开发调试。

### 测试环境

测试环境可以使用 PM2 进行进程管理：

1. 安装 PM2：

```bash
npm install -g pm2
```

2. 创建 PM2 配置文件`ecosystem.config.js`：

```javascript
module.exports = {
	apps: [
		{
			name: 'nodejs-server-template-test',
			script: 'npm',
			args: 'start',
			env: {
				NODE_ENV: 'test',
			},
		},
	],
};
```

3. 启动服务：

```bash
pm2 start ecosystem.config.js
```

### 生产环境

生产环境部署步骤：

1. 构建项目（如需编译）
2. 配置环境变量
3. 使用 PM2 或其他进程管理工具启动服务

PM2 生产环境配置示例：

```javascript
module.exports = {
	apps: [
		{
			name: 'nodejs-server-template-prod',
			script: 'npm',
			args: 'start',
			env: {
				NODE_ENV: 'production',
			},
			instances: 'max',
			exec_mode: 'cluster',
		},
	],
};
```

## 常见问题

### 数据库连接失败

- 检查数据库配置是否正确
- 确保数据库服务已启动
- 验证数据库用户名和密码

### API 文档生成失败

- 确保 apiDoc 已正确安装
- 检查 apiDoc 注释格式是否正确
- 验证 apidoc.json 配置是否有效

### 启动服务失败

- 检查 Node.js 版本是否满足要求
- 确保所有依赖已安装
- 验证端口是否被占用

## 贡献指南

欢迎贡献代码或提出建议！请遵循以下步骤：

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 许可证

ISC

## 作者

LanYun

---

_本项目模板由 LanYun 开发和维护。_
#   n o d e j s - s e r v e r - t e m p l a t e  
 