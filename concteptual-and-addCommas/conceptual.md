### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library used for building user interfaces.
React should be used when you need too develop front-end UI for high-traffic and scalable websites.
The fact that all the front end code is broken down into single comopenents also helps you manage your code in a more modular way.
Some of the benefits of using react include fast rendering, a large community of support, and a wide range of companies use.  

- What is Babel?
Babel is a JavaScript compiler that converts newer generations of JS into browser-compatible JS.

- What is JSX?
JSX is a syntax extension to JavaScript. It is used with react to allow us to quickly write html elements without the use of methods like 'document.createElement()'

- How is a Component created in React?
To create a component, we create a js file with a name that matches the name of our component.
Then we declare our component in the file similar to how we would create a javascript function.
From here we can import our component into our main app component, then the app component gets rendered into a 'root' div in our index.html file.

- What are some difference between state and props?
Props are immutable variables that are passed into a component.
state variables are mutable and is typically stored in the component itself.

- What does "downward data flow" refer to in React?
Downward data flow is the concept of passing data 'down' to a child component using props.

- What is a controlled component?
A controlled component is a component that controls all form data within the components state.

- What is an uncontrolled component?
In an uncontrolled component, we use form data in the more tradition manner by acessing values from the DOM.

- What is the purpose of the `key` prop when rendering a list of components?

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
React uses the key prop for identification purposes when re-rendering.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a react hook that allows to run a function only once after the first render, or only when certain state has changed.
useEffect should be used for side effects such as fetch requests, DOM manipulation, ot timer functions like setTimout

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is similar to useState, except when the value is changed, it does not cause a re-render.
The stored values will also persist across renders.

- When would you use a ref? When wouldn't you use one?
Refs should only be used when they are neccesary. 
If I need manage focus, or media playback, then I would use a ref.
If I needed to store a variable of some sort, I would first use state or props if possible. 


- What is a custom hook in React? When would you want to write one?
Custom hooks are reusable functions you can implement into multiple different components.
I would write a custom hook if I had similar functionality being used in multiple components or I just simply had a larger function
that I didnt want to clutter up the component.
