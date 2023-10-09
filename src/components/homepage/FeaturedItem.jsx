import { Link } from "react-router-dom";
import img1 from "../../assets/moreimage/chad-montano-lP5MCM6nZ5A-unsplash.jpg"
import img2 from "../../assets/moreimage/masimo-grabar-NzHRSLhc6Cs-unsplash.jpg";

const FeaturedItem = () => {
  return (
    <section>
      <div className=" px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className=" mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-red-700 sm:text-3xl">
                  Items
                </h2>

                <p className="mt-4 text-gray-500">
                  This is the most uniq food of our in this week.
                </p>
              </header>

              <Link
                to='/menu'
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-red-500  rounded hover:bg-red-700 focus:outline-none focus:ring"
              >
                See Menu
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="block group">
                  <img
                    src={img1}
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      American Pizza
                    </h3>

                    <p className="mt-1 text-sm text-red-700">$15</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="block group">
                  <img
                    src={img2}
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Maxican Tacco
                    </h3>

                    <p className="mt-1 text-sm text-red-700">$12</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
