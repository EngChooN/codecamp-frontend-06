import { DataSource } from "typeorm";
import { Product } from "./Product.postgres";
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateProductInput {
    name: String
    detail: String
    price: Int
    # deletedAt: boolean;
  }

  type Return {
    _id: String
    number: Int
    message: String
  }

  type Product {
    _id: String
    seller: String
    name: String
    detail: String
    price: Int
    # deletedAt: boolean
  }

  type Query {
    fetchProducts: [Product!]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String  연습용(example)
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): Return
    # createProduct: [Product!]
  }
`;

// 2. API
const resolvers = {
  // Query: {
  //   fetchProducts: async () => {
  //     // 데이터베이스에 접속해서 게시물 가져오기
  //     const result = await Product.find();
  //     return result;
  //   },

  //   // fetchProduct: async () => {
  //   //   const result = await Product.findOne();
  //   //   return result;
  //   // },
  // },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기
      await Product.insert({
        ...args,
        ...args.createProductInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      //삭제하기, 소프트삭제
      // Board.delete({ writer: "철수" });
      // Board.update({ writer: "철수" }, { deletedAt: new Date() });
      return "상품을 등록했습니다!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5005,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  synchronize: true,
  entities: [Product],
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("성공");
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("실패");
  });
