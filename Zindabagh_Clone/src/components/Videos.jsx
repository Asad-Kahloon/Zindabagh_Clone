function Videos() {
  return (
    <div className="bg-white px-5 py-10">
      <div className="w-[100%]">
        <div className="flex flex-col gap-7 items-center">
          <h1 className=" text-center w-full block text-2xl md:text-4xl font-bold">
            Latest Videos and Books
          </h1>
          <p className="text-center md:w-[40%]">
            Discover a range of informative videos and guide that offers isight
            into working and living in a various Countries
          </p>
        </div>
        <div className="w-[100%] px-6 grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Item 1 */}
          <div className="video-item bg-white p-4 rounded-lg shadow-md">
            <div className="video-wrapper mb-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/Ssr-8NRg6gI"
                title="Let's Go to Qatar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="text-lg font-semibold">Lets Go to Qatar</h4>
          </div>

          {/* Video Item 2 */}
          <div className="video-item bg-white p-4 rounded-lg shadow-md">
            <div className="video-wrapper mb-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/r2R-8MOIlYg"
                title="Let's Go to Saudi Arabia Part 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="text-lg font-semibold">
              Lets Go to Saudi Arabia Part 2
            </h4>
          </div>

          {/* Video Item 3*/}
          <div className="video-item bg-white p-4 rounded-lg shadow-md">
            <div className="video-wrapper mb-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/t2EaKiO2UIQ"
                title="Let's Go to Saudi Arabia Part 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="text-lg font-semibold">
              Lets Go to Saudi Arabia Part 2
            </h4>
          </div>

          {/* Video Item 3*/}
          <div className="video-item bg-white p-4 rounded-lg shadow-md">
            <div className="video-wrapper mb-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/t2EaKiO2UIQ"
                title="Let's Go to Saudi Arabia Part 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="text-lg font-semibold">
              Lets Go to Saudi Arabia Part 2
            </h4>
          </div>

          {/* Video Item 3*/}
          <div className="video-item bg-white p-4 rounded-lg shadow-md">
            <div className="video-wrapper mb-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/t2EaKiO2UIQ"
                title="Let's Go to Saudi Arabia Part 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="text-lg font-semibold">
              Lets Go to Saudi Arabia Part 2
            </h4>
          </div>

          {/* Video Item 3*/}
          <div className="video-item bg-white p-4 rounded-lg shadow-md">
            <div className="video-wrapper mb-4">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/t2EaKiO2UIQ"
                title="Let's Go to Saudi Arabia Part 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h4 className="text-lg font-semibold">
              Lets Go to Saudi Arabia Part 2
            </h4>
          </div>

          {/* Add more video items as needed */}
        </div>

        <div className="flex justify-center mt-5">
          <button className=" bg-[#f6c458] px-6 py-3 rounded-md ">
            See All Videos &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
