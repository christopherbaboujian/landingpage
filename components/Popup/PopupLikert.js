import PropTypes from 'prop-types';
import { useState } from 'react';
import { Radio } from '../FormInput';

const Popup = (props) => {
  const { item, onClickOK, onClickRest, colors, siteName } = props;
  const { title, likert, buttonTitle, likert_5, likert_4, likert_3, likert_2, likert_1, index } = item;
  const [option, setOption] = useState(null);

  const onClickButton = () => {
    if (onClickOK) {
      onClickOK(index, option);
    }
  };

  const onClickVisible = () => {
    if (onClickRest) {
      onClickRest();
    }
  };

  const disableButtonClass = `cursor-not-allowed inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white text-${siteName}_btnText ${colors.disabled} hover:${colors.disabled} bg-${siteName}_disabled hover:bg-${siteName}_disabled shadow-sm focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5`;
  const enableButtonClass = `inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm text-${siteName}_btnText ${colors.main} hover:${colors.hover} bg-${siteName}_main hover:bg-${siteName}_hover focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5`;

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
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl	sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mt-3 sm:mt-5">
              <h3 className="text-xl leading-6 font-medium text-gray-900" id="modal-headline">
                {title || ''}
              </h3>
              <h4 className="text-2xl leading-7 text-gray mt-3">
                "{likert || 'asdf'}"
              </h4>
              <div className="mt-5">
                <div class="grid grid-cols-5 gap-2">
                  <span className="text-center text-sm">{likert_5 || 'Very Unsatisfied'}</span>
                  <span className="text-center text-sm">{likert_4 || 'Unsatisfied'}</span>
                  <span className="text-center text-sm">{likert_3 || 'Neutral'}</span>
                  <span className="text-center text-sm">{likert_2 || 'Satisfied'}</span>
                  <span className="text-center text-sm">{likert_1 || 'Very Satisfied'}</span>
                  {[1, 2, 3, 4, 5].map((opt, index) => (
                    <Radio
                      className={`my-1 flex flex-col justify-center items-center`}
                      key={`radio-${index}`}
                      label=""
                      value={`${opt}`}
                      checked={option === `${opt}`}
                      onChange={(e) => setOption(e.target.value)}
                      colors={colors}
                      siteName={siteName}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <span className="flex w-1/3 rounded-md shadow-sm sm:col-start-2">
              <button
                type="button"
                onClick={onClickButton}
                disabled={option === null}
                className={option === null ? disableButtonClass : enableButtonClass}
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
  onClickOK: PropTypes.func,
  onClickRest: PropTypes.func,
  colors: PropTypes.object,
};

export default Popup;
