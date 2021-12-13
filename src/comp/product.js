import { useDispatch} from 'react-redux'
import {useState} from 'react'
import {increment,decrement} from '../redux/reducer'


function Product() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch()
    

    return (
        
     <div>
            <h1>Product</h1>
            <h1>{value}</h1>
            
            <button onClick={() => {
                dispatch(increment())
                setValue(value+1)
            }} >+</button>
            <button onClick={() => {
                dispatch(decrement())
                setValue(value-1)
            }}>-</button>
       </div>
    )
}

export default Product
