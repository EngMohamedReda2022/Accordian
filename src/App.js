import React from 'react';
import './App.css';
import Accord from './Components/accord';
import data from './data';
function App() {
  const [multi,setMulti]=React.useState(false)
  const [dataa,setDataa]=React.useState(data)
  const [acc,setAcc]=React.useState(()=>generate())
  function generate() {
    return dataa.map((index)=>{
      return {
        id:index.id,
        q:index.question,
        ans:index.answer,
        hide:false,        
      }
    })
  }
  function handl(id) {
    console.log("enter")
    if(multi==false) {
        notMulti()
    }else {
      multi()
  }
  function notMulti() {
    const newAcc=acc.map((index)=>{
      if(index.id==id){
        return {
          ...index,
          hide:!index.hide
        }
      } else {
        return {
          ...index,
          hide:false
        }
      }
    })
    setAcc(newAcc)
  }
  function multi() {
      const newAcc=acc.map((index)=>{
        if(index.id==id){
          return {
            ...index,
            hide:!index.hide
          }
        } else {
          return index
        }
      })
      setAcc(newAcc)
    }
  }
  const allAccord=acc.map((index)=>{
      return (
        <Accord 
        id={index.id}
        q={index.q}
        ans={index.ans}
        hide={index.hide}
        fun={()=>handl(index.id)}
        />
      )
  })
  const style={
    backgroundColor:multi?"blue":"black"

  }
  return (
    <div className="App">
      <button style={style} onClick={()=>setMulti((prev)=>!prev)}>Enable multi selection</button>
      {allAccord}
    </div>
  );
}

export default App;
