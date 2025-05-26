import { useState } from "react"

let Product=()=>{

    let [product,setProduct]=useState({p_Name:"Noice Watch Smart",price:999,quantity:1})
    let incrHandler=()=>{
        setProduct({...Product,quantity:product.quantity+1})
    }
    let decrHandler=()=>{
        setProduct({...Product,quantity:product.quantity-1})
    }

    return <div>
        <h4>Product Component</h4>
        <pre>{JSON.stringify(product)}</pre>
        <h3>product Name:{product.p_Name}</h3>
        <h3>Price:{product.price}</h3>
        <button onClick={decrHandler}>-</button>{product.quantity}<button onClick={incrHandler}>+</button>
        <h3>Total :{product.price*product.quantity}</h3>

    </div>
}

export default Product;