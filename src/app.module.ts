// 시작점 (여러개의 모듈을 모아놓음)
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './config/typeorm.config';
import { ProductModule } from './product/product.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    
    // graphQL 연동 추가
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gpl',
    }),

    // 1. rest api 방식
    BoardsModule,  
    
    // 2. graphql api 방식
    ProductModule
  ],
})
export class AppModule {}