import { Fragment, useState } from 'react';
import { useRouter } from 'next/router'
import { Notification } from 'components/Notification';
import {
  apiDownloadData,
  apiDeleteData,
} from 'lib/api';
import {
  downloadFile
} from 'lib/utils';
import FBPixel from '../components/FBPixel';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isDownloading, setIsDownloading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAvailable, setAvailable] = useState(false);

  const [showNotification, setShow] = useState(false);
  const [type, setType] = useState(undefined);
  const [message, setMessage] = useState('');

  const downloadData = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    apiDownloadData(id).then((res) => {
      console.log(res)
      setType('success');
      setMessage('Downloaded successfully')
      setShow(true);
      setIsDownloading(false);
      downloadFile(JSON.stringify(res), 'myData.json', 'text/plain');
    }).catch(e => {
      console.log(e)
      setType('error');
      setMessage('Failed');
      setShow(true);
      setIsDownloading(false);
    });
  }

  const deleteData = () => {
    if (isDeleting) return;
    setIsDeleting(true);
    apiDeleteData(id).then((res) => {
      console.log(res)
      setType('success');
      setMessage('Deleted successfully');
      setShow(true);
      setIsDeleting(false);
    }).catch(e => {
      console.log(e)
      setType('error');
      setMessage('Failed');
      setShow(true);
      setIsDeleting(false);
    });
  }

  if (!id) return null;

  return (
    <Fragment>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Your data</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Your data</a>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 relative flex items-center justify-between h-16">
            <h1 className="text-lg leading-6 font-semibold text-gray-900">
              Your data
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
              <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                <nav className="space-y-1">
                  <a href="#" className="bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
                    <svg className="text-indigo-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="truncate">
                      About
                    </span>
                  </a>

                  <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                    <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="truncate">
                      Download your data
                    </span>
                  </a>

                  <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
                    <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span className="truncate">
                      Delete your data
                    </span>
                  </a>
                </nav>
              </aside>

              <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">About</h3>
                      <p className="mt-1 text-sm text-gray-500">When you visited this landing page you filled in a form. At that point, we have personal information from you. On this page, you can download and delete all the information we have on you.</p>
                    </div>
                  </div>
                </div>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Download your data</h3>
                      <p className="mt-1 text-sm text-gray-500">Here you can download all data that we have on your profile.</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit"
                      onClick={downloadData}
                      className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      {isDownloading && (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      Download your profile
                    </button>
                  </div>
                  <div className={`rounded-md bg-green-50 p-4 ${isAvailable ? '' : 'hidden'}`}>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1 md:flex md:justify-between">
                        <p className="text-sm text-green-700">
                          Your file is available.
                        </p>
                        <p className="mt-3 text-sm md:mt-0 md:ml-6">
                          <a href="#" className="whitespace-nowrap font-medium text-green-700 hover:text-green-600">Download it here <span aria-hidden="true">&rarr;</span></a>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Delete your data</h3>
                      <p className="mt-1 text-sm text-gray-500">If you want, you can delete all your data from our servers here. Warning: this is irreversible.</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit"
                      onClick={deleteData}
                      className="bg-red-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      {isDeleting && (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      Delete your data
                    </button>
                  </div>
                  <div className="rounded-md bg-blue-50 p-4 hidden">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1 md:flex md:justify-between">
                        <p className="text-sm text-blue-700">
                          Your data is being deleted. This takes up to a few minutes, you can close this window.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Notification open={showNotification} hide={() => setShow(false)} type={type} message={message} />
      <FBPixel />
    </Fragment>
  );
};

export default Profile;
