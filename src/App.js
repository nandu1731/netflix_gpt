import Body from "./components/body";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/store";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
