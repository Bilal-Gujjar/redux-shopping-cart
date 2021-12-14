import React , {useState}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {add, remove ,update} from '../redux/cmt'


export function Comment () {
    const [text, setText] = useState([])
   const count = useSelector((state) => state.box.invalue)
   const dispatch = useDispatch()
   console.log(text);
    return (
        <div>
            Comments : {count}
        <div>
           <h3> {text} </h3>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
        <button
          
          onClick={() => dispatch(update(text))}
        >
          Add Comment
        </button>
        </div>
        
     
    
        </div>
    )
    
}

export default Comment;

