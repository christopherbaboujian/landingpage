import React, { Fragment, useEffect, useState } from 'react';
import { HomeLayout } from 'components/Layout';
import { Popup1, Popup2, Popup3, Popup4, PopupLikert } from 'components/Popup';
import {
  apiOnClickBuy,
  apiOnLoadedHome,
  apiOnSubmitEmail,
  apiOnSubmitKOP,
  apiOnSubmitRegion,
  apiOnSubmitTerms,
  apiOnLikert
} from 'lib/api';
import content from 'lib/content';

const Products = ({ data, siteName }) => {
  const products = data.home.products;
  const { colors, popups } = data;
  const [popupShow, setPopupShow] = useState(popups.map((i) => false));
  let likertIndex = 0;

  const setPopup = () => {
    if (popups.length > 0) {
      let shows = [...popupShow];
      shows[0] = true;
      setPopupShow(shows);
    }
  };

  const onClickBuy = (productName) => (e) => {
    e.preventDefault();
    apiOnClickBuy(productName);
    setPopup();
  };

  const onClickNextKOP = (val) => apiOnSubmitKOP(val);

  const onClickNextRegion = (region) => apiOnSubmitRegion(region);

  const onClickKeepEmail = (email) => {
    apiOnSubmitEmail(email);
    apiOnSubmitTerms();
  };

  const onClickLikert = (i, score) => apiOnLikert(i, score);

  useEffect(() => {
    apiOnLoadedHome();
  }, []);

  const onPopupClickNext = (i) => {
    let shows = [...popupShow];
    shows[i] = false;
    if (i < popups.length - 1) {
      shows[i + 1] = true;
    }
    setPopupShow(shows);
  };

  const onPopupClickRest = (i) => {
    let shows = [...popupShow];
    shows[i] = false;
    setPopupShow(shows);
  };

  const renderPopups = () => {
    if (!popups) return null;
    return (
      <Fragment>
        {popups.map((p, i) => {
          let node;
          switch (p.type) {
            case 'type1':
              node = popupShow[i] && (
                <Popup1
                  key={i}
                  item={p}
                  colors={colors}
                  siteName={siteName}
                  onClickNext={(val) => {
                    onClickNextKOP(val);
                    onPopupClickNext(i);
                  }}
                  onClickRest={() => onPopupClickRest(i)}
                />
              );
              break;
            case 'type2':
              node = popupShow[i] && (
                <Popup2
                  item={p}
                  colors={colors}
                  siteName={siteName}
                  onClickNext={(val) => {
                    onClickNextRegion(val);
                    onPopupClickNext(i);
                  }}
                  onClickRest={() => onPopupClickRest(i)}
                />
              );
              break;
            case 'type3':
              node = popupShow[i] && (
                <Popup3
                  item={p}
                  colors={colors}
                  siteName={siteName}
                  onClickKeep={(email) => {
                    onClickKeepEmail(email);
                    onPopupClickNext(i);
                  }}
                  onClickRest={() => onPopupClickRest(i)}
                />
              );
              break;
            case 'type4':
              node = popupShow[i] && (
                <Popup4
                  item={p}
                  colors={colors}
                  siteName={siteName}
                  onClickOK={() => onPopupClickNext(i)}
                  onClickRest={() => onPopupClickRest(i)}
                />
              );
              break;
            case 'typeLikert':
              likertIndex++;
              node = popupShow[i] && (
                <PopupLikert
                  item={{ ...p, index: likertIndex }}
                  colors={colors}
                  siteName={siteName}
                  onClickOK={(index, score) => {
                    onClickLikert(index, score);
                    onPopupClickNext(i)
                  }}
                  onClickRest={() => onPopupClickRest(i)}
                />
              );
              break;
            default:
              node = null;
          }
          return node;
        })}
      </Fragment>
    );
  };

  let imgSizeClass = '';
  switch (products.length) {
    case 1:
      imgSizeClass = 'w-64 md:w-1/2 lg:w-1/3 xl:w-1/3';
      break;
    case 2:
      imgSizeClass = 'w-64 md:w-2/5 lg:w-1/3 xl:w-1/3';
      break;
    case 3:
      imgSizeClass = 'w-64 md:w-2/5 lg:w-1/4 xl:w-1/4';
      break;
    case 4:
      imgSizeClass = 'w-64 md:w-2/5 lg:w-1/3 xl:w-1/3';
      break;
    case 5:
    case 6:
      imgSizeClass = 'w-64 md:w-2/5 lg:w-1/4 xl:w-1/4';
      break;
    default:
      imgSizeClass = 'w-64 md:w-2/5 lg:w-1/4 xl:w-1/4';
      break;
  }

  const renderProducts = () =>
    products.map((product, i) => (
      <div key={i} className={`${imgSizeClass} m-4`}>
        <div
          className={`relative overflow-hidden rounded-sm border border-gray-300 bg-white mx-auto`}
          style={{ paddingTop: '100%' }}
        >
          <img
            className="absolute left-0 top-0 w-full h-full object-contain p-3"
            src={product.url}
            alt="product"
          />
        </div>
        <h2 className={`mt-3 sm:mt-5 mx-3 text-xl text-center tracking-tight leading-10 font-bold sm:text-2xl sm:leading-none md:text-3xl ${colors.productTxtMain} text-${siteName}_productTxtMain`}>
          {product.main}
        </h2>
        <h2
          className={`mx-1 text-xl text-center tracking-tight leading-10 font-bold sm:text-2xl sm:leading-none md:text-3xl sm:mt-2 ${colors.productTxtSecond} text-${siteName}_productTxtSecond`}
        >
          {product.subTxt}
        </h2>
        <div className="mt-4 flex md:mt-6 justify-center md:justify-start">
          <a
            href="#"
            onClick={onClickBuy(product.name)}
            className={`mb-10 lg:mb-0 mx-auto px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white text-${siteName}_btnText ${colors.main} hover:${colors.hover} bg-${siteName}_main hover:bg-${siteName}_hover focus:outline-none transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10`}
          >
            {data.home.buy}
          </a>
        </div>
      </div>
    ));

  if (!data) return null;

  return (
    <HomeLayout setPopup={setPopup} product={products[0]} data={data} siteName={siteName}>
      <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28 sm:w-full md:w-3/4 lg:w-full">
        <div className="flex flex-wrap justify-evenly">{renderProducts()}</div>
      </main>
      {/* Popup */}
      {renderPopups()}
    </HomeLayout>
  );
};

export async function getStaticPaths() {
  const paths = [];
  for (const siteName in content) {
    paths.push({ params: { siteName } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { siteName } }) {
  return {
    props: {
      data: content[siteName],
      siteName,
    },
  };
}

export default Products;
