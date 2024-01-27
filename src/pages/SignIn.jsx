import WhiteButtonGoogle from "../components/WhiteButtonGoogle";

const SignIn = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-row items-center justify-start gap-[94px] tracking-[normal] text-left text-[72px] text-light-gohan font-montserrat lg:flex-wrap mq450:gap-[23px] mq750:gap-[47px]">
      <div className="h-[1024px] w-[1440px] relative bg-ghostwhite hidden max-w-full" />
      <div className="w-[50%] flex flex-col items-center justify-start pt-[462px] pb-[67px] pr-[152px] pl-5 box-border relative gap-[359px] min-w-[723px] max-w-full lg:flex-1 mq1050:pt-[300px] mq1050:pb-11 mq1050:box-border mq1050:min-w-full mq450:pt-[195px] mq450:pb-[29px] mq450:box-border mq750:gap-[179px] mq750:pr-[76px] mq750:box-border">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5">
          <h1 className="m-0 h-[88px] relative text-inherit font-bold font-inherit inline-block z-[2] mq1050:text-[58px] mq450:text-[43px]">
            BASE
          </h1>
        </div>
        <div className="w-[301px] flex flex-row items-center justify-between py-0 px-0 box-border gap-[20px] z-[2]">
          <img
            className="h-11 w-11 relative object-cover"
            loading="eager"
            alt=""
            src="/vector@2x.png"
          />
          <img
            className="h-[41px] w-[42px] relative object-cover"
            loading="eager"
            alt=""
            src="/vector-1@2x.png"
          />
          <div className="h-12 w-12 relative overflow-hidden shrink-0">
            <img
              className="absolute h-[74.58%] w-9/12 top-[12.5%] right-[12.5%] bottom-[12.92%] left-[12.5%] max-w-full overflow-hidden max-h-full"
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="h-12 w-[50px] relative overflow-hidden shrink-0">
            <img
              className="absolute h-[8.96%] w-[23.8%] top-[46.67%] right-[38.4%] bottom-[44.38%] left-[37.8%] max-w-full overflow-hidden max-h-full"
              loading="eager"
              alt=""
              src="/vector-3.svg"
            />
            <img
              className="absolute h-[81.25%] w-[71%] top-[12.5%] right-[14.6%] bottom-[6.25%] left-[14.4%] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
        <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[3px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/left-side@2x.png"
          />
          <div className="absolute top-[54.3px] left-[61px] rounded-[50%] bg-gray-100 w-[80.2px] h-[80.2px] z-[2]" />
          <img
            className="absolute top-[83.7px] left-[59px] w-[82.8px] h-[22px] z-[3]"
            loading="eager"
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <img className="h-0 w-0 relative hidden" alt="" />
      <WhiteButtonGoogle />
    </div>
  );
};

export default SignIn;
