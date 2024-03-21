import { useEffect, useState } from "react";

const use = (url) => {
    const [data, setData] = useState([])

   useEffect(()=>{
    fetch(url).then((responce)=> {
        responce.json().then((result) => {
            setData(result)
        })
    
    })
   },[url])
return data
    }
export default use