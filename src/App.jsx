import React from 'react';
import './index.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

const App = () =>{
    const [inputName,setinputName] =useState();
    const [items,setItems] = useState([]);

    const inputEvent = (event) =>{
       setinputName(event.target.value);
    }

    const listOfItems = () =>{
        setItems((oldItems)=>{
             return [...oldItems, inputName]
        });
        setinputName('');
    };

    const deleteItem = (id) =>{
        console.log('deleted');

        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index) => {
                return index!== id;
            })
        })
    };

    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" onChange={inputEvent} placeholder="Add the items" value={inputName} />
                <button onClick={listOfItems}> + </button>
                <ol>
                   {items.map((itemval,index)=>{
                    return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItem} />                                     
                })}  
                 </ol>   
            </div>
        </div>
        </>
    );
}

export  default App;