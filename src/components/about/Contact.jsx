import { FaMailBulk } from "react-icons/fa";
import { FaMapLocationDot, FaMobileScreenButton } from "react-icons/fa6";
import useTitle from "../../customhooks/useTitle";
import { useEffect } from "react";

const Contact = () => {
  useTitle("DineEase | Contact");
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="relative mx-auto py-32 px-3 md:px-0 w-full bg-gray-50">
      <div className="mx-auto max-w-5xl">
        {/* :DOTS BACKGROUND */}
        <div>
          {/* ::Dots 1 */}
          <span className="absolute top-0 left-0 hidden md:block opacity-10">
            <svg
              width={250}
              height={600}
              fill="none"
              viewBox="0 0 250 600"
              aria-hidden="true"
            >
              <pattern
                id="pattern-rectangles"
                x={0}
                y={0}
                width={40}
                height={40}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={10}
                  height={10}
                  className="text-green-500"
                  fill="currentColor"
                />
              </pattern>
              <rect width={250} height={600} fill="url(#pattern-rectangles)" />
            </svg>
          </span>
          {/* ::Dots 2 */}
          <span className="absolute bottom-0 right-0 opacity-20">
            <svg
              width={300}
              height={300}
              fill="none"
              viewBox="0 0 300 300"
              aria-hidden="true"
            >
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="10"
                  cy="10"
                  r="5"
                  className="fill-current text-green-500"
                />
              </pattern>
              <rect
                id="rect"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              />
            </svg>
          </span>
        </div>

        {/* :MAIN CONTAINER */}
        <div className="relative space-y-5">
          {/* ::Title */}
          <h2 className="text-center text-5xl text-red-700 font-semibold underline">
            Contact Us
          </h2>

          {/* ::Some Text */}
          <p className="mx-auto py-5 max-w-3xl text-center text-base text-gray-500">
            At DineEase, we believe that dining should be an experience of pure
            pleasure, a delightful journey for your taste buds, and a moment of
            relaxation for your soul. Step into our inviting haven, where every
            detail is designed to elevate your dining experience to new heights.
          </p>

          {/* ::Infos Container */}
          <div className="flex flex-wrap justify-between items-center text-base">
            {/* :::Address */}
            <div className="m-2.5 inline-flex items-center">
              <FaMapLocationDot className="mr-2 w-6 h-6 text-green-500" />
              <p className="text-gray-600 font-semibold">
                145/- Bagbari,UttarPara,Dhaka - 1216
              </p>
            </div>
            {/* :::Phone */}
            <div className="m-2.5 inline-flex items-center">
              <FaMobileScreenButton className="mr-2 w-6 h-6 text-green-500" />
              <p className="text-gray-600 font-semibold">+8801303289180</p>
            </div>
            {/* :::Email */}
            <div className="m-2.5 inline-flex items-center">
              <FaMailBulk className="mr-2 w-6 h-6 text-green-500" />
              <p className="text-gray-600 font-semibold">
                zahidhasan19932023@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* :MAP CONTAINER */}
        <div className="relative mt-16 rounded border-2 border-gray-200">
          {/* Embed Google map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9594074027727!2d90.33924047565885!3d23.784459787467306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08b6ef3d4db%3A0x2ea7b068734c669f!2sBagbari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1693730675336!5m2!1sen!2sbd"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
