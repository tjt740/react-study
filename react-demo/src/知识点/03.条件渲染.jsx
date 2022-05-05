import './App.css';

const flag = true;

const getType = (type) => {
  if (type === 1) {
    return (<h1>h1标签</h1>)
  } else {
    return (<h2>h2标签</h2>)
  }
}

let status = 'success';

function App() {
  return (
    <div>
      <h1>条件表达式</h1>
      {/* 三元运算符 */}

      {flag ? (<div>
        <h2>正确时渲染的DOM</h2>
      </div>) : null}


      {/* && 运算符 */}
      {flag && (<div>
        <h2>正确时渲染的DOM</h2>
      </div>)}


      {getType(1)}


      {
        (() => {
          switch (status) {
            case "warning":
              return <h1>warning</h1>;
            case "error":
              return <h1>error</h1>;
            case "success":
              return <h1>success</h1>;
            default:
              return <h1>info</h1>;
          }
        })()
      }

    </div>
  );
}

export default App;
