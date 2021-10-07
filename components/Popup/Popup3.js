import PropTypes from 'prop-types';
import { useState } from 'react';
import { CheckBox, TextField } from '../FormInput';

const Popup = (props) => {
  const { item, onClickKeep, onClickRest, colors, siteName } = props;
  const [checkbox1, setChecked1] = useState(false);
  const [email, setEmail] = useState('');

  const { title, description, checkText, buttonTitle } = item;

  const onClickButton = () => {
    if (!checkbox1 || email.trim().length === 0) return;
    if (onClickKeep) {
      onClickKeep(email.trim());
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
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mt-3 sm:mt-5">
              <h3 className="text-2xl leading-6 font-medium text-gray-900" id="modal-headline">
                {title || ''}
              </h3>
              <div className="mt-4">
                <p className="text-lg leading-5 text-gray-500">{description || ''}</p>
              </div>
            </div>
          </div>
          <label className="block">
            <div className="my-6 mx-10">
              <label className="block">
                <TextField
                  type="email"
                  value={email}
                  className="mt-1 w-full"
                  placeholder="john@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CheckBox
                  colors={colors}
                  siteName={siteName}
                  className="mt-4"
                  label={checkText}
                  onChange={(e) => setChecked1(e.target.checked)}
                  value={checkbox1}
                />
              </label>
            </div>
          </label>
          <div className="mt-5 flex justify-center">
            <span className="flex rounded-md shadow-sm sm:col-start-2">
              <button
                type="button"
                onClick={onClickButton}
                disabled={!checkbox1 || email.trim().length === 0}
                className={
                  !checkbox1 || email.trim().length === 0 ? disableButtonClass : enableButtonClass
                }
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
  onClickKeep: PropTypes.func,
  onClickRest: PropTypes.func,
  colors: PropTypes.object,
};

export default Popup;
