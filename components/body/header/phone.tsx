const PhoneHeader = () => {
  return (
    <div className="relative inline-block text-left">
      <button className="flex items-center text-gray-500 dark:text-white text-md">
        <div className="ml-2">
          <img
            alt="picture"
            className="w-8 h-8 border rounded-full border-gray-300 shadow"
            src={
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm"
            }
          />
        </div>
      </button>
    </div>
  );
};

export default PhoneHeader;
