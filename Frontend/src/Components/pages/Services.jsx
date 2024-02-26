const Service = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Our Services</h1>

      {/* Service 1 */}
      <div className="bg-white p-8 rounded-md shadow-lg mb-8 flex-none md:flex items-center">
        <img
          src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/2-tom-hartley-showroom_0.jpg?itok=5m-4Gql_"
          alt="Parking Slot Booking"
          className="mr-4 rounded-md h-full w-full md:h-32 md:w-32"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Parking Slot Booking</h2>
          <p className="text-gray-700 leading-7">
            Easily book parking slots for your car in any city. Our platform
            provides a seamless booking experience, ensuring you have a secure
            parking spot whenever and wherever you need it.
          </p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-8 rounded-md shadow-lg mb-8 flex-none md:flex items-center">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQGA6odm93XONA/article-cover_image-shrink_720_1280/0/1675839423933?e=2147483647&v=beta&t=k4l6SyDe2-U9qtTTYJeUHcWNpeeCBqzEnso-okTBjIU"
          alt="Car Wash Services"
          className="mr-4 rounded-md h-full w-full md:h-32 md:w-32"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Car Wash Services</h2>
          <p className="text-gray-700 leading-7">
            Treat your car to a spa day with our professional car wash services.
            We offer comprehensive cleaning packages to keep your vehicle
            looking pristine. Choose from our range of services for the ultimate
            car care experience.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-8 rounded-md shadow-lg mb-8 flex-none md:flex items-center">
        <img
          src="https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-notification-icon-png-image_1023272.jpg"
          alt="Notification Alerts"
          className="mr-4 rounded-md h-full w-full md:h-32 md:w-32"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Notification Alerts</h2>
          <p className="text-gray-700 leading-7">
            Stay informed with real-time notifications. Receive alerts about
            your parking reservations, upcoming car wash appointments, and
            important updates. Our notification system ensures you never miss a
            beat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
