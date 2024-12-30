export default function Footer() {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 md:px-10 ">
          {/* Top Section */}
          <div className="flex flex-wrap  items-start gap-6 ml-8">
            {/* Left Section */}
            <div className="w-full lg:w-1/3 px-4">
              <h2 className="text-2xl font-bold mb-4">aovis</h2>
              <p className="mb-4 leading-relaxed">
                Buy movie tickets easily with <br />
                Aovis system nationwide
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
                Get Your Ticket
              </button>
            </div>
  
            {/* Center Section */}
            <div className="w-full lg:w-1/3 px-4">
              <div className="flex justify-between gap-8">
                {/* Movies */}
                <div>
                  <h3 className="text-orange-500 font-bold mb-4">Movies</h3>
                  <ul className="space-y-2">
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>Animation</li>
                    <li>Comedy</li>
                    <li>Crime</li>
                  </ul>
                </div>
                {/* Links */}
                <div>
                  <h3 className="text-orange-500 font-bold mb-4">Links</h3>
                  <ul className="space-y-2">
                    <li>About</li>
                    <li>My account</li>
                    <li>News</li>
                    <li>Latest Events</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
            <p>© Copyright 2025 design by Đức Duy</p>
          </div>
        </div>
      </footer>
    );
  }
  