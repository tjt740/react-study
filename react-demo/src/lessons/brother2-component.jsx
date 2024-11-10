import React from 'react';

class Brother2Component extends React.Component{


    render() {
        return (
            <div>
                
                <p>兄弟2接收兄弟1参数:</p>
        
                <input type='text'  defaultValue={this.props.info}/>

            </div>
        );
    }

}



export default Brother2Component;