import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';

// eslint-disable-next-line turbo/no-undeclared-env-vars
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: Number(DB_PORT),
      database: DB_DATABASE,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
