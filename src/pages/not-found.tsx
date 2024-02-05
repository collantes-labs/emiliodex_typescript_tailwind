export default function NotFound() {
  return (
    <div
      id="not-found-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div id="loading-div">
        <h1 style={{ fontWeight: "bold" }}>Oh no!</h1>
        <h3>Seems like the page you're trying to find doesn't exist.</h3>
      </div>
    </div>
  );
}
