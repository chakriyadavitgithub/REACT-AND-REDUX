import { INCR,DECR } from './product.action'

//create a intilalstate
let initialState={pName:"KFC",price:100,quanty:1}
let productReducer=(state=initialState,action)=>{
    //by using the switch 
    switch(action.type){
        case 'INCR':
            return{...state,quanty:state.quanty+1}
            case 'DECR':
                return{...state,quanty:state.quanty-1}
                default:
                    return state;

    }

}
export {productReducer}