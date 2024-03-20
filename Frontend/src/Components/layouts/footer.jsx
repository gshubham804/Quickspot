const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-3xl font-bold text-red-500 mb-2">QuickSpot</h3>
          <p className="text-sm text-gray-300">
            Empowering your journey with innovative solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:mr-12">
            <h4 className="text-lg font-semibold mb-4 text-red-500">
              Quick Links
            </h4>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/" className="hover:text-red-500">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/aboutus" className="hover:text-red-500">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contactus" className="hover:text-red-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">
              Connect With Us
            </h4>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/contactus" className="hover:text-red-500">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="/contactus" className="hover:text-red-500">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="/contactus" className="hover:text-red-500">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-300">
          &copy; 2024 QuickSpot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
