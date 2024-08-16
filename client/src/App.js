import { Provider } from "react-redux";
import AllRoutes from "./AllRoutes";
import store from "./component/utils/store";

function App() {
  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}

export default App;
