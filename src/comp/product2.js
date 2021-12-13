import { useDispatch} from 'react-redux'
import {useState} from 'react'
import {increment,decrement} from '../redux/reducer'


function Product2() {
    const [counter2, setCounter2] = useState(0)
    
    const dispatch = useDispatch()

    return (
     <div>
            <h1>Product2</h1>
            <h1>{counter2}</h1>
            <button onClick={() => {
                dispatch(increment())
                setCounter2(counter2+1)
                
            }}>+</button>
            <button onClick={() => {
                dispatch(decrement())
                setCounter2(counter2 - 1)}}>-</button>
        </div>
    )
}

export default Product2
