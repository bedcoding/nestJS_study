// GraphQL 입력 타입으로 사용할 입력 오브젝트를 하나 생성합니다.
import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class InputProduct {
    @Field()
    readonly title!: string;
    @Field(() => Int)
    readonly price!: number;
}