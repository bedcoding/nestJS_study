// Graphql 출력 타입으로 사용할 데이터 오브젝트
import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class ProductDto {
    @Field()
    readonly id?: number;
    @Field()
    readonly title!: string;
    @Field(() => Int)
    readonly price!: number;
}