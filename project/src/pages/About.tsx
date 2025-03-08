
function About() {

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Top Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {/* Large Hero Image */}
          <div className="md:col-span-3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <img
              src="./assets/IMG_5527acopy.jpg"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Side Images */}
          <div className="md:col-span-2 grid gap-4">
            <div className="h-[150px] md:h-[190px] rounded-2xl overflow-hidden">
              <img
                src="./assets/The-Most-Mysterious-Divine-Temples-in-Rishikesh.jpg"
                alt="Rishikesh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[150px] md:h-[190px] rounded-2xl overflow-hidden">
              <img
                src="./assets/Rishikesh-India.-It-is-known-as-the-Gateway-to-the-Garhwal-Himalayas-and-the-Yoga-Capital-of-the-World.jpg"
                alt="Ganges"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Side Images */}
          <div className="md:col-span-2 space-y-4">
            <div className="h-[200px] md:h-[300px] rounded-2xl overflow-hidden">
              <img
                src="./assets/PXL_20250112_062949913copy.jpg"
                alt="Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[150px] md:h-[200px] rounded-2xl overflow-hidden">
              <img
                src="./assets/PXL_20250112_063648372copy.jpg"
                alt="Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[150px] md:h-[200px] rounded-2xl overflow-hidden bg-yellow-100 flex items-center justify-center p-8">
              <img
                src="./assets/PXL_20250112_063054514.PORTRAITcopy.jpg"
                alt="Logo"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Right Side Text Content */}
          <div className="md:col-span-3 bg-yellow-100 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">At ColourBox Home Stay</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                At ColourBox Home Stay, we believe in more than just providing accommodation. Our homestay is located in the heart of Tapovan, Rishikesh, and we are inviting you to experience a comfortable stay while deeply connecting with the surrounding nature.
              </p>
              <p>
                Escape the hustle and bustle of everyday life and immerse yourself in the tranquility of our serene environment. Our thoughtfully designed spaces are crafted to help you unwind, recharge, and reconnect with what truly matters – yourself, loved ones, and the beauty of the natural world.
              </p>
              <p>
                Whether you're traveling for business or leisure, ColourBox Home Stay offers the perfect sanctuary to:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Find inner peace:</strong> Enjoy the calming sounds of the Ganges River, breathe in the fresh mountain air, and immerse yourself in the lush green surroundings.
                </li>
                <li>
                  <strong>Reconnect with nature:</strong> Explore the nearby trails, indulge in yoga and meditation sessions, and experience the rejuvenating power of the Himalayas.
                </li>
                <li>
                  <strong>Create lasting memories:</strong> Share unforgettable moments with your loved ones in our comfortable and inviting spaces.
                </li>
                <li>
                  <strong>Experience authentic hospitality:</strong> Enjoy warm and personalized service from our friendly family, who are dedicated to making your stay truly special.
                </li>
              </ul>
              <p>
                Come, experience the magic of Tapovan and discover the true essence of a rejuvenating getaway at ColourBox Home Stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About