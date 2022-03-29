

// mutation{
//   createBoard(createBoardInput:{
//     writer:"",
//     password:"",
//     title:"",
//     contents:""
//   }){
//     _id
//   }
// }

import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardsNewPage() {


    return (
      <BoardWrite isEdit={false}/>
    )
}