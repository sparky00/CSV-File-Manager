const Subtract = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[34px] min-h-[65px] max-w-full text-left text-5xl text-black font-paragraph-ui-type-text-2xl-s mq750:gap-[17px]">
      <div className="flex-1 flex flex-col items-start justify-center min-w-[684px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              Upload CSV
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[28px]">
        <img
          className="h-[23px] w-[18px] relative"
          loading="eager"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="h-[30px] w-[30px] relative object-cover"
          loading="eager"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
    </div>
  );
};

export default Subtract;
