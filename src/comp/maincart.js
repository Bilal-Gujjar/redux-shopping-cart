import {useSelector} from 'react-redux'



function Maincart() {
    const  avr = useSelector((state) => state.counter.value)
  

    return (
     <div>
            <h1>MainCart Count : {}</h1>
            <br/>
            <h2>Total Item Count : {avr}</h2>
            
            
        </div>
    )
}

export default Maincart

