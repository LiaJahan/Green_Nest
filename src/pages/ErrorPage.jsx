import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oopsiee</h1>
      <p className="mb-4">The page you are looking for does not exist!</p>
      <Link to="/" className="btn btn-green">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
