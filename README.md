## 개발과정
1. 모듈 등록: nest g module boards (study1.jpg 파일 참조) => nest에서, generate(생성)한다, 모듈을, 내가 만든 이름으로
2. 위에서 만든 모듈 안에 컨트롤러 생성: nest g controller boards --no-spec (--no-spec: 테스트를 위한 소스코드 생성 안함)
3. 위에서 만든 모듈 안에 서비스 생성: nest g service boards --no-spec
4. 위에서 만든 컨트롤러 안에 핸들러 추가(@Get) => 해당 핸들러 안에서 서비스에 있는 로직 호출
5. Get 추가한 뒤 http://localhost:4000/boards 형태로 주소창 입력하고 엔터치면 boards 컨트롤러가 호출하는 서비스가 호출됨
6. model을 만들어서 필요한 데이터들의 타입 정의 (interface나 class로 정의)
7. DTO를 이용해서 어떤 형태의 데이터들이 왔다갔다 하는지 정의
8. Pipe를 통한 유효성 체크 (class-validator, class-transformer)
```
    npm install class-validator class-transformer --save
```
9. typeORM 설치 (npm install pg typeorm @nestjs/typeorm --save)
10. typeORM 설정폴더 config 만들고 그 밑에 설정파일 추가
11. Entity 생성 (필요한 컬럼들을 클래스 안에서 정의)

## 역할
1. app 모듈: 모든 대대를 지휘하는 본부
2. app 안에 있는 모듈들: 병력들의 모임 (1대대, 2대대, 3대대)
3. 각 모듈들 안에 있는 컨트롤러들: 장교 (대대 안에서 병사들한테 일시킴)
4. 각 컨트롤러가 호출하는 서비스: 병사 (장교가 시킨 일을 하는 병사들 -> 로직 처리, DB에 접근 등)

```
but 컨트롤러가 바로 서비스를 사용할 수 없다. A컨트롤러가 B서비스를 쓰려면 A가 B를 가져와야 함 => 프로바이더 등록 필요
```

5. 프로바이더
- 서비스를 컨트롤러에서 사용하려면 그 서비스를 주입해야 함 (하나의 서비스를 여러 컨트롤러에서 사용 가능) -> study2.jpg, study3.jpg
- 생성된 서비스에는 @Injectable()가 붙어있는데 이게 붙어 있으면 다른 컴포넌트에서 이 서비스를 사용할 수 있다.

6. DTO (Data Transfer Object)
- DB에서 데이터를 얻어서 Service나 Controller 등으로 보낼 때 사용하는 객체
- 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
- interface나 class를 이용해서 정의 (보통 클래스 사용)
- 데이터 유효성 체크하기 좋아 (이상한 데이터 던지면 컷하려고)
- 주고 받는 데이터가 엄청 많으면 하나하나 받기 어렵고 만약 title이라는 프로퍼티를 t라고 이름 바꾸면 싹다 찾아서 고쳐줘야 한다

7. Pipe
- @Injectable() 데코레이터로 주석이 달린 클래스
- 파이프가 없으면 클라이언트가 서버로 주는 데이터가 바로 @Get()에 들어옴
- 중간에 파이프가 있으면 거기서 data transformation(예: 문자열을 정수로 변환)과 data validation(이상한 데이터 들어오면 컷) 처리함

7-2. Pipe의 종류
- 핸들러 레벨 (모든 파라미터에 적용)
- 파라미터 레벨 (특정 파라미터에만 적용 -> 예를들면 3개의 파라미터를 받았을 때 그 중 title 같은 1개만 파이프 적용)
- 글로벌 레벨 (클라이언트에서 서버로 주는 모든 요청에 적용 -> 최상단 main.ts에 넣어줌)
- NestJS에서 기본적으로 만들어놓은 파이프 6종류 있음

8. typeORM으로 DB연동
