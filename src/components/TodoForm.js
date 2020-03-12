import React from "react";


class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            itemName: ""
        };
    }
    handleChanges = e => {
        this.setState({
            itemName: e.target.value
        });
    };
    handleAddItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemName);
    };
    render(){
        console.log("loading books...");
        return (
            <form className="submit" onSubmit={this.handleAddItem}>
                <input
                    type="text"
                    name="item"
                    value={this.state.itemName}
                    onChange={this.handleChanges}
                />
                <button className="Add-Book">Add Book</button>
        
            </form>
        )
    }
}
export default TodoForm;