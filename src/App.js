import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import "typeface-montserrat";

function App() {
  return (
    <div style={{ fontFamily: "montserrat" }} className="bg-slate-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
