import { useHappyStore } from "../zustand/happyStore";

const RightCount = () => {
  const happys = useHappyStore((state) => state.happys);
  const happyUp = useHappyStore((state) => state.happysUp);
  const showHappys = useHappyStore((state) => state.showHappys);

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: "50px" }}>😃:{happys}</h2>
      <button
        style={{ fontSize: "30px", width: "40px", height: "40px" }}
        onClick={happyUp}
      >
        +
      </button>
      <button onClick={showHappys}>Alert Happys</button>
    </div>
  );
};

export default RightCount;
