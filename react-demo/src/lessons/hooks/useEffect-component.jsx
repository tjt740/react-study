import React from "react";

// step1️⃣ 从React中引入useState,useEffect函数
import { useState, useEffect } from 'react';
import axios from 'axios'


function UseEffectCom() {
    const [mathNum, setMathNum] = useState(Math.random());
    const [weather, setWeather] = useState(null);

    // step3️⃣ 通过useEffect设置副作用
    useEffect(() => {
        document.title = mathNum;

        // step4️⃣ 调用ajax
        let url = 'https://tianqiapi.com/api?version=v6&appid=12382165&appsecret=9QN9R6Ma&city=%E6%9D%AD%E5%B7%9E';
        (async () => {
            let res =  await axios.get(url)
            setWeather(res.data.air_tips)
        })()
    }, [mathNum])
 
  

    return (
        <>
            {weather}

            {/* step2️⃣  触发useState方法*/}
            <button onClick={() => setMathNum(Math.random())}>改变document.title</button>
        </>
    )
}

function GetWindowScroll() {
    const [scrollY, setScrollY] = useState(0);
  
    
    useEffect(() => { 
        setScrollY(document.documentElement.scrollTop)
    },[])

    
    return (
        <div>
            {scrollY }
        </div>
    )

 }


class UseEffectComponent extends React.Component {

    render() {
        return (
            <div>
              
                <h1>useEffect</h1>
                <UseEffectCom />
                <GetWindowScroll />
               
            </div>
        );
    }

}

export default UseEffectComponent;