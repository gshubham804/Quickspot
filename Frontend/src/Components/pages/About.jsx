const AboutUs = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold text-red-500 mb-8">About Us</h1>

      {/* Company Overview */}
      <div className="bg-white p-8 rounded-md shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Company</h2>
        <p className="text-gray-700 leading-7">
          Welcome to [Your Company Name], where innovation meets excellence. We
          take pride in our commitment to delivering top-notch products/services
          that cater to your needs. With a strong foundation built on integrity
          and customer satisfaction, we strive to make a positive impact in
          every aspect of our business.
        </p>
        <p className="text-gray-700 mt-4">
          Our journey began with a vision to [mention your mission or purpose].
          Over the years, we have grown and evolved, adapting to the dynamic
          landscape while maintaining our core values. Our team of dedicated
          professionals works tirelessly to ensure that [Your Company Name]
          remains at the forefront of innovation and quality.
        </p>
      </div>

      {/* Our Team */}
      <div className="bg-white p-8 rounded-md shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="flex items-center space-x-8">
          {/* Team Member 1 */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
              alt="Team Member"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-lg">John Doe</p>
            <p className="text-gray-600">Co-Founder</p>
          </div>
        </div>

        <div className="flex items-center space-x-8 mt-6">
          {/* Team Member 2 */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
              alt="Team Member"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-lg">Jane Smith</p>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>

        {/* Add more team members as needed */}
      </div>

      {/* Vision and Mission */}
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Vision & Mission</h2>
        <p className="text-gray-700">
          At [Your Company Name], our vision is to [describe your vision]. We
          aim to [mention key goals or aspirations] and be recognized as a
          [industry/category] leader. Our mission is to [describe your mission].
          Through dedication, innovation, and collaboration, we are committed to
          delivering excellence and creating a positive impact on the world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
