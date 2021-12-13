import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {add, remove } from '../redux/commentreducer'


export function Comment () {

   const count = useSelector((state) => state.commenter.mainvalue)
   const dispatch = useDispatch()

    return (
        <div>
            Commenter box  : {count}
<h1>
        <button
          
          onClick={() => dispatch(add(count))}
        >
          Click here to  Login
        </button>
        
        <button
          
          onClick={() => dispatch(remove())}
        >
          Update
        </button>
        </h1>
        </div>
    )
}

export default Comment;