import Head from 'next/head'
import React from 'react';
import Footer from '../Footer';
import PropTypes from 'prop-types';
import { apiOnClickBuy } from 'lib/api';
import FBPixel from '../FBPixel';

const HomeLayout = ({ children, setPopup, product, data, siteName, title }) => {
  const { colors, home } = data;
  const { services } = home;
  const { reasonList } = home.about.reasons;

  let benefitItemClass = '';
  switch (services.length) {
    case 1:
      benefitItemClass = 'w-64 md:w-1/2 lg:w-1/3 xl:w-1/3';
      break;
    case 2:
      benefitItemClass = 'w-64 md:w-2/5 lg:w-1/3 xl:w-1/3';
      break;
    case 3:
      benefitItemClass = 'w-64 md:w-2/5 lg:w-1/4 xl:w-1/4';
      break;
    case 4:
      benefitItemClass = 'w-64 md:w-2/5 lg:w-1/3 xl:w-1/3';
      break;
    case 5:
    case 6:
      benefitItemClass = 'w-64 md:w-2/5 lg:w-1/4 xl:w-1/4';
      break;
    default:
      benefitItemClass = 'w-64 md:w-2/5 lg:w-1/4 xl:w-1/4';
      break;
  }

  const ServiceItem = ({ item }) => {
    return (
      <div className={`${benefitItemClass}  m-4`}>
        <div
          className={`flex items-center justify-center h-12 w-12 rounded-md ${colors.serviceIconBG} bg-${siteName}_serviceIconBG text-white`}
        >
          {item.icon.endsWith('.svg') && (
            <img
              className="w-full h-full"
              src={item.icon}
              alt=""
            />
          )}
          {!item.icon.endsWith('.svg') && (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
            </svg>
          )}
        </div>
        <div className="mt-5">
          <h5 className={`text-lg leading-6 font-medium text-gray-900 text-${siteName}_txtMain`}>{item.main}</h5>
          <p className={`mt-2 text-base leading-6 text-gray-500 text-${siteName}_txtSecond`}>{item.subTxt}</p>
        </div>
      </div>
    );
  };

  const ListItem = ({ item }) => {
    return <li>{item}</li>;
  };

  const onClickBtmBuy = (e) => {
    e.preventDefault();
    apiOnClickBuy(product.name);
    setPopup();
  };

  if (!data) return null;

  return (
    <React.Fragment>
      <Head>
        <title>{title || ''}</title>
      </Head>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home">
                    <img
                      className={`w-auto ${home.logoSize}`}
                      src={product.logoIcon || data.home.logoIcon}
                      alt="Logo"
                    />
                  </a>
                  <div className="-mr-2 items-center hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {children}
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center">
            <h3 className={`mt-2 max-w-3xl md:mx-auto text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-${siteName}_txtMain`}>
              {data.home.introduceMain}
            </h3>
            <p className={`mt-4 max-w-2xl text-xl leading-7 text-gray-500 md:mx-auto text-${siteName}_txtSecond`}>
              {data.home.introduceSub}
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-wrap justify-evenly">
            {services.map((item, index) => (
              <ServiceItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div
            className={`${colors.btmBG} bg-${siteName}_btmBG rounded-lg shadow-xl overflow-hidden grid md:grid-cols-2 grid-cols-3 lg:gap-4`}
          >
            <div className="relative my-3 ml-6">
              <img
                className="absolute w-full h-full inset-0 object-right object-contain"
                src={product.urlBottom || product.url}
                alt={product.name}
              />
            </div>
            <div className="pt-6 pb-6 pl-6 pr-6 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 col-span-2 md:col-span-1">
              <div className="lg:self-center">
                <h2 className={`text-2xl leading-9 font-extrabold text-white sm:text-3xl sm:leading-10 md:text-4xl ${colors.btmTxtMain} text-${siteName}_btmTxtMain`}>
                  <span className="block">{data.home.bottomProductArea.main}</span>
                </h2>
                <p className={`mt-4 text-md md:text-lg leading-6 ${colors.btmTxtSecond} text-${siteName}_btmTxtSecond`}>
                  {data.home.bottomProductArea.subText}
                </p>
                <a
                  href="#"
                  onClick={onClickBtmBuy}
                  className={`mt-8 px-4 py-2 md:px-6 md:py-3 bg-white border border-transparent rounded-md shadow inline-flex items-center text-base leading-6 font-medium ${colors.btmBtnTxt} text-${siteName}_btmBtnTxt ${colors.btmBtn} hover:${colors.btmBtnHover} bg-${siteName}_btmBtn hover:bg-${siteName}_btmBtnHover transition duration-150 ease-in-out`}
                >
                  {data.home.buy}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-extrabold text-gray-900 text-center text-${siteName}_txtMain`}>
            {data.home.about.title}
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              <div>
                <dt className={`text-lg leading-6 font-medium text-gray-900 text-${siteName}_txtMain`}>
                  {data.home.about.company.title}
                </dt>
                <dd className={`mt-2 text-base text-gray-500 text-${siteName}_txtSecond`}>{data.home.about.company.text}</dd>
              </div>

              <div>
                <dt className={`text-lg leading-6 font-medium text-gray-900 text-${siteName}_txtMain`}>
                  {data.home.about.product.title}
                </dt>
                <dd className={`mt-2 text-base text-gray-500 text-${siteName}_txtSecond`}>{data.home.about.product.text}</dd>
              </div>

              <div>
                <dt className={`text-lg leading-6 font-medium text-gray-900 text-${siteName}_txtMain`}>
                  {data.home.about.reasons.title}
                </dt>
                <dd className={`mt-2 text-base text-gray-500 text-${siteName}_txtSecond`}>
                  <ul className="list-disc list-inside">
                    {reasonList.map((item, index) => (
                      <ListItem item={item} key={index} />
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Footer data={data} siteName={siteName} />
      <FBPixel />
    </React.Fragment>
  );
};

HomeLayout.propTypes = {
  setPopup: PropTypes.func,
  product: PropTypes.object,
  data: PropTypes.object,
};

export default HomeLayout;
