// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Book from "./Todo"

const TodoList = props => {
    return (
        <div className="reading-list">
            {props.books.map(item =>
                <Book
                key={item.id}
                item={item}
                toggleRead={props.toggleRead}
                />
                )}
                <button className="clear-btn" onClick={props.clearRead}>
                    Clear Read
                </button>
        </div>
    );
};
export default TodoList