import { useCallback, useEffect, useState, useref } from 'react'
import { memo } from 'react'


function App() {
const [length,setlength] = useState(8)
const [noallowed, setnoallowed] = useState(false)
const [charallowed, setcharallowed] = useState(false)
const [password, setpassword] = useState("")   

const passwordgenerator = useCallback(()=>{
  let pass =""
  let str = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(noallowed) str+= "0123456789"
  if(charallowed) str+= "!@#$%^&)(><"

  for (let index = 1; index <= length; index++) {
    let char = Math.floor((Math.random()*str.length)+1)
    pass += str.charAt(char)

  }
  setpassword(pass)
},[length,noallowed,charallowed,setpassword])

const copypasswordtoclip =useCallback(()=>{
  window.navigator.clipboard.writeText(password)
},[password])
  

 useEffect(()=>{
  passwordgenerator()
 },[length,noallowed,charallowed,setpassword,passwordgenerator])
return(
  <>
  <div className="w-full max-w-md rounded-lg px-4 py-3 my-8 mx-auto text-orange-300  bg-gray-800 ">
    <h1 className="text-2xl text-center text-white my-5">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value={password}
      placeholder='enter password'
      readOnly
      className ='w-full outline-none px-4 py-3 bg-white text-black' />
      <button className='px-3 py-4 bg-blue-600 text-white cursor-pointer'
      onClick={()=>{alert("copied to clipboard"), copypasswordtoclip}}>copy</button>

    </div>
    <div className="lowerpart flex text-sm gap-x-2 ">
       <div className=" flex text-sm gap-x-3">
        <input
         type="range"
         min={1}
         max={30}
         className='cursor-pointer '
         value={length}
         onChange={(e)=>{setlength(e.target.value)}}
    
        />
        <label>Length : {length}</label>
       </div>
       <div className="checkboxes flex gap-x-2">
        <input 
        type="checkbox" 
        id='Numberinput'
        defaultChecked={noallowed}
        onChange={()=>{
          setnoallowed((prev)=> !prev)
        }}
        
        />
        <label htmlFor='Numberinput'>Numbers</label>
        <input 
        type="checkbox" 
        defaultChecked={charallowed}
        id='charinput'
        onChange={()=>{
          setcharallowed((prev)=>!prev)
        }}
        />
        <label htmlFor='charinput'>Characters</label>
       </div>
    </div>
  </div>







  </>
)

}

export default App
