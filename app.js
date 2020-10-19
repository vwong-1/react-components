// TODO
// var Cucumber = () => (
//   <li>Cucumber</li>
// );

// var Kale = () => (
//   <li>Kale</li>
// );

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//     <li>{props.groceryItems[2]}</li>
//   </ul>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   done: false
    // };
  }

  // onListItemClick() {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }

  render() {
    return (
      <li>{this.props.groceryItems}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItems =>
      <GroceryListItem groceryItems={groceryItems} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Cucumber', 'Kale', 'Tomatoes']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
