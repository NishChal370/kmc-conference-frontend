import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import AppRoute from "./routes/AppRoute";
import "@/style/app.css";
import "@/style/index.css";
import "@/style/sweetalert.css";
import "@/shared/input/style/input.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
      <Provider store={store}>
            <RouterProvider router={AppRoute} fallbackElement={<h1>loading..</h1>} />
      </Provider>
);
