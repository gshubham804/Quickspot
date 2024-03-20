import car from "../../assets/car.png";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

const ConfirmationPage = () => {
  const capture = document.querySelector(".actual-receipt");
  const handleDownloadPdf = () => {
    html2canvas(capture).then((canvas) => {
      const imageData = canvas.toDataURL("img/png");
      const doc = jsPdf("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imageData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("receipt.pdf");
    });
  };

  return (
    <>
      <div className="text-right bg-gray-200 pt-4 pr-8">
        <button
          className=" bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
          onClick={handleDownloadPdf}
        >
          Download Receipt
        </button>
      </div>
      <div className="flex flex-col items-center justify-center pb-6 bg-gray-200">
        <div className="actual-receipt bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <img src={car} alt="car-logo" className="h-20" />
          </div>
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-red-500">
              Booking Confirmed!
            </p>
            <p className="text-gray-600">
              Thank you for booking with us. Have a great trip! 😊
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 text-gray-700">
            <div className="flex justify-between">
              <p className="font-semibold">Order ID:</p>
              <p>#7NAT12175</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Booked Date:</p>
              <p>March 25, 2024</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Parked Date:</p>
              <p>March 26, 2024</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Slot Number:</p>
              <p>14</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Zone Number:</p>
              <p>2</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Timing:</p>
              <p>10:00 AM - 02:00 PM</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Total:</p>
              <p>₹99.99</p>
            </div>
          </div>
        </div>
        <button className="max-w-md w-full mt-4 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md font-semibold">
          Go Back to Home
        </button>
      </div>
    </>
  );
};

export default ConfirmationPage;
