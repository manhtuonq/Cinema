import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Card from "./Page/Card";
import FeedbackSection from "./Page/Feedback";
import Product from "./Page/Product";
import Product02 from "./Page/Product02";

export default function Home() {
  return (
    <>
      <main className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/banner-02.jpg" // Thay thế với URL ảnh của bạn
          alt="Background"
          className="object-cover w-full h-full absolute top-0 left-0"
        />
        {/* Overlay để làm nền tối cho chữ */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        {/* Nội dung */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-start items-center pl-[20%]">
          {/* Phần text và button */}
          <div className="text-white max-w-2xl space-y-8">
            <p className="text-orange-500 text-lg uppercase font-bold tracking-wide">
              Action Movie
            </p>
            <h1 className="text-6xl font-extrabold leading-tight">
              The Witcher <br />
              Season 2
            </h1>
            <p className="text-2xl">
              Written and Directed by Aleesha Rose / Ireland 2023
            </p>
            {/* Buttons */}
            <div className="space-x-6">
              <button className="bg-white text-black py-3 px-8 text-lg font-semibold rounded hover:bg-gray-300">
                More Info
              </button>
              <button className="bg-orange-500 text-white py-3 px-8 text-lg font-semibold rounded hover:bg-orange-600">
                Get Ticket
              </button>
            </div>
          </div>
        </div>
      </main>
     <Card></Card>
     <Product></Product>
     <Product02></Product02>
     <FeedbackSection></FeedbackSection>
    </>
  );
}
