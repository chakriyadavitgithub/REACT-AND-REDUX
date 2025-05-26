import { useDispatch, useSelector } from "react-redux"
import { incrAction,decrAction } from "../../reduxnew/product/product.action";

let Product=()=>{
    //by using the useDispatch action
    let dispatch=useDispatch();
    //by using the selector 
    //useSelector is a React-Redux hook used to access the Redux store's state inside a React component.
    let product=useSelector(state=>state);
    let incrHandler=()=>{
        dispatch(incrAction());
    }
    let decrHandler=()=>{
        dispatch(decrAction());
    }
    return <div> 
        <pre>{JSON.stringify(product)}</pre>
        <h2>Product Component</h2>

        <h5>Product Name:{product.pName}</h5>
        <h5>Price:{product.price}</h5>
        <h5>Total:{product.quanty * product.price}</h5>
        
        <button onClick={decrHandler}>-</button>
        {product.quanty}
        <button onClick={incrHandler}>+</button>
    </div>
}
export default Product;