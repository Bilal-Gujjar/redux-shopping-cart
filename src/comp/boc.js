import React , {useState}from 'react'
//import { useSelector,useDispatch } from 'react-redux'
//import {update} from '../redux/cmt'


export function Comment () {
     const [text, setText] = useState(['1','2','3','4','5' ])
  //  const count = useSelector((state) => state.box.invalue)
  //  const dispatch = useDispatch()
 // const arr = ['1','2','3','4','5' ]
function test() {
  text.push()
    console.log(text);
     
  
}

 
    return (
        <div>
          <hr/>
          {/* <h3>
          {arr.map((arr,index)=>{
            return <div key={arr}>{arr}</div>
          })}
          </h3>
          
          <div>
          
          <input type="text" onChange= {(e)=>(e.target.value)}/>
    <button onClick={test}>Add</button> */}

          

            Comments : {text}
        <div>
           <h3> {text} </h3>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
        <button
          
          onClick={test}
        >
          Add Comment
        </button>
        </div>
        
        </div>
    
       
    )
    
}


export default Comment;

