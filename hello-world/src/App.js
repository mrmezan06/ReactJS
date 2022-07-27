import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Name from './components/Name';
function App() {
  return (
    <div className="App">
      <Name name="Bruce" badge="Batman" gender="M" >
        <del>He is a rich and wealthy man</del>
      </Name>
      <Name name="Clark" badge="Superman" gender="M">
        <button>Action</button>
      </Name>
      <Name name="Diana" badge="Wonder Woman" gender="F" />
      <br/><br/><h1>Props in class</h1>
      <Welcome name="Bruce" badge="Batman" gender="M" />
      <Welcome name="Clark" badge="Superman" gender="M" />
      <Welcome name="Diana" badge="Wonder Woman" gender="F" />
    </div>
  );
}

export default App;
