import React from "react";

const Gallery = () => {
  return (
    <div className="mt-10 bg-gray-50 w-full p-4">
      <h1 className="text-4xl font-bold">Our Best Memories</h1>
      {/* Memories stack image */}
      <div className="grid md:grid-cols-4 auto-rows-[250px] gap-2 mt-5 w-full">
        <div className="md:row-span-2">
            {/* img -1 */}
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://i.pinimg.com/736x/49/49/33/494933f57ffd73f5047ebbf476bfafa9.jpg"
            alt=""
          />
        </div>
        <div className="md:col-span-2">
            {/* img-2 */}
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://i.pinimg.com/736x/91/f3/96/91f396325abb1e046554c62edd6bac8d.jpg"
            alt=""
          />
        </div>
        <div className="md:row-span-2">
            {/* img-3 */}
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://i.pinimg.com/1200x/ce/a6/e3/cea6e35051b6f3b87e088444df86ed9f.jpg"
            alt=""
          />
        </div>
        <div className="md:col-span-2">
            {/* img-4 */}
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.bracu.ac.bd/sites/default/files/news-image/2022/06/blood%20donation.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
