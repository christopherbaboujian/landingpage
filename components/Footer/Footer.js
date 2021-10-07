const Footer = ({ data, siteName }) => {
  return (
    <footer className="bg-white" >
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a href={`/${siteName || ''}/cookie.html`} className="text-base leading-6 text-gray-500 hover:text-gray-900">
              {data.home.cookie}
            </a>
          </div>
          <div className="px-5 py-2">
            <a href={`/${siteName || ''}/privacy.html`} className="text-base leading-6 text-gray-500 hover:text-gray-900">
              {data.home.privacy}
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base leading-6 text-gray-400">
          {data.home.copyright}
        </p>
      </div>
    </footer >
  )
}

export default Footer;
