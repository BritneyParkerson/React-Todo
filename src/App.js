import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './components/Todo.css'

const booklist = [
  {
    name: "Harry Potter Series by JK Rowling",
    id: 1,
    read: true
  },

  {
    name: "House of Night Series by PC & Kristin Cast",
    id: 2,
    read: true
  },

  {
    name: "Twilight Sage by Stephanie Meyer",
    id: 3,
    read: true
  },

  {
    name: "The Southern Vampire Series (True Blood Novels) by Charlaine Harris",
    id: 4,
    read: false
  },

  {
    name: "To Kill A Mockingbird by Harper Lee",
    id: 5,
    read: true
  },

  {
    name: "House of Night: Other World Series by PC & Kristin Cast",
    id: 6,
    read: false
  },

  {
    name: "50 Shades... Series by E L James",
    id: 7,
    read: true
  },

  {
    name: "Traveling Soldier by Britney Hawthorne",
    id: 8,
    read: false
  },

  {
    name: "The Mansion by Britney Hawthorne",
    id: 9,
    read: false
  },

  {
    name: "Modern Faerie Tales Series by Holly Black",
    id: 10,
    read: true
  },

  {
    name: "A Series of Unfortunate Events by Lemony Snicket",
    id: 11,
    read: false
  },

  {
    name: "Chronicles of Narnia by CS Lewis",
    id: 12,
    read: true
  },

  {
    name: "Storm of the Century by Stephen King",
    id: 13,
    read: false
  },

  {
    name: "IT by Stephen King",
    id: 14,
    read: false
  },

  {
    name: "Night by Elie Weisel",
    id: 15,
    read: true
  },

  {
    name: "The Diary of Anne Frank by Anne Frank",
    id: 16,
    read: true
  },

  {
    name: "Flowers in the Attic by VC Andrews",
    id: 17,
    read: false
  },

  {
    name: "The Divergent Series by Veronica Roth",
    id: 18,
    read: true
  },

  {
    name: "Hunger Games Series by Suzanne Collins",
    id: 19,
    read: true
  },

  {
    name: "The Giver by Lois Lowry",
    id: 20,
    read: false
  },

  {
    name: "The Vampire Diaries by LJ Smith",
    id: 21,
    read: false
  },

] 


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      books: booklist
    };
  }

  toggleRead = itemId => {
    console.log("bk: index.js: App: toggleRead: itemID:", itemId);
    this.setState(
      {
        books: this.state.books.map(item => {
          if (item.id === itemId) {
            return {
              ...item,
              read: !item.read
            };
          }
          return item;
        })
      }
    )
  }

  addItem = itemName => {
    this.setState ({
      books: [
        ...this.state.books,
        {
          name: itemName,
          read: false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9) 
        }
      ]
    })
  }

  clearRead = () => {
    console.log("bk: index.js: App: clearRead");
    this.setState({
      books: this.state.books.filter(item => {
        return !item.read;
      })
    })
  }
 
  render() {
    return (
      <div className="App">
        <div className="header">
           <h2>Summer Reading List!</h2></div> 
           <div> <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList
          books={this.state.books}
          toggleRead={this.toggleRead}
          clearRead={this.clearRead}
          />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);