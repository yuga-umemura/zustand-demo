import "./App.css";
import LeftCount from "./components/LeftCount";
import RightCount from "./components/RightCount";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "70vh",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <LeftCount />
      <RightCount />
    </div>
  );
}

export default App;
