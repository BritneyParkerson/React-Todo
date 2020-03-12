import React from "react";

const Item = props => {
    return (
        <div
        className={`item${props.item.read ? " read" : ""}`}
        onClick={e => props.toggleRead(props.item.id)}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Item