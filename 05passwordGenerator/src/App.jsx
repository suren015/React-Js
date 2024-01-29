import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  // Variable selection that is, what we used in this project
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // ref hook
  const passwordref = useRef(null);


  // Password Generator Function:: using Callback hook React
  const passwordGenerator = useCallback(() => {
    let pswd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";    // If numbers are allowed
    if (charAllowed) str += "~!@#$%^&*()-{}[]";    // If characters are allowed
    
    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pswd += str.charAt(idx)
    }

    setPassword(pswd);    // State updation by this method 

  }, [length, numberAllowed, charAllowed, setPassword])   // These are dependencies, that is:: on which factor our password will change........setPassword is for optimisation if you do not use then it will also correct 

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);    // If page load, then this will call first

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();              // For copying text highlight, we use this 
    // passwordref.current?.setSelectionRange()   // From where to where you want to select
    window.navigator.clipboard.writeText(password)    // Copy our input text into the clipboard, this window. is in reactjs but if u use expressjs then whole work done on server
  },[password])
    
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700'
          >Copy</button>
        </div>
      
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}  
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}  
          />
          <label htmlFor="charInput">Characters</label>
        </div>
          
        </div>

      </div>
    </>
  )
}

export default App
