// TODO
var Cucumber = () => (
  <li>Cucumber</li>
);
var Kale = () => (
  <li>Kale</li>
);

var GroceryList = () => (
  <ul>
    <Cucumber />
    <Kale />
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List List</h2>
    <GroceryList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
