

import React from 'react';

// 生成不重复id名。
// 引入 uuid 中的 v4 方法名 {v4 * uuid} ==> v4 合到 uuid 这个自定义名字上
import { v4 as uuid } from 'uuid';

class UuidComponent extends React.Component { 

    render() {
        return (
            <div>
                <h1 id={ uuid() }>使用uuid函数</h1>
                <h2 id={ uuid() }>使用uuid函数</h2>
                <h3 id={ uuid() }>使用uuid函数</h3>
            </div>
        );
    }


}


export default UuidComponent