import { useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import {incrementMain,decrementMain} from '../redux/newreducer'


function Page() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch()
   const  Str = useSelector((state) => state.clicker.mainvalue)
    

    return (
        
     <div>
            
            
            <h1>Page </h1>
            <h1>{Str}</h1>
            <br/>
            
            
            <button onClick={() => {
                dispatch(incrementMain())
                setValue(value+1)
            }} >+</button>
            <button onClick={() => {
                dispatch(decrementMain ())
                setValue(value-1)
            }}>-</button>
       </div>
    )
}

export default Page
