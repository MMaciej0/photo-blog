function Banner() {
  return (
    <div
      className="relative bg-fixed bg-bottom bg-no-repeat bg-cover w-full h-full"
      style={{ backgroundImage: `url('/banner.jpg')` }}
    >
      <div className="h-[50vh] w-full relative">
        <div className="text-center rounded-md backdrop-blur-md absolute left-[50%] translate-x-[-50%] top-[22%]">
          <h1 className="text-white text-4xl font-serif tracking-widest">
            Cycling Own Type
          </h1>
          <p className="text-white py-3 tracking-widest">
            John Doe blog & other
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
