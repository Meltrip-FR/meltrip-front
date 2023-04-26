const CardTeams = ({ name, pictureURL, status, post }: any) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="relative overflow-hidden h-80">
        <img
          className="object-cover h-72 w-full"
          src={pictureURL}
          alt="Picture"
        />
        <div className="absolute bottom-0 w-[70%] left-[5vh] bg-white h-20 border-t-4 border-t-meltrip-primary">
          <h4 className="text-xl font-semibold tracking-tight text-meltrip-primary  text-center">
            {name}
          </h4>
          <p className="leading-normal text-meltrip-primary text-center">
            {status}
          </p>
          <p className="leading-normal text-meltrip-primary text-center">
            {post}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardTeams;
