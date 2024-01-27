function customRender(reactElement, mainContainer) {
  /*

    // for rendering or injecting, first we have to create element of DOM and then inject
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    // Setting attribute
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(domElement);

    */
    

    // for rendering or injecting, first we have to create element of DOM and then inject
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props) {
        if (prop == "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


// Creating a react element whose properties and attributes are injected in DOM
const reactElement = {
    // map key-value::
    type: 'a',
    props: {
        href: 'https:??google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// Selecting the div where we have to inject this react element
const mainContainer = document.querySelector('#root');

//rendering or injecting the react element into this mainContainer
customRender(reactElement, mainContainer);                                // Make this function
