import './App.css';

let arr = [
  {
    name: '谭金涛',
    age: 23,
    id: Math.random(),
  },
  {
    name: '戚思宁',
    age: 22,
    id: Math.random(),
  },
  {
    name: '柳晔',
    age: 24,
    id: Math.random(),
  },
];



function App() {
  return (
    <div>
      <h1>姓名-年龄</h1>
      <ul>
        {
          arr.map((v) => {
            return (
              <li key={v.id}>
                { `姓名: ${v.name} —— 年龄: ${v.age}`}
              </li>
            )
          })
        }
      </ul>
     
    </div>
  );
}

export default App;
