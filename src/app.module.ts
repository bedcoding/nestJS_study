// 시작점 (여러개의 모듈을 모아놓음)
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule],
})
export class AppModule {}