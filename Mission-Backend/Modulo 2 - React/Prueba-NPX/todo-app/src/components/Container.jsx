import React, { useState } from "react";
import FormToDo from './FormToDo';
import TaskList from './TaskList';

const Container = () => {
    
    const [list, setList] = useState([]);

    const addItem = addItem => {
        setList([...list, addItem])
    };

    return (
        <div>
           <FormToDo addItem={addItem}/>
           <TaskList list={list} setList={setList}/>
        </div>
    );
}

export default Container;