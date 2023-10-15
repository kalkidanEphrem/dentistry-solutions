import Link from "next/link";

export default function Signup() {
  return (
    <section className="w-full xl:px-28 xl:py-36 md:px-20 md:py-24 px-10 py-16 overflow-clip">
      <div className="bg-tertiary p-6 md:p-8 lg:px-16 lg:py-8 rounded-xl relative">
        {/* decorative svg */}
        <svg
          width="510"
          height="350"
          viewBox="0 0 510 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block absolute 2xl:right-0 2xl:top-16 xl:-right-[70px] lg:-right-32 lg:-top-20"
        >
          <path
            d="M277.931 55.5862C233.971 55.5845 190.997 68.614 154.439 93.0281C117.882 117.442 89.3822 152.145 72.5412 192.751C55.7003 233.358 51.2741 278.045 59.8222 321.166C68.3702 364.287 89.5088 403.906 120.567 435.017C125.774 440.236 128.696 447.31 128.688 454.683C128.68 462.055 125.744 469.123 120.525 474.331C115.306 479.538 108.232 482.46 100.86 482.452C93.4869 482.444 86.4193 479.508 81.2116 474.289C55.4238 448.51 34.9761 417.897 21.0404 384.202C7.10463 350.507 -0.0453252 314.394 0.000216191 277.931C0.000216191 124.43 124.43 0 277.931 0C431.432 0 555.862 124.43 555.862 277.931C555.907 314.394 548.757 350.507 534.822 384.202C520.886 417.897 500.438 448.51 474.65 474.289C469.443 479.508 462.375 482.444 455.002 482.452C447.63 482.46 440.556 479.538 435.337 474.331C430.118 469.123 427.182 462.055 427.174 454.683C427.166 447.31 430.088 440.236 435.295 435.017C466.353 403.906 487.492 364.287 496.04 321.166C504.588 278.045 500.162 233.358 483.321 192.751C466.48 152.145 437.98 117.442 401.423 93.0281C364.865 68.614 321.891 55.5845 277.931 55.5862Z"
            fill="url(#paint0_linear_1_3148)"
            fill-opacity="0.8"
          />
          <path
            d="M277.932 222.342C263.19 222.342 249.051 228.198 238.627 238.622C228.203 249.047 222.346 263.185 222.346 277.928C222.346 292.67 228.203 306.809 238.627 317.233C249.051 327.658 263.19 333.514 277.932 333.514C292.675 333.514 306.813 327.658 317.238 317.233C327.662 306.809 333.518 292.67 333.518 277.928C333.518 263.185 327.662 249.047 317.238 238.622C306.813 228.198 292.675 222.342 277.932 222.342Z"
            fill="url(#paint1_linear_1_3148)"
            fill-opacity="0.8"
          />
          <path
            d="M166.757 277.925C166.753 259.64 171.259 241.638 179.876 225.511C188.492 209.384 200.953 195.632 216.154 185.472C231.356 175.312 248.828 169.058 267.024 167.265C285.22 165.471 303.578 168.193 320.47 175.19C337.363 182.186 352.269 193.241 363.868 207.375C375.467 221.509 383.401 238.286 386.967 256.219C390.533 274.152 389.621 292.687 384.311 310.184C379.002 327.68 369.459 343.597 356.528 356.523C353.946 359.106 351.898 362.171 350.5 365.545C349.103 368.919 348.383 372.535 348.383 376.187C348.383 379.839 349.103 383.455 350.5 386.829C351.898 390.203 353.946 393.268 356.528 395.851C361.743 401.066 368.817 403.996 376.192 403.996C379.844 403.996 383.46 403.276 386.834 401.879C390.208 400.481 393.273 398.433 395.856 395.851C419.178 372.529 435.062 342.816 441.497 310.468C447.932 278.119 444.63 244.589 432.009 214.118C419.388 183.646 398.014 157.601 370.591 139.277C343.167 120.953 310.926 111.172 277.943 111.172C244.961 111.172 212.72 120.953 185.296 139.277C157.873 157.601 136.499 183.646 123.878 214.118C111.256 244.589 107.955 278.119 114.39 310.468C120.825 342.816 136.709 372.529 160.031 395.851C162.614 398.431 165.679 400.478 169.052 401.873C172.425 403.269 176.04 403.987 179.691 403.986C183.341 403.984 186.956 403.264 190.328 401.866C193.7 400.468 196.764 398.419 199.345 395.837C201.925 393.254 203.972 390.189 205.367 386.816C206.763 383.443 207.481 379.828 207.48 376.177C207.478 372.527 206.758 368.912 205.36 365.54C203.962 362.168 201.913 359.104 199.331 356.523C188.987 346.217 180.784 333.967 175.193 320.477C169.603 306.988 166.736 292.526 166.757 277.925Z"
            fill="url(#paint2_linear_1_3148)"
            fill-opacity="0.8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_3148"
              x1="277.931"
              y1="0"
              x2="277.931"
              y2="482.452"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_3148"
              x1="277.932"
              y1="222.342"
              x2="277.932"
              y2="333.514"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_3148"
              x1="277.943"
              y1="111.172"
              x2="277.943"
              y2="403.996"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 flex flex-col gap-10 justify-between z-10">
          <div className="flex flex-col sm:w-max">
            {/* icon above heading */}
            <svg
              width="56"
              height="25"
              viewBox="0 0 46 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:self-end mr-2"
            >
              <path
                d="M41 23C41 18.2261 39.1036 13.6477 35.7279 10.2721C32.3523 6.89642 27.7739 5 23 5C18.2261 5 13.6477 6.89642 10.2721 10.2721C6.89642 13.6477 5 18.2261 5 23"
                stroke="#00E5CC"
                stroke-width="10"
              />
            </svg>

            <h1 className="text-primary font-bold text-3xl sm:text-4xl">
              Schedule Appointment
            </h1>
          </div>
          <p className="text-primary mt-3 mb-5 font-semibold text-xl">
            Your Perfect Smile Awaits: Schedule Your Dental Care Appointment
            Today for a Lifetime of Radiant, Healthy Teeth and Unmatched Oral
            Wellness!
          </p>

          <form
            action="/"
            className="flex flex-col sm:flex-row sm:py-1 sm:px-2 sm:bg-white items-stretch sm:justify-stretch rounded-md sm:shadow-lg"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email adress"
              className="min-h-[70px] rounded-md pl-2 basis-2/3 grow text-primary focus:outline-none invalid:text-red-600 font-medium text-2xl"
            />
            <Link
              href="/"
              className="text-xl sm:text-base py-5 sm:py-3 sm:px-10 rounded-md font-semibold text-center bg-primary text-white hover:cursor-pointer sm:hover:scale-110"
            >
              Schedule Appointment
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
