import './main.css';
import Todo from "./Todo"

function App() {
  return (
  <div className="container">
    <div className="list">
      <h1>Add something to your to-do list.</h1>
      <Todo/>
    </div>
  </div>
  );
}

export default App;
