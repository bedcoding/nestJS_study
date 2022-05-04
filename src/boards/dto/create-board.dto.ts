// 여기서 pipe 쓰면 핸들러 레벨
import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}