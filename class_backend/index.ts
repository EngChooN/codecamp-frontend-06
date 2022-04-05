console.log("타입스크립트를 실행했어요");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5005,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],

  // db랑 연동 (이걸 해야 db에 만들어짐)
  synchronize: true,

  // 로그 찍어주는 설정 typeorm
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공");
  })
  .catch(() => {
    console.log("연결실패");
  });
