import Image from "next/image";

export default function Cards() {
  return (
    <section className="w-full xl:px-28 xl:pt-36 md:px-20 md:pt-24 px-10 pt-16">
      <div className="flex flex-col">
        {/* icon above heading */}
        <svg
          width="56"
          height="25"
          viewBox="0 0 46 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:self-center sm:ml-32"
        >
          <path
            d="M41 23C41 18.2261 39.1036 13.6477 35.7279 10.2721C32.3523 6.89642 27.7739 5 23 5C18.2261 5 13.6477 6.89642 10.2721 10.2721C6.89642 13.6477 5 18.2261 5 23"
            stroke="#00E5CC"
            stroke-width="10"
          />
        </svg>

        <h1 className="text-primary font-bold sm:text-center text-3xl sm:text-4xl">
          DR. Kalkidan Ephrem
        </h1>
        <p className="mt-3 mb-5 font-semibold text-xl text-center text-card-paragraph">
          I'll have you showing your best smile in no time
        </p>
      </div>

      {/* cards */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 xl:gap-6 2xl:gap-28 mt-10 pb-5 pt-10">
        {/* 1st card */}
        <div className="flex flex-col max-w-sm border-r-2 shadow-sm border-b-2 p-4 rounded-lg md:col-span-2 xl:col-span-1">
          {/* 1st card icon */}
          <svg
            width="70"
            height="72"
            viewBox="0 0 70 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="70"
              height="70"
              rx="10"
              fill="#ECF9FF"
              fill-opacity="0.8"
            />
            <g filter="url(#filter0_f_1_2956)">
              <rect
                x="22"
                y="35"
                width="27"
                height="27"
                rx="10"
                fill="#FFC350"
                fill-opacity="0.25"
              />
            </g>
            <g clip-path="url(#clip0_1_2956)">
              <path
                d="M34.4349 15.1292L16.5232 23.7762C16.2986 23.8847 16.1559 24.112 16.1559 24.3614V45.6386C16.1559 45.888 16.2987 46.1153 16.5232 46.2237L34.4349 54.8708C34.7918 55.0431 35.2079 55.0431 35.5649 54.8708L53.4765 46.2237C53.7011 46.1153 53.8438 45.888 53.8438 45.6386V24.3614C53.8438 24.112 53.701 23.8847 53.4765 23.7762L35.5649 15.1292C35.2079 14.9569 34.7918 14.9569 34.4349 15.1292Z"
                fill="#FFE17D"
              />
              <path
                d="M16.264 24.0057C16.1957 24.1097 16.1559 24.2321 16.1559 24.3614V45.6386C16.1559 45.888 16.2987 46.1153 16.5232 46.2238L34.4349 54.8707C34.6133 54.9569 34.8066 55 34.9999 55V33.0507L16.264 24.0057Z"
                fill="#FFC350"
              />
              <path
                d="M53.7358 24.0057C53.8041 24.1097 53.8438 24.2321 53.8438 24.3614V45.6386C53.8438 45.888 53.7011 46.1153 53.4766 46.2238L35.5649 54.8707C35.3865 54.9569 35.1932 55 34.9999 55V33.0507L53.7358 24.0057Z"
                fill="#FFD164"
              />
              <path
                d="M21.5161 44.5044C21.4216 44.5044 21.3251 44.4835 21.2344 44.4397L18.469 43.1047C18.1454 42.9486 18.0102 42.5602 18.1663 42.2372C18.3218 41.9143 18.7114 41.7797 19.0337 41.9346L21.7991 43.2697C22.1227 43.4258 22.2579 43.8142 22.1018 44.1372C21.9901 44.3693 21.7579 44.5044 21.5161 44.5044Z"
                fill="#FFE17D"
              />
              <path
                d="M24.0613 42.8477C23.9668 42.8477 23.8703 42.8267 23.7796 42.783L18.4727 40.2213C18.1497 40.0652 18.014 39.6768 18.1701 39.3538C18.3255 39.0315 18.7158 38.8963 19.0375 39.0512L24.3443 41.6129C24.6672 41.769 24.803 42.1574 24.6469 42.4803C24.5354 42.7124 24.3031 42.8477 24.0613 42.8477Z"
                fill="#FFF6D8"
              />
              <path
                d="M47.3865 27.0603L28.5848 17.9773L23.6285 20.3796L42.4724 29.4767L47.3865 27.0603Z"
                fill="#FF8087"
              />
              <path
                d="M42.4725 29.4768V36.5242C42.4725 36.7637 42.7229 36.9209 42.9387 36.8168L47.0193 34.8468C47.2439 34.7384 47.3866 34.5111 47.3866 34.2617V27.0604L42.4725 29.4768Z"
                fill="#E6646E"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_2956"
                x="12"
                y="25"
                width="47"
                height="47"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_1_2956"
                />
              </filter>
              <clipPath id="clip0_1_2956">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(14.9999 15)"
                />
              </clipPath>
            </defs>
          </svg>

          <h2 className="text-primary font-bold text-xl mt-14">
            Choose Packages
          </h2>

          <p className="mt-5 font-semibold text-lg text-card-paragraph">
            Explore my dental packages for personalized care. Start your journey
            to optimal oral health today.
          </p>
        </div>

        {/* 2nd card */}
        <div className="flex flex-col max-w-sm p-4 xl:border-hidden border-r-2 shadow-sm border-b-2 rounded-lg md:col-span-2 lg:col-start-2 xl:col-span-1 xl:shadow-xl order-2 xl:order-1">
          {/* 2nd card icon */}
          <svg
            width="70"
            height="77"
            viewBox="0 0 70 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="70"
              height="70"
              rx="10"
              fill="#ECF9FF"
              fill-opacity="0.8"
            />
            <g filter="url(#filter0_f_1_2986)">
              <rect
                x="22"
                y="35"
                width="27"
                height="27"
                rx="10"
                fill="#56C7FF"
                fill-opacity="0.3"
              />
            </g>
            <g clip-path="url(#clip0_1_2986)">
              <path
                d="M46.7676 55.315H15V25.0787H55V47.0177L46.7676 55.315Z"
                fill="white"
              />
              <path d="M15 25.0787H55V30.1181H15V25.0787Z" fill="#DCE9FF" />
              <path
                d="M22.5 20.0394H20V16.2598C20 15.5641 20.5597 15 21.25 15C21.9403 15 22.5 15.5641 22.5 16.2598V20.0394Z"
                fill="#D0DCEE"
              />
              <path
                d="M50 20.0394H47.5V16.2598C47.5 15.5641 48.0597 15 48.75 15C49.4403 15 50 15.5641 50 16.2598V20.0394Z"
                fill="#D0DCEE"
              />
              <path
                d="M46.7676 47.0177V55.3149L55 47.0177H46.7676Z"
                fill="#DBE6F8"
              />
              <path
                d="M32.5926 46.9246L26.4451 41.9682C25.9058 41.5333 25.8183 40.7404 26.2501 40.1969C26.6816 39.6534 27.4683 39.5651 28.0076 40.0003L32.4076 43.548L41.9825 33.8977C42.4708 33.4059 43.2621 33.4059 43.7501 33.8977C44.2381 34.3895 44.2381 35.187 43.7501 35.6792L32.5926 46.9246Z"
                fill="#0AC1A7"
              />
              <path
                d="M55 27.5984H15V21.2992C15 19.9077 16.1194 18.7795 17.5 18.7795H52.5C53.8806 18.7795 55 19.9077 55 21.2992V27.5984Z"
                fill="#FF3132"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_2986"
                x="7"
                y="20"
                width="57"
                height="57"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7.5"
                  result="effect1_foregroundBlur_1_2986"
                />
              </filter>
              <clipPath id="clip0_1_2986">
                <rect
                  width="40"
                  height="40.315"
                  fill="white"
                  transform="translate(15 15)"
                />
              </clipPath>
            </defs>
          </svg>

          <h2 className="text-primary font-bold text-xl mt-14">
            Schedule appointment
          </h2>

          <p className="mt-5 font-semibold text-lg text-card-paragraph">
            Your Perfect Smile Awaits: Schedule Your Dental Care Appointment
            Today for a Lifetime of Radiant, Healthy Teeth and Unmatched Oral
            Wellness!
          </p>
        </div>

        {/* 3rd card */}
        <div className="flex flex-col max-w-sm p-4 border-r-2 shadow-sm border-b-2 md:col-start-2 lg:col-start-3 rounded-lg order-1">
          {/* 3rd card icon */}
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="70"
              height="70"
              rx="10"
              fill="#ECF9FF"
              fill-opacity="0.8"
            />
            <g clip-path="url(#clip0_1_2971)">
              <path
                d="M26.9853 38.7693H21.2139C20.2763 38.7693 19.5163 39.5293 19.5163 40.4669V53.3023C19.5163 54.2399 20.2763 54.9999 21.2139 54.9999H26.9853C27.9228 54.9999 28.6828 54.2399 28.6828 53.3023V40.4669C28.6828 39.5293 27.9228 38.7693 26.9853 38.7693Z"
                fill="#FFDC4A"
              />
              <path
                d="M21.9308 53.3023V40.4669C21.9308 39.5294 22.6908 38.7693 23.6284 38.7693H21.2139C20.2763 38.7693 19.5163 39.5293 19.5163 40.4669V53.3024C19.5163 54.24 20.2763 55 21.2139 55H23.6283C22.6908 54.9999 21.9308 54.2399 21.9308 53.3023Z"
                fill="#EDCA3A"
              />
              <path
                d="M39.4316 32.8827H33.6602C32.7226 32.8827 31.9626 33.6427 31.9626 34.5803V53.3025C31.9626 54.2401 32.7226 55.0001 33.6602 55.0001H39.4316C40.3692 55.0001 41.1292 54.2401 41.1292 53.3025V34.5802C41.1292 33.6427 40.3692 32.8827 39.4316 32.8827Z"
                fill="#FF3132"
              />
              <path
                d="M34.3772 53.3024V34.5801C34.3772 33.6426 35.1372 32.8826 36.0748 32.8826H33.6603C32.7228 32.8826 31.9628 33.6426 31.9628 34.5801V53.3024C31.9628 54.24 32.7228 55 33.6603 55H36.0748C35.1372 55 34.3772 54.24 34.3772 53.3024Z"
                fill="#D82A2B"
              />
              <path
                d="M51.8778 26.9958H46.1064C45.1689 26.9958 44.4089 27.7558 44.4089 28.6934V53.3024C44.4089 54.2399 45.1689 54.9999 46.1064 54.9999H51.8778C52.8154 54.9999 53.5754 54.2399 53.5754 53.3024V28.6934C53.5753 27.7558 52.8153 26.9958 51.8778 26.9958Z"
                fill="#3CDCF9"
              />
              <path
                d="M46.8234 53.3024V28.6934C46.8234 27.7558 47.5834 26.9958 48.521 26.9958H46.1066C45.169 26.9958 44.409 27.7558 44.409 28.6934V53.3024C44.409 54.2399 45.169 54.9999 46.1066 54.9999H48.521C47.5834 54.9999 46.8234 54.2399 46.8234 53.3024Z"
                fill="#30CBE8"
              />
              <path
                d="M53.4842 15.0074L47.6539 15.7672L49.0632 17.6522L44.0702 21.3854L41.4439 19.0698C40.996 18.6749 40.3327 18.6482 39.8543 19.0057L28.6876 27.3545L26.0754 25.3976C25.6274 25.062 25.0119 25.0617 24.5637 25.3969L15.5655 32.1246L17.0761 34.1452L25.3183 27.9828L27.9306 29.9397C28.3785 30.2753 28.994 30.2756 29.4422 29.9404L40.5441 21.6399L43.1704 23.9554C43.6183 24.3503 44.2818 24.3771 44.76 24.0195L50.5738 19.6727L51.9845 21.5593L54.3616 16.1804C54.6264 15.5811 54.1339 14.9227 53.4842 15.0074Z"
                fill="#2DC580"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2971">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(15 15)"
                />
              </clipPath>
            </defs>
          </svg>

          <h2 className="text-primary font-bold text-lg mt-14">Services</h2>

          <p className="mt-5 font-semibold text-xl text-card-paragraph">
            I’m now offering a variety of dental services including cosmetic
            dentistry and children’s dentistry
          </p>
        </div>
      </div>
    </section>
  );
}
