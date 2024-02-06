export default function Loading() {
  return (
    <div
      id="loading-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div id="loading-div">
        <h1 style={{ fontSize: "3em", lineHeight: "1.2", fontWeight: "bold" }}>
          Loading...
        </h1>
      </div>
    </div>
  );
}
