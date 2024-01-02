
/*1st
import React from "react";

import ReactDOM from "react-dom/client";  

const heading1=React.createElement("h1",{
    id:"title",
    key:"h1"
},
"Namste React1");

console.log(heading1) ==>object
// React.createElement==>Object=>convert to Html=>put Html int dom

const heading2=React.createElement("h2",{
    id:"title",
    key:"h2"
},
"Namste React2");

const container=React.createElement("div",{
    id:"container"
},
[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

*/
//************************************************************************************************** */
/*
//2nd
import React from "react";

import ReactDOM from "react-dom/client";  

// console.log(heading1)

//  <div>
//     <h1>Nmastre React</h1>
//     <ul>
//         <li>About Us</li>
//         <li>Home</li>
//         <li>Cart</li>
//     </ul>
//     </div> 

const container=React.createElement("div",{
    id:"container",
    hello:"world"
},
[React.createElement("h1",
{
    id:"title",
    key:"h1"
},
"Namste React1"),

React.createElement("ul",
{},
[
    React.createElement("li",{},"About Us"),
    React.createElement("li",{},"Home"),
    React.createElement("li",{},"Cart"),
])
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

*/

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

/*
import {createElement} from "react";

import ReactDOM from "react-dom/client";  

const heading1=createElement("h1",{
    id:"title",
    key:"h1"
},
"Namste React1");



const heading2=createElement("h2",{
    id:"title",
    key:"h2"
},
"Namste React2");

const container=createElement("div",{
    
    id:"container"
},
[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

*/

// /^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/*
import {createElement as ce} from "react";

import ReactDOM from "react-dom/client";  

const heading1=ce("h1",{
    id:"title",
    key:"h1"
},
"Namste React1");



const heading2=ce("h2",{
    id:"title",
    key:"h2"
},
"Namste React2");

const container=ce("div",{
    
    id:"container"
},
[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

*/

// /********************************************************** */
/*

import {createElement as ce} from "react";

import ReactDOM from "react-dom/client";  

const heading=ce("h1",{
    id:"title",
    key:"h1"
},
"Namste React1");


//jsx =>using jsx create element in react

const heading1=(
    <h1>Hello</h1>
)



const HeaderComponent=()=>{
    return(
        <h1>Hello</h1>
        {heading1}
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

*/


import React from "react";

import ReactDOM from "react-dom/client";  

const Title=()=>{


    <h1 id="title" key="h2">Nmaste React</h1>
}




const HeaderComponent=()=>{
    return(
        <div>
            <Title/>
    
            {/* {Title()} */}
        <h1>Hello</h1>
        <h2>
            Namaste

        </h2>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

