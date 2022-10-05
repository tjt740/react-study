


// step1️⃣ 从React中引入useState函数
import { useEffect, useState } from 'react';

function SetTimeIntervalComponent(props) {
    const [state, setState] = useState(true);
    const [num,setNum] = useState(0)

    const { flag } = props
  
    if (!!!flag) setTimeout(() => { 
        setNum(num + 1)
        props.cb(num)
      
    }   
    , 1000)

    useEffect(() => { 
         setState(flag)
    })
    
    return (
        <>
            {
                state ? (<p>我是函数组件</p>) : null
            }

        </>
    )
}



export default SetTimeIntervalComponent