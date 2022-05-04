import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];  // private: 다른 컴포넌트에서 boards 값 변경 못하게 막음

    getAllBoards(): Board[] {
        return this.boards;
    }

    // createBoard(title: string, description: string) {  // DTO를 쓰지 않는 경우
    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;
        
        const board: Board = {
            id: uuid,
            title,
            description,
            status: BoardStatus.PUBLIC  // default 값: 전체공개
        }

        this.boards.push(board);
        return board;
    }
}
