const initalState = [
    {
        boardId :1, 
        userEmail : "greenkim@naver.com", 
        title : "첫 게시물입니다",
        content : "첫 게시물 작성완료",
        view : 0,
        like : 1 
    },
    {
        boardId : 2, 
        userEmail : "hjseong1222@naver.com", 
        title : "두번째 게시글입니다.",
        content : "두번째 글입니다",
        view : 0,
        like : 1 
    }
]

let boardId = 3;

function board (state = initalState, action) {
    switch (action.type) {
        case "deleteBoard":
            const newboardList = state.filter((board)=>( board.boardId != action.payload ));
            return newboardList;
        case "modifyBoard":
            const modifyboard = state.map(
                (board) => 
                (board.boardId == action.payload.boardId? action.payload : board)
                )
            return modifyboard;
        default :
            return state;
    }
}
export const deleteBoard 
        = (id) => ({type:"deleteBoard", payload:id});
export const modifyBoard
        = (board) =>({type:"modifyBoard", payload:board})
export default board;