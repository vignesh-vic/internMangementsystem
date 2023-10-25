import React, { useState } from 'react'

export default function CRUD () {
const [inputd,setinputd]=useState({
  name:'',
  age:''
})
  const [mydetails,setmydetails]=useState([])

const onhandle=(e)=>{
  const {name,value}=e.target
  setinputd((pr)=>({
    ...pr,
    [name]:value
  }))
}

const onsubmit=()=>{
  const olddata=[...mydetails]
  olddata.push({
    name:inputd.name,
    age:inputd.age,
  })
  setmydetails([...olddata])

}
console.log("click",mydetails)

  return (
    <div>
      <input name='name' placeholder='name' value={inputd.name} onChange={onhandle}/>
      <input name='age' placeholder='age' value={inputd.age} onChange={onhandle}/>
      <button onClick={()=>onsubmit()}>submit</button>
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>
        {
          mydetails.map((value,i)=>
            <tr key={i}>
              <td>{value.name}</td>
              <td>{value.age}</td>
            </tr>

          )
        }
      </table>
      </div>
)}
