import "./App.css";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import CatList from "./Components/CatList";

function App() {
  console.log("App's store", store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <CatList />
      </div>
    </Provider>
  );
}

export default App;
