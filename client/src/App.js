import { Provider } from "react-redux";
import AllRoutes from "./AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./component/utils/store";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <AllRoutes />
    </Provider>
  );
}

export default App;
