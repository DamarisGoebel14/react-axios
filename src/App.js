import logo from './logo.svg';
import './App.css';
import PersonDelete from "./PersonDelete";
import PersonGet from "./PersonGet";
import PersonPost from "./PersonPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn how to use Axios with React </h1>
      </header>
        <main>
            <PersonGet />
            <PersonPost />
            <PersonDelete />
        </main>
    </div>
  );
}

export default App;
