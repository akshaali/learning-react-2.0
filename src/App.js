import './App.css';
import SimpleComponent from './Component/SimpleComp';
import MemoComponent from "./Component/MemoComponent";
import Component from "./Component/Comp"

function App() {
  return (
    <div className="App">
     <SimpleComponent />
     <MemoComponent/>
     <Component />
    </div>
  );
}

export default App;
