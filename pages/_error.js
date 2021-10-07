import { Fragment } from 'react';

function Error({ statusCode }) {
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
              500 Internal Server Error
            </h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
