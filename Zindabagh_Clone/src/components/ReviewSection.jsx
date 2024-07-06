import mateenImage from "../assets/M1.webp";
import faizaImage from "../assets/F1.webp";
import haniaImage from "../assets/F2.webp";

const ReviewSection = () => {
  return (
    <div className="mt-5  py-8 px-8">
      <h5 className="text-start text-gray-500 font-bold size-fit  ">
        This section is a testament to our Commitment to quality and to building
        enduring relationships with our valued customers
      </h5>
      <div className="  flex gap-5 mt-8 flex-col">
        {/* Review Box 1 */}
        <div className="border border-white p-4 shadow-md rounded-lg">
          <div className="flex items-center justify-between">
            <div className="review-header flex items-center mb-4">
              <img
                src={mateenImage}
                alt="Reviewer 1"
                className="h-12 w-12 rounded-full"
              />
              <span className="ml-2 font-semibold">Abdul Mateen</span>
            </div>
            <div className="stars text-yellow-400 text-xl mb-4">
              &#9733;&#9733;&#9733;&#9734;&#9734;
            </div>
          </div>
          <p className=" leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed
            eum numquam temporibus labore mollitia tenetur, doloribus quo iusto
            qui? Veritatis iste delectus accusantium et aliquid earum tempora
            animi sint, odit voluptates possimus debitis? Rerum repellendus
            fugiat sit velit aut.
          </p>
        </div>

        {/* Review Box 2 */}
        <div className="border border-white p-4 shadow-md rounded-lg">
          <div className="flex items-center justify-between">
            <div className="review-header flex items-center mb-4">
              <img
                src={faizaImage}
                alt="Reviewer 1"
                className="h-12 w-12 rounded-full"
              />
              <span className="ml-2 font-semibold">Faiza Yaqoob</span>
            </div>
            <div className="stars text-yellow-400 text-xl mb-4">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </div>
          </div>
          <p className=" leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed
            eum numquam temporibus labore mollitia tenetur, doloribus quo iusto
            qui? Veritatis iste delectus accusantium et aliquid earum tempora
            animi sint, odit voluptates possimus debitis? Rerum repellendus
            fugiat sit velit aut.
          </p>
        </div>

        {/* Review Box 3 */}
        <div className="border border-white p-4 shadow-md rounded-lg">
          <div className="flex items-center justify-between">
            <div className="review-header flex items-center mb-4">
              <img
                src={haniaImage}
                alt="Reviewer 1"
                className="h-12 w-12 rounded-full"
              />
              <span className="ml-2 font-semibold">Hania Muneer</span>
            </div>
            <div className="stars text-yellow-400 text-xl mb-4">
              &#9733;&#9733;&#9734;&#9734;&#9734;
            </div>
          </div>
          <p className=" leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed
            eum numquam temporibus labore mollitia tenetur, doloribus quo iusto
            qui? Veritatis iste delectus accusantium et aliquid earum tempora
            animi sint, odit voluptates possimus debitis? Rerum repellendus
            fugiat sit velit aut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
