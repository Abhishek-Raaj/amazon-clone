
export const initialState={
    basket:[],
    user:null
};


 const reducer=(state,action)=>{
    console.log(state); 
        switch(action.type){
            case "ADD_TO_BASKET":
                return{
                    ...state,
                    basket:[...state.basket,action.item]
                };
             case "REMOVE_FROM_BASKET":
                  let index=state.basket.findIndex((element)=>{
                              return element.id==action.id
                  });
                 return {
                     ...state,basket:state.basket.filter((element,inde)=>{
                         return  index!==inde
                     })
                 } 
              case "SET_USER":
                  return{
                      ...state,user:action.user
                  }     
                default:
                    return state;
        }      
};

export default reducer;