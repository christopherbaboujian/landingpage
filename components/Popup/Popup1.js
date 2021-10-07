import PropTypes from 'prop-types';
import { useState } from 'react';
import { Radio } from '../FormInput';
import { shuffle } from '../../lib/utils';

const Popup = (props) => {
  const { item, onClickNext, onClickRest, colors, siteName } = props;
  const { title, description, buttonTitle } = item;

  const [options, _] = useState(() => shuffle(item.options));
  const [option, setOption] = useState(null);

  const onClickButton = () => {
    if (onClickNext) {
      onClickNext(option);
    }
  };

  const onClickVisible = () => {
    if (onClickRest) {
      onClickRest();
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <span
          onClick={onClickVisible}
          className="absolute w-full h-full left-0 right-0 top-0 bottom-0"
        ></span>
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mt-3 sm:mt-5">
              <h3 className={`text-2xl leading-6 font-medium text-gray-900`} id="modal-headline">
                {title || ''}
              </h3>
              <div className="mt-4">
                <p className={`text-lg leading-5 text-gray-500`}>{description || ''}</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="my-6 mx-10">
              {options.map((opt, index) => (
                <Radio
                  key={index}
                  label={opt}
                  value={`${opt}`}
                  checked={option === `${opt}`}
                  onChange={(e) => setOption(e.target.value)}
                  colors={colors}
                  siteName={siteName}
                />
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <span className="flex w-1/3 rounded-md shadow-sm sm:col-start-2">
              <button
                type="button"
                onClick={onClickButton}
                className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm focus:outline-none text-${siteName}_btnText ${colors.main} hover:${colors.hover} bg-${siteName}_main hover:bg-${siteName}_hover transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
              >
                {buttonTitle || ''}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  item: PropTypes.object.isRequired, // popup description
  onClickNext: PropTypes.func,
  onClickRest: PropTypes.func,
  colors: PropTypes.object,
};

export default Popup;
