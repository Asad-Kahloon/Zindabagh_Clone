import book1 from "../assets/Pakistan-se-bahir-kese-jain-1-510x768.webp";
import book2 from "../assets/Pakistan-se-Bahir-1-510x773.webp";
import book3 from "../assets/PK-1-1018x1536.webp";
import book4 from "../assets/Aik-fulbright-fellow-Final-2-510x796.webp";
import book5 from "../assets/Sakhar_Final-3-510x764.webp";
import book6 from "../assets/Experience-510x799.webp";
import book7 from "../assets/Scholars-of-Pakistan-2-510x763.webp";

function Books() {
  return (
    <div className="bg-white px-5 py-10">
      <div className="w-[100%] px-6 grid justify-center items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/* Book Item 1 */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <div className=" mb-4">
            <a href="#">
              <img src={book1} alt="" />
            </a>
          </div>
          <h4 className="text-lg text-center font-semibold">
            Pakistan sy Bahir kesy Jayn (1)
          </h4>
        </div>

        {/* Book Item 2 */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <div className=" mb-4">
            <a href="#">
              <img src={book2} alt="" />
            </a>
          </div>
          <h4 className="text-lg text-center font-semibold">
            Pakistan sy Bahir kesy Jayn (2)
          </h4>
        </div>

        {/* Book Item 3 */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <div className=" mb-4">
            <a href="#">
              <img src={book3} alt="" />
            </a>
          </div>
          <h4 className="text-lg text-center font-semibold">
            Pakistan sy Bahir kesy Jayn (3)
          </h4>
        </div>

        {/* Book Item 4 */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <div className=" mb-4">
            <a href="#">
              <img src={book4} alt="" />
            </a>
          </div>
          <h4 className="text-lg text-center font-semibold">
            Sukkur to Florida
          </h4>
        </div>

        {/* Book Item 5 */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <div className=" mb-4">
            <a href="#">
              <img src={book5} alt="" />
            </a>
          </div>
          <h4 className="text-lg text-center font-semibold">
            Sukkur to Georgia
          </h4>
        </div>

        {/* Book Item 6 */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <div className=" mb-4">
            <a href="#">
              <img src={book6} alt="" />
            </a>
          </div>
          <h4 className="text-lg text-center font-semibold">
            Experiencing America
          </h4>
        </div>

        {/* Book Item 7 */}
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <div className=" mb-4">
            <a href="#">
              <img src={book7} alt="" />
            </a>
          </div>
          <h4 className="text-lg text-center font-semibold">
            Scholars Of Pakistan
          </h4>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className=" bg-[#f6c458] px-6 py-3 rounded-md ">
          See All Books &gt;
        </button>
      </div>
    </div>
  );
}

export default Books;
