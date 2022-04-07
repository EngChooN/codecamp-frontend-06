console.log("타입스크립트를 실행했어요");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board!]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String  연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String # - 실제사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기
      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      //삭제하기, 소프트삭제
      // Board.delete({ writer: "철수" });
      // Board.update({ writer: "철수" }, { deletedAt: new Date() });
      return "게시물을 등록했습니다!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

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
    // 백엔드 api 오픈 (24시간동안 접속가능하게끔 열어주기)
  })
  .catch(() => {
    console.log("연결실패");
  });
