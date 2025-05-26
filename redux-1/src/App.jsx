import Product from "./component/product/product"
import { Provider } from "react-redux"
import{store} from './reduxnew/store'
let App=()=>{
  return <div>
    <Provider store={store}>
       <h2>App Component</h2>
       <hr />
        <Product/>
      </Provider>
   </div>
}
export default App;
