import React from "react";


class ClassComComponent extends React.Component {
    static defaultProps = {
        msg: '默认值',
        get fn() {
            return 1
        }
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <h1>{this.props.msg}</h1>
                {this.props.fn}
            </div>
        );
    }
}
// ClassComComponent.defaultProps = {
//     msg:'默认值'
// }


export default ClassComComponent