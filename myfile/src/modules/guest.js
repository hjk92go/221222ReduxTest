const initalState = [
    {
        guestId : 1,
        name : "green",
        text:"블로그 잘봤습니다.",
    },
    {
        guestId : 2,
        name : "익명",
        text:"들렸다가요.",
    },
]

let guestId = 3;
  


function guest(state = initalState,action) {
    switch (action.type) {
        case "addGuest" :
            const newGuest = {...action.payload, guestId : guestId}
            guestId++;
            const newGuestArray = state.concat(newGuest)   
            return newGuestArray;
        default :                           
            return state;
    }
}



export const addGuest = (guest) =>({type:"addGuest", payload:guest})
export default guest;