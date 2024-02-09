export default function Body() {
  return (
    <body className="pt-3 flex flex-col space-y-4">
      <section className="mb-3 px-2 flex flex-row overflow-scroll space-x-2 flex-nowrap whitespace-nowrap w-full overflow-x-scroll scrollbar-hidden no-scrollbar">
        <div
          className="bg-black text-white
          flex flex-row p-3 py-3 items-center rounded-md
           justify-between w-11/12
        "
        >
          <div className=" font-semibold text-sm mr-20">
            <p>FREE JEANS</p>
            <p>WHEN YOU BUY ONE</p>
          </div>
          <span
            className="flex flex-row  justify-between bg-white rounded-3xl text-black 
          p-3 h-8 items-center text-xs font-semibold "
          >
            <p className="mr-8">Women</p>
            <p>Men</p>
          </span>
        </div>
        <div
          className="bg-black text-white
          flex flex-row p-3 py-3 items-center rounded-md
           justify-between w-11/12
        "
        >
          <div className=" font-semibold text-sm mr-20">
            <p>FREE JEANS</p>
            <p>WHEN YOU BUY ONE</p>
          </div>
          <span
            className="flex flex-row  justify-between bg-white rounded-3xl text-black 
          p-3 h-8 items-center text-xs font-semibold "
          >
            <p className="mr-8">Women</p>
            <p>Men</p>
          </span>
        </div>
        <div
          className="bg-black text-white
          flex flex-row p-3 py-3 items-center rounded-md
           justify-between w-11/12
        "
        >
          <div className=" font-semibold text-sm mr-20">
            <p>FREE JEANS</p>
            <p>WHEN YOU BUY ONE</p>
          </div>
          <span
            className="flex flex-row  justify-between bg-white rounded-3xl text-black 
          p-3 h-8 items-center text-xs font-semibold "
          >
            <p className="mr-8">Women</p>
            <p>Men</p>
          </span>
        </div>
      </section>
      <section className="bg-[#1B5C93] flex flex-col items-center justify-center text-white p-2 space-y-1">
        <img
          className="h-6 w-24"
          src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw227dea86/images/2024/Home/020324/Online%20Only_2x.png"
        ></img>
        <div className="h-10 w-40">
          <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw1627c047/images/2024/Home/020324/game%20on!_2x.png"></img>
        </div>
        <h3 className=" text-4xl">60% OFF SITEWIDE</h3>
        <span
          className="flex flex-row  justify-between bg-white rounded-3xl text-black 
          p-3 px-5 h-8 w-40 items-center text-xs font-semibold border-black border-[0.0999rem]"
        >
          <p className="mr-8">Women</p>
          <p>Men</p>
        </span>
        <p
          className="text-xs
        "
        >
          *Exclusions apply
        </p>
      </section>
      <section className="">
        <a href="" className="">
          <video
            playsInline={true}
            muted={true}
            loop={true}
            autoPlay={true}
            className="w-full"
          >
            <source
              alt="Your browser does not support HTML video."
              src="https://s7d2.scene7.com/is/content/NauticaBrand/2020%20Videos/BaggyAnimation-DT.mp4"
              type="video/mp4"
            />
          </video>
        </a>
        {/* <div className="bg-[#]">
        <img
          className=" size-14"
          alt="Loosen Up"
          src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwe136b202/images/2024/Home/013124/Loosen%20up_2x-min.png"
        />
        <p>Never stress your pants style again.</p>
        </div> */}
      </section>
    </body>
  );
}
