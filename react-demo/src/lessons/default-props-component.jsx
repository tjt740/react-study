import React from "react";
import ClassCom from './default-class-component'


// 函数组件
function FunCom({msg = '默认值'}) {
    return (
        <>           
            <h1>{msg}</h1>
        </>
    )
}
// FunCom.defaultProps = {
//     msg:'默认值'
// }



class DefaultPropsComponent extends React.Component {

    render() {
        return (
            <div>

                {/* <FunCom></FunCom> */}
                <ClassCom />
            </div>
        );
    }
}

export default DefaultPropsComponent