import subtract from "../images/subtract.svg"
import iconlyboldcategory from "../images/iconlyboldcategory@2x.png"
import chart from "../images/chart1@2x.png"
import iconlyboldticket from "../images/iconlyboldticket@2x.png"
import iconlybolddocument from "../images/iconlybolddocument@2x.png"
import calendar from "../images/calendar@2x.png"
import iconlyboldnotification from "../images/iconlyboldnotification@2x.png"
import iconlyboldsetting from "../images/iconlyboldsetting@2x.png"
const Menu1 = () => {
  return (
    <nav className="m-0 self-stretch bg-light-gohan flex flex-col items-start justify-start pt-[51px] px-0 pb-[480px] gap-[39px] text-left text-base text-text font-nunito mq1050:pt-[33px] mq1050:pb-[312px] mq1050:box-border mq450:pt-[21px] mq450:pb-[203px] mq450:box-border">
      <div className="self-stretch relative bg-light-gohan h-[1047px] hidden" />
      <div className="self-stretch h-[53px] flex flex-row items-start justify-start py-0 pr-[55px] pl-14 box-border text-5xl">
        <div className="flex flex-row items-center justify-start gap-[15px]">
          <div className="h-[42px] w-[42px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full hidden z-[1]"
              alt=""
              src={subtract}
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
              loading="eager"
              alt=""
              src={subtract}
            />
          </div>
          <h3 className="m-0 h-[33px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-lgi">
            Base
          </h3>
        </div>
      </div>
      <div className="w-[146px] flex flex-col items-end justify-start gap-[24px] text-darkgray-100">
        <div className="flex flex-row items-center justify-start py-0 pr-0 pl-5 gap-[14px]">
          <img
            className="h-6 w-6 relative object-cover min-h-[24px] z-[1]"
            loading="eager"
            alt=""
            src={iconlyboldcategory}
          />
          <div className="h-[22px] relative font-semibold inline-block z-[1]">
            Dashboard
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[27px] pl-0 text-mediumslateblue-200">
          <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
            <div className="h-12 flex-1 relative">
              <img
                className="absolute top-[13px] left-[33px] w-5 h-[22px] object-cover z-[1]"
                loading="eager"
                alt=""
                src={chart}
              />
              <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none [background:linear-gradient(90deg,_#aca9ff,_rgba(172,_169,_255,_0))] w-full h-full opacity-[0.2] z-[2]" />
            </div>
            <div className="relative font-semibold z-[1]">Upload</div>
          </div>
        </div>
      </div>
      <div className="h-6 flex flex-row items-start justify-start py-0 px-[31px] box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-6 h-[16.4px] relative object-cover z-[1]"
              loading="eager"
              alt=""
              src={iconlyboldticket}
            />
          </div>
          <div className="relative font-semibold inline-block h-[13px] opacity-[0.5] z-[1]">
            Invoice
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[31px]">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover z-[1]"
            loading="eager"
            alt=""
            src={iconlybolddocument}
          />
          <div className="h-[22px] relative font-semibold inline-block opacity-[0.5] z-[1]">
            Schedule
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[31px]">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover z-[1]"
            loading="eager"
            alt=""
            src={calendar}
          />
          <div className="h-[22px] relative font-semibold inline-block opacity-[0.5] z-[1]">
            Calendar
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[31px]">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover z-[1]"
            loading="eager"
            alt=""
            src={iconlyboldnotification}
          />
          <div className="h-[22px] relative font-semibold inline-block opacity-[0.5] z-[1]">
            Notification
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[31px]">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover z-[1]"
            loading="eager"
            alt=""
            src={iconlyboldsetting}
          />
          <div className="relative font-semibold opacity-[0.5] z-[1]">
            Settings
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu1;
