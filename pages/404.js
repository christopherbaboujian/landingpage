import { Fragment } from 'react';

const p404 = () => {
  return (
    <Fragment>
      <div className="h-screen flex flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-64 h-64 relative">
            <img
              className="absolute left-0 top-0 w-full h-full object-contain"
              src="/images/logo.svg"
              alt="App screenshot"
            />
          </div>
          <div className=" md:ml-10  md:text-left md:mt-0 mt-5">
            <h2 className="text-3xl tracking-tight leading-10 font-extrabold sm:text-4xl sm:leading-none md:text-5xl mt-1">
              404 Not Found
            </h2>
            <div className="mt-5 sm:flex md:mt-8 justify-center md:justify-start">
              <a
                href="/"
                className="px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default p404;
