import React, {useEffect, useState} from "react";

const ItemList = ({getItems}) => {

    const [items, setItems] = useState([])


   useEffect(()=>{

       const items = getItems()
       setItems(items)

       console.log('Effect called')

   }, [getItems])


    return (<ul>{items.map(i=><li key={i}>{i}</li>)}</ul>)
}


export default ItemList