import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {
        // this.boardsService.getAllBoards();
    }

    @Get('/')
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();  // http://localhost:4000/boards 접근시 발동
    }

    // 만약 1개만 가져오고 싶으면 @Body('title') title 형태로 가져오면 됨
    @Post()
    createBoard(
        // 1. DTO 사용할 경우
        @Body() CreateBoardDto: CreateBoardDto

        // 2. DTO 사용 안할 경우
        // @Body('title') title: string,
        // @Body('description') description: string
    ): Board {
        return this.boardsService.createBoard(CreateBoardDto);         // 1. DTO 사용할 경우
        // return this.boardsService.createBoard(title, description);  // 2. DTO 사용 안할 경우
    }
}
