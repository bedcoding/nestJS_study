import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'pg1101.gabiadb.com',
    port: 5432,
    username: 'study',
    password: 'rhdqnwha12!',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],  // 엔티티를 이용해서 DB테이블 생성 (그래서 엔티티 파일이 어디에 있는지 설정해줌)
    synchronize: true,  // true 값을 주면 애플리케이션을 다시 실행할 때 엔티티 안에서 수정된 컬럼의 길이 타입 변경값 등을 해당 테이블을 Drop한 후 다시 생성해줌
}