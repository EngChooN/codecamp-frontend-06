import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const DELETE_COMMENTS = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

// export const UPDATE_COMMENT = gql`
//   mutation updateBoardComment(
//     $updateBoardCommentInput: UpdateBoardCommentInput!
//     $password: String
//     $boardCommentId: ID!
//   ) {
//     updateBoardComment(
//       updateBoardCommentInput: $updateBoardCommentInput
//       password: $password
//       boardCommentId: $boardCommentId
//     ) {
//       _id
//       writer
//       contents
//       rating
//       createdAt
//       updatedAt
//     }
//   }
// `;
