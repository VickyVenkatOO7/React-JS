import React from 'react';
import ReactDOM from 'react-dom';

var jsxHeading = (
    <div>
<h1 id="jsxHeading">Heading from JSX!!</h1>
<h1 id="jsxHeading2">Heading from JSX!!</h1>
<h1>Hello, world!</h1>
      <p>This is a paragraph</p>
      <ul>
        <li>1st element</li>
        <li>2nd element</li>
        <li>3rd element</li>
        <li>4th element</li>
        <li>5th element</li>
      </ul>
      <br/>
    </div>
   
);
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(jsxHeading);