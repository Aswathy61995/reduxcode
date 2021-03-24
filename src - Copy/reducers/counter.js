const counterReducer =(state=0,action)=>{
    switch(action.type){
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
        case "MULTIPLY BY PAYLOAD":
          //console.log(action.payload)
        return state * action.payload;
      default :
        return 0;
    }
  }
  export default counterReducer;

  