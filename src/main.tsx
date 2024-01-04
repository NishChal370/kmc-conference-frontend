import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import "@/style/index.css";
import "@/style/app.css";
import "@/shared/input/style/input.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
      <RouterProvider router={AppRoute} fallbackElement={<h1>loading..</h1>} />
);
