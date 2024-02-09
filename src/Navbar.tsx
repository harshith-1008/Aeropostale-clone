export default function Navbar() {
  return (
    <nav className="border-b-[0.063rem] border-gray-300 pb-4">
      <section className="bg-[#18274A] flex flex-col text-center">
        <div className="py-1 ">
          <a href="#" className="text-white underline text-xs">
            Enable Accessibility
          </a>
        </div>
        <div className="h-[75px]"></div>
      </section>
      <section className="flex flex-col space-y-2">
        <div className="flex flex-row justify-between p-3 font-semibold ">
          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 22"
              id="logo"
              className=" fill-black w-full h-[21px]"
            >
              <path d="M167.941 4.785V21.67H180v-2.86h-9.261v-4.86h4.828v-2.861h-4.828V7.646h8.989V4.785H167.94zm-15.25 0V21.67h12.06v-2.86h-9.26V4.785h-2.8zm-14.224 9.975l2.427-6.178 2.451 6.178h-4.878zm.892-9.975l-6.711 16.885h2.998l1.607-4.05h7.306l1.609 4.05h2.996L142.43 4.785h-3.071zm-19.186 0v2.86h4.63V21.67h2.799V7.646h4.63V4.785h-12.06zm-3.562 2.201c-1.462-1.62-3.542-2.53-5.77-2.53-3.468 0-5.82 1.975-5.82 4.937 0 1.671.743 2.963 2.13 3.696.742.405 1.437.658 3.96 1.418 2.106.632 2.477.784 2.8.96.494.28.718.635.718 1.167 0 1.392-1.585 2.404-3.715 2.404a6.187 6.187 0 01-2.326-.48c-.621-.305-.916-.508-1.857-1.444l-.199-.202-2.205 1.797c1.413 2.05 3.888 3.291 6.514 3.291 3.813 0 6.71-2.279 6.71-5.265 0-1.14-.446-2.33-1.14-2.988-.817-.785-2.13-1.391-4.58-2.076-2.08-.607-2.625-.76-3.07-.988-.644-.329-.892-.682-.892-1.366 0-1.19 1.089-1.924 2.848-1.924 1.437 0 2.697.53 3.887 1.62l2.007-2.027zm-22.255.432c2.378 0 3.864 2.253 3.864 5.798 0 3.62-1.486 5.822-3.938 5.822-2.451 0-3.962-2.202-3.962-5.772 0-3.696 1.487-5.848 4.036-5.848zm.026-2.962c-1.908 0-3.64.76-4.904 2.152-1.338 1.468-2.055 3.771-2.055 6.658 0 2.784.694 5.038 1.98 6.531C90.644 21.165 92.45 22 94.283 22c1.808 0 3.615-.81 4.829-2.203 1.312-1.493 2.006-3.772 2.006-6.683 0-2.532-.645-4.76-1.759-6.152-1.287-1.57-3.12-2.506-4.976-2.506zm-20.714 7.696V7.646h4.581c1.114 0 1.287.025 1.758.304a2.298 2.298 0 011.163 1.974c0 .785-.42 1.519-1.089 1.9-.421.252-.792.328-1.559.328h-4.854zM70.87 4.785V21.67h2.798v-6.657h4.085c1.932 0 2.154-.025 2.8-.228 2.203-.71 3.515-2.532 3.515-4.836 0-2.176-1.214-3.974-3.244-4.785-.917-.38-.966-.38-3.49-.38H70.87zM59.647 7.418c2.377 0 3.863 2.253 3.863 5.798 0 3.62-1.486 5.822-3.937 5.822-2.45 0-3.96-2.202-3.96-5.772 0-3.696 1.484-5.848 4.034-5.848zm.025-2.962c-1.906 0-3.64.76-4.903 2.152-1.336 1.468-2.053 3.771-2.053 6.658 0 2.784.692 5.038 1.98 6.531C55.933 21.165 57.741 22 59.573 22c1.808 0 3.616-.81 4.828-2.203 1.313-1.493 2.007-3.772 2.007-6.683 0-2.532-.644-4.76-1.759-6.152-1.286-1.57-3.118-2.506-4.977-2.506zm-20.913 7.67v-4.48h4.433c.792 0 1.214.05 1.559.203.743.329 1.312 1.214 1.312 2.05 0 .734-.396 1.468-1.014 1.848-.471.278-.917.38-1.907.38H38.76zm-2.799-7.34V21.67h2.798v-6.682h4.433l2.847 6.682h3.12l-3.12-7.24c1.784-.784 2.872-2.506 2.872-4.53 0-1.924-1.065-3.672-2.798-4.584-.891-.455-1.312-.531-3.367-.531H35.96zM29.627 0h-3.144l-1.834 3.367h2.625L29.627 0zm-9.583 4.785V21.67h12.058v-2.86h-9.26v-4.86h4.829v-2.861h-4.828V7.646h8.987V4.785H20.044zM5.82 14.76l2.427-6.178 2.45 6.178H5.82zm.89-9.975L0 21.67h2.995l1.61-4.05h7.305l1.61 4.05h2.995L9.779 4.785H6.71z"></path>
            </svg>
          </div>
          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-3xl border-[0.0064rem] border-gray-500 mx-2 py-1 pl-4 pr-2 h-10 items-center ">
          <input
            type="text"
            placeholder="Search"
            className="text-sm font-semibold"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </section>
    </nav>
  );
}
