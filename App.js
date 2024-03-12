import React, {useState} from "react";
import Todo from './Todo'

const style={
  bg:'h-screen w-screen p-4 bg-color-blue padding-[20] bg-gradient-to-r from-[#2F80ED] to [#1CB5E0]',
  container:' bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4',
  
  form:'flex justify-between',
  input:'border p2 w-full text-xl',
  button:'border p-4 ml-2 bg-purple-500 text-slate-100',
  count :'text-center p-2'
}
const heading={
  heading:'text-3xl font-bold text-center text-gray-800 p-2',
}
function App() {
  const [todos]=useState(['Learn React','Grind leetcode'])
  return (
    <div className={style.bg} >
      <div className={style.container}>
<h3 className={heading}>Todo App</h3>
<form className={style.form}></form>
<input className={style.input} type="text" placeholder="Add todo"/>
<button className={style.button}>add list</button>
<form>
  <ul>
    {todos.map((todo,index)=>(
      <Todo key={index} todo={todos}/>
    ))}

  </ul>
  <p>you have 2 todos</p>
</form>
        </div>
      
    </div>
  );
}

export default App;
