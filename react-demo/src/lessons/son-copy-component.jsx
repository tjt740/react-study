import React from 'react';

class SonCopyComponent extends React.Component {
    render() {
        return (
            <div>
                {console.log('父级数据: ', this.props)}
                子级类组件改变父级数据:

                {/* 调用父级回调函数 */}
                <input
                    type="text"
                    onChange={(e) => this.props.cb(e.target.value)}
                />
            </div>
        );
    }
}

export default SonCopyComponent;
