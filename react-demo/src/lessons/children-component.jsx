import React, { Children } from 'react';



function ComA({children}) {
    // const { children } = props;
    const res = React.Children.map(children,(item)=>item)
    console.log(res);
    return (
        <React.Fragment>
            {console.log(children)}
            <h2>{children[0]}</h2>
            <h2>{children[1].props.children}</h2>
            {children[2].map((item,index) => {
                return <h3 key={ index }>
                    {item}
                </h3>
            })}
            <hr></hr>
            <h4>{ res }</h4>
        </React.Fragment>
    )
}


class ChildrenComponent extends React.Component {
    node = null

  componentDidMount(){
    console.log(this.node)
  }
    render() {
        return (
            <div>

                <ComA>
                    我是谭金涛
                    <p ref={(node)=>this.node=node }>1234</p>
                    {[7, 8, 9, 10]}
                    {/* {() => { return 'Hi' }} */}
                </ComA>

            </div>
        );
    }
}

export default ChildrenComponent