const WaitingCard = ({ seminarData }: any) => {
  return seminarData?.map((seminar: any, index: any) => {
    return (
      <div key={index}>
        <h1>lalala {seminar.id}</h1>
      </div>
    );
  });
};

export default WaitingCard;
