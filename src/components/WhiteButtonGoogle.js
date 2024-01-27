import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

const WhiteButtonGoogle = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <form className="m-0 w-[423px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[22px] min-w-[423px] max-w-full lg:flex-1 mq450:min-w-full">
      <div className="w-[196px] h-[81px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[6px]">
        <h1 className="m-0 w-[143.8px] h-[48.3px] relative text-17xl font-bold font-montserrat text-black text-left inline-block shrink-0 z-[1] mq1050:text-10xl mq450:text-3xl">
          Sign In
        </h1>
        <div className="self-stretch relative text-base font-lato text-black text-left z-[1]">
          Sign in to your account
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[28px] min-h-[38px] mq450:flex-wrap">
        <button className="cursor-pointer [border:none] pt-[9px] pb-[7px] pr-[21px] pl-5 bg-[transparent] flex-1 flex flex-row items-start justify-start box-border relative gap-[12px] min-w-[129px]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[-1px] right-[0.2px] bottom-[2.1px] left-[0.2px] z-[1]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
          </div>
          <img
            className="h-[15.4px] w-[15.4px] relative overflow-hidden shrink-0 object-cover z-[2]"
            alt=""
            src="/googleicon-1@2x.png"
          />
          <div className="flex-1 relative text-xs font-montserrat text-secondary-text text-center z-[2]">
            Sign in with Google
          </div>
        </button>
        <div className="flex-[0.9172] flex flex-row items-start justify-start pt-2 pb-[7px] pr-7 pl-[26px] box-border relative gap-[11px] min-w-[129px] min-h-[33px] mq450:flex-1">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[-1px] right-[0.2px] bottom-[1.1px] left-[0.2px] z-[1]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
          </div>
          <img
            className="h-[15.4px] w-[12.6px] relative overflow-hidden shrink-0 object-cover z-[2]"
            alt=""
            src="/apple-1@2x.png"
          />
          <input
            className="w-[calc(100%_-_66.6px)] [border:none] [outline:none] font-montserrat text-xs bg-[transparent] h-[16.5px] flex-1 relative text-secondary-text text-center flex items-center justify-center min-w-[72px] z-[2]"
            placeholder="Sign in with Apple"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start p-[33px] box-border relative gap-[23px] max-w-full mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
        <div className="w-full h-full absolute my-0 mx-[!important] top-[-0.1px] right-[0.2px] bottom-[5.1px] left-[0.2px] z-[1]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-light-gohan" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="relative text-base font-lato text-black text-left z-[2]">
            Email address
          </div>
          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
            <div className="h-[43.9px] w-[356.8px] relative max-w-full z-[2]">
              <div className="absolute h-full w-full top-[-1.03%] right-[-0.03%] bottom-[1.03%] left-[0.03%] rounded-3xs bg-background" />
            </div>
            <input
              className="w-[141px] [border:none] [outline:none] font-lato text-base bg-[transparent] h-5 relative text-black text-left inline-block whitespace-nowrap z-[3] ml-[-340px]"
              placeholder="johndoe@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="relative text-base font-lato text-black text-left z-[2]">
            Password
          </div>
          <div className="self-stretch rounded-3xs bg-field-color-darker flex flex-row items-end justify-start pt-[11px] px-4 pb-3 box-border gap-[12px] max-w-full z-[2]">
            <div className="h-[43.9px] w-[356.8px] relative rounded-3xs bg-field-color-darker hidden max-w-full" />
            <input
              className="w-[70px] [border:none] [outline:none] font-lato text-base bg-[transparent] h-5 relative text-black text-left inline-block z-[3]"
              placeholder="••••••••"
              type="text"
            />
            <div className="h-[20.8px] w-px relative box-border z-[3] border-r-[1px] border-solid border-darkgray-200" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
          <div className="w-[136.1px] relative text-base font-lato text-link text-left inline-block shrink-0 z-[2]">
            Forgot password?
          </div>
        </div>
        <Link to="/upload" className="no-underline cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start max-w-full">
          <div className="h-[43.9px] w-[356.8px] relative max-w-full z-[2]">
            <div
              className="absolute h-full w-full top-[-0.11%] right-[-0.03%] bottom-[0.11%] left-[0.03%] rounded-3xs bg-mediumslateblue-200 cursor-pointer"
              onClick={onButtonPrimaryClick}
            />
          </div>
          <b className="w-[111.9px] relative text-base inline-block font-montserrat text-light-gohan text-center shrink-0 whitespace-nowrap z-[3] ml-[-233px]">
            Sign In
          </b>
        </Link>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[68px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative text-base font-lato text-center z-[1]">
          <span className="text-secondary-text">{`Don’t have an account? `}</span>
          <span className="text-link">Register here</span>
        </div>
      </div>
    </form>
  );
};

export default WhiteButtonGoogle;
