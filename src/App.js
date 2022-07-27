import "./styles.css";
import { lazy } from "react";
const KeplrConnect = lazy(() => import("./components/KeplrConnect"));

export default function App() {

  return (
    <div className="App">
      <KeplrConnect/>
    </div>
  );
}
