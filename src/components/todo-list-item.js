import React from 'react';
import ToDoList from './todo-list';

const ToDoListItem = ( { label, important = false }) => {

const style = {
    color: important ? 'tomato' : 'black'
}
    return <span style = {style}>{ label, important }</span>;
};

export default ToDoListItem;