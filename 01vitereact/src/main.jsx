import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>My name is Surendra Tholiya</h1>
  )
}

// // Creating a react element whose properties and attributes are injected in DOM     -->> This will not run as this syntax is not correct for this
// const reactElement = {
//     // map key-value::
//     type: 'a',
//     props: {
//         href: 'https:??google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// Creating a react element
const ReactElement = React.createElement(
  //type::
  'a',

  // what will be::
  { href: 'https://google.com', target: '_blank' },

  //children
  'Click me to visit Google'
)

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

// To render a React component, start its name with an uppercase letter
ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  //   <App />
  //   <MyApp />
  // </>

  // <ReactElement/>   // This gives an error

  ReactElement
)
