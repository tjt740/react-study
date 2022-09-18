import store from "../../store";
export default function Son() { 
    return (
        <>
            <h3>son:</h3>
            <h4>{ store.getState().num }</h4>
        </>
    )
}