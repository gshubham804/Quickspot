const ContactUs = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none
                  focus:border-red-400 "
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-red-400"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-red-400"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="mb-4">
            <p className="text-lg font-medium">Our Location</p>
            <p className="text-gray-600">123 Main Street, Cityville, Country</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium">Phone Number</p>
            <p className="text-gray-600">(+123) 456-7890</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium">Email Address</p>
            <p className="text-gray-600">info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
