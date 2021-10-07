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

const styles = {
  btn: {
    color: 'red'
  }
}

const Product = ({ data, siteName, product }) => {
  const { colors, popups } = data;
  const [popupShow, setPopupShow] = useState(popups.map((i) => false));
  let likertIndex = 0;

  const onClickBuy = () => {
    apiOnClickBuy(product.name).then((result) => {
      console.log(result);
    });
    if (popups.length > 0) {
      let shows = [...popupShow];
      shows[0] = true;
      setPopupShow(shows);
    }
  };

  const onClickNextKOP = (val) => {
    apiOnSubmitKOP(val).then((result) => {
      console.log(result);
    });
  };

  const onClickNextRegion = (region) => {
    apiOnSubmitRegion(region).then((result) => {
      console.log(result);
    });
  };

  const onClickKeepEmail = (email) => {
    apiOnSubmitEmail(email).then((result) => {
      console.log(result);
    });
    apiOnSubmitTerms().then((result) => {
      console.log(result);
    });
  };

  const onClickLikert = (i, score) => apiOnLikert(i, score);

  useEffect(() => {
    apiOnLoadedHome().then((result) => {
      console.log(result);
    });
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

  if (!data) return null;

  return (
    <HomeLayout data={data} onClickBuy={onClickBuy} product={product} siteName={siteName} title={product.title}>
      {
        <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-64 sm:w-1/3 rounded-sm border border-gray-300 bg-white md:ml-20 p-3">
              <div className="productImgContainer">
                <img
                  className="absolute left-0 top-0 w-full h-full object-contain"
                  src={product.url}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="w-3/4 md:w-1/2 md:ml-10 text-center md:text-left md:mt-0 mt-5">
              <h2 className={`text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl ${colors.productTxtMain} text-${siteName}_productTxtMain`}>
                {product.main}
              </h2>
              <h2
                className={`text-3xl tracking-tight leading-10 font-extrabold sm:text-4xl sm:leading-none md:text-5xl mt-1 ${colors.productTxtSecond} text-${siteName}_productTxtSecond`}
              >
                {product.subTxt}
              </h2>
              <div className="mt-5 sm:flex md:mt-8 justify-center md:justify-start">
                <a
                  href="#"
                  onClick={onClickBuy}
                  className={`px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white text-${siteName}_btnText ${colors.main} hover:${colors.hover} bg-${siteName}_main hover:bg-${siteName}_hover focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10`}
                >
                  {data.home.buy}
                </a>
              </div>
            </div>
          </div>
        </main>
      }

      {renderPopups()}
    </HomeLayout>
  );
};

export async function getStaticPaths() {
  const paths = [];
  for (const siteName in content) {
    for (const product of content[siteName].home.products) {
      paths.push({ params: { siteName, productName: product.name } });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { siteName, productName } }) {
  const data = content[siteName];
  const product = data.home.products.find((p) => p.name == productName);
  return {
    props: {
      data,
      siteName,
      product,
    },
  };
}

export default Product;
