import React from 'react'

function NumberList(props) {
   const numbers = props.numbers;
const listItems = numbers.map((x) => <li key={x.toString()}>{x}</li>);   
    return(
        <div>
            {listItems}
        </div>
    )
    
}


export default NumberList