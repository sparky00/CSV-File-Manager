const DataTable = () => {
  return (
    <div className="w-[1076px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full text-left text-5xl text-black font-paragraph-ui-type-text-2xl-s">
      <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-h-[521px] max-w-full mq750:gap-[23px]">
        <h2 className="m-0 w-[133px] relative text-inherit leading-[32px] font-semibold font-inherit flex items-center mq450:text-lgi mq450:leading-[26px]">
          Uploads
        </h2>
        <form className="m-0 self-stretch h-[443px] rounded-lg bg-background flex flex-col items-center justify-start pt-3.5 pb-0 pr-[15px] pl-4 box-border gap-[13px] max-w-full mq750:h-auto">
          <div className="h-[18px] rounded-md overflow-hidden shrink-0 hidden flex-row items-center justify-start py-[3px] pr-1.5 pl-[3px] box-border">
            <img className="h-[9px] w-[9px] relative" alt="" />
          </div>
          {/* Table head */}
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full shrink-0">
            <div className="w-[808px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
              <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                Sl No.
              </div>
              <div className="w-[145px] flex flex-col items-start justify-start">
                <div className="w-[43px] relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                  Links
                </div>
              </div>
              <div className="w-[110px] flex flex-col items-start justify-start">
                <div className="w-[47px] relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                  Prefix
                </div>
              </div>
              <div className="w-[137px] flex flex-col items-start justify-start">
                <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                  Add Tags
                </div>
              </div>
              <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                Selected Tags
              </div>
            </div>
          </div>
           {/* Table head */}

            {/* Table body */}
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border min-h-[85px] max-w-full shrink-0">
            <div className="flex-1 rounded-lg bg-light-gohan flex flex-row flex-wrap items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px] max-w-full mq750:gap-[18px] mq1050:gap-[35px]">
              <div className="h-6 w-6 relative hidden">
                <div className="absolute h-[66.67%] w-[66.67%] top-[83.33%] right-[16.67%] bottom-[-50%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
              </div>
              <div className="flex-1 flex flex-row items-center justify-between min-w-[421px] gap-[20px] max-w-full mq750:flex-wrap mq750:min-w-full">
                <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                  01
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                  <a
                    className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                    href="https://www.google.com"
                    target="_blank"
                  >
                    www.google.com
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                  <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                    prefixsample
                  </div>
                </div>
                <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                  <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                    Select Tags
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                    <img
                      className="h-4 w-4 relative"
                      alt=""
                      src="/controls.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
                <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                    TAG 1
                  </div>
                  <img
                    className="h-4 w-4 relative min-h-[16px]"
                    alt=""
                    src="/icon-2.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                    TAG 2
                  </div>
                  <img
                    className="h-4 w-4 relative min-h-[16px]"
                    alt=""
                    src="/icon-2.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                    TAG 3
                  </div>
                  <img
                    className="h-4 w-4 relative min-h-[16px]"
                    alt=""
                    src="/icon-2.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                    TAG 4
                  </div>
                  <img
                    className="h-4 w-4 relative min-h-[16px]"
                    alt=""
                    src="/icon-2.svg"
                  />
                </button>
                <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                    your label
                  </div>
                  <img className="h-4 w-4 relative" alt="" />
                </div>
                <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                    your label
                  </div>
                  <img className="h-4 w-4 relative" alt="" />
                </div>
              </div>
            </div>
          </div>
           {/* Table body */}
        </form>
      </div>
    </div>
  );
};

export default DataTable;
