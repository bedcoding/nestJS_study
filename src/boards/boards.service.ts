import { v1 as uuid } from 'uuid';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)  // 이걸 넣으면 서비스 안에서 repository 쓸 수 있게 됨
        private boardRepository: BoardRepository,
    ) {   
    }

    async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne({ where: { id } });

        if(!found) {
            throw new NotFoundException("아이디 없음");
        }

        return found;
    }
    
    // private boards: Board[] = [];  // private: 다른 컴포넌트에서 boards 값 변경 못하게 막음

    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // // createBoard(title: string, description: string) {  // DTO를 쓰지 않는 경우
    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;
        
    //     const board: Board = {
    //         id: uuid,
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC  // default 값: 전체공개
    //     }

    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => {
    //         return board.id === id;
    //     })

    //     // 아이디가 없는 경우
    //     if(!found) {
    //         throw new NotFoundException("해당 아이디 없음");
    //     }

    //     return found;
    // }

    // deleteBoard(id: string): void {
    //     // 없는 게시물 찾기
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => {
    //         return board.id !== found.id;  // 같지 않은 것만 남기고 같은건 지운다
    //     })
    // }

    // updateBoadrdStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
