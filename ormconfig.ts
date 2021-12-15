import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'social_login',
  entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: {
    migrationsDir: '/src/migrations',
  },
  autoLoadEntities: true,
  timezone: 'Z',
  charset: 'utf8mb4',
  synchronize: false,
};

export = config;
