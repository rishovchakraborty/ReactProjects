import { useEffect } from "react"
import { useState , useCallback, useRef} from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [length,setLength]=useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  // useRef
  const passwordRef = useRef(null)


  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-_=+[]{}\|;:'"
    
    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random() * str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,6)
    window,navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
   
      <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600"
      >
        <h2 className="text-white my-3 text-center">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="enter password"
          readOnly
          ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          onClick={copyPasswordToClipboard}
          >copy</button>
          
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-1">
            <input type="range" 
            min={6}
            max={100}
            value={length} className="
            cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
             id="numberInput"
             defaultChecked={numberAllowed}
             onChange={()=>{
              setNumberAllowed((prev)=>!prev)
             }} />
             <label htmlFor="numberInput">number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
             id="charInput"
             defaultChecked={charAllowed}
             onChange={()=>{
              setCharAllowed((prev)=>!prev)
             }} />
             <label htmlFor="charInput">character</label>
          </div>
        </div>

      </div>
    
    </>
  )
}

export default App
