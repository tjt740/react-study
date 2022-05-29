import React from 'react';



function ComA(props) {
    return (
        <>
            {console.log(props.children)}
            <h1>{props.children.map(child => child)}</h1>
            { props.children[3]() }
        </>
    )
}


class ChildrenComponent extends React.Component {
    render() {
        return (
            <div>

                <ComA>
                    我是谭金涛
                    <p>1234</p>
                    {[1, 2, 3, 4]}
                    {() => {  return 'Hi' }}
                </ComA>

            </div>
        );
    }
}

export default ChildrenComponent