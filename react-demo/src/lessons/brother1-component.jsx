import React from 'react';

class Brother1Component extends React.Component{
     
    handleChange = (e) => {
        const { cb } = this.props;
        console.log(cb, this.props)
        
        cb.fun(e.target.value);

    }

    render() {
        return (
            <div>
                
                <p>兄弟1传值给兄弟2:</p>
                
                <input type='text' onChange={ (e)=>this.handleChange(e)} />

            </div>
        );
    }

}



export default Brother1Component;