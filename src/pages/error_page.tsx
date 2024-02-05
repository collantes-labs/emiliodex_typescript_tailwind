import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  interface RouteError {
    statusText: string;
    message: string;
  }

  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oopsie!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
