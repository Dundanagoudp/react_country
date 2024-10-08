import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
        <div id="error-text" className="text-center space-y-6">
          <figure className="max-w-xs md:max-w-md mx-auto">
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </figure>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-200">
            Oops! The page you were looking for could not be found.
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            It seems you lost your way.
          </p>

          <button
            className="mt-4 px-6 py-3 bg-gray-700 text-gray-100 font-semibold rounded-full hover:bg-gray-600 transition-transform transform hover:scale-105"
            onClick={handleGoBack}
          >
            Go Back to Previous Page
          </button>
        </div>
      </section>
    );
  }

  console.log(error);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <h1 className="text-center text-2xl md:text-3xl text-gray-100">
        The page you are looking for does not exist.
      </h1>
    </section>
  );
};
