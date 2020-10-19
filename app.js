// TODO
var Cucumber = () => (
  <li>Cucumber</li>
);

var Kale = () => (
  <li>Kale</li>
);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>
  </ul>
);

var GroceryList = () => (
  <GroceryListItem groceryItems={['Cucmbers', 'Kale', 'Tomatoes']}/>
);

var App = () => (
  <div>
    <h2>My Grocery List List</h2>
    <GroceryList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
