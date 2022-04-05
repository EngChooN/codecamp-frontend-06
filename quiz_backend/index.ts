import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5005,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  synchronize: true,
  entities: [],
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("성공");
  })
  .catch(() => {
    console.log("실패");
  });
