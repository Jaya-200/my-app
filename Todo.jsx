import React from 'react';


const style={
li:'flex justify-between bg-state-200 p-4 my-2 capitalize',
liComplete:'flex justify-between bg-slate-400 p-4 my-2 capitalize',
row:'flex',
text:'ml-2 cursor-pointer',
textComplete:'ml-2 cursor-pointer line-through',
button:'cursor-pointer flex items-center'
}
const Todo = ({todo}) => {
  return (
   <li className={style.liComplete}>
    <div className={style.liComplete}>
        <input type="checkbox"/>
        <p className={style.text}>{todo}</p>
    </div>
      <button>delete</button>
 </li>
  )
}

export default Todo