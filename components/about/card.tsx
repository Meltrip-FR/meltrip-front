const CardAbout = ({ name, pictureURL, status, post }: any) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
        <img className="object-cover h-auto" src={pictureURL} alt="Picture" />
        <div className="absolute p-3 bottom-0 bg-meltrip-primary w-full">
          <h4 className="text-xl font-semibold tracking-tight text-white text-center">
            {name}
          </h4>
          <p className="leading-normal text-gray-100 text-center">{status}</p>
          <p className="leading-normal text-gray-100 text-center">{post}</p>
        </div>
      </div>
    </div>
  );
};
export default CardAbout;
