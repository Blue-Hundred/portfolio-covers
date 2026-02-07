import CoversGrid from "./components/CoversGrid";

export default function App() {
  return (
    <>
      <CoversGrid />

      {/* deploy marker: remove after we verify */}
      <div
        style={{
          position: "fixed",
          bottom: 10,
          right: 10,
          zIndex: 999999,
          background: "white",
          padding: "6px 10px",
          borderRadius: 8,
          fontSize: 12,
          boxShadow: "0 2px 10px rgba(0,0,0,.15)",
        }}
      >
        DEPLOY TEST
      </div>
    </>
  );
}
