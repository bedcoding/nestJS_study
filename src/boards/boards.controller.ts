import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
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

    // localhost:3333?id=aaaaa&title=bbbbb
    @Get('/:id')
    getBoardById(@Param('id') id: string) {  // 파라미터를 id 하나만 받을 경우 @Param('id') id:string으로 쓰고, 여러개 받으려면 @Param() params: string[]으로 쓴다
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ) {
        return this.boardsService.updateBoadrdStatus(id, status);
    }
}
