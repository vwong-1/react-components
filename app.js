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

    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    var hoverStyle;
    if (this.state.hover) {
      hoverStyle = {fontWeight: 'bold'}
    } else {
      hoverStyle = {fontWeight: 'normal'}
    }
    return (
      <li style={hoverStyle} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
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
