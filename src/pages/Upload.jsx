import { useState, useRef } from "react";
import Menu1 from "../components/Menu1";
import Papa from "papaparse";
import { Select, Option } from "@material-tailwind/react";

const Upload = () => {
  // const [uploadDisabled, setUploadDisabled] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const [dynamicContents, setDynamicContents] = useState([]);

  const handleTagClick = (tag, index) => {
    // Concatenate the clicked tag with the existing dynamic content for the specific value
    const newContent = (dynamicContents[index] || "") + tag.trim() + ",";

    // Update the state variable with the new content for the specific value
    setDynamicContents((prevContents) => {
      const updatedContents = [...prevContents];
      updatedContents[index] = newContent;
      return updatedContents;
    });
  };

  const changeHandler = (event) => {
    // Check if files are present in the event
    if (event.target.files && event.target.files.length > 0) {
      const fileName = event.target.files[0].name;
      setSelectedFileName(fileName);
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const rowsArray = [];
          const valuesArray = [];

          if (results.errors.length > 0) {
            // Handle parsing errors
            setError(results.errors[0].message);
          } else {
            results.data.forEach((d) => {
              rowsArray.push(Object.keys(d));
              valuesArray.push(Object.values(d));
            });

            setParsedData(results.data);
            setTableRows(rowsArray[0]);
            setValues(valuesArray);
            // setError(null); // Clear any previous errors
          }
        },
      });
      setUploadDisabled(true); // Disable the button after changeHandler is called
      setButtonClicked(true);
    }
    // setUploadDisabled(values.length > 0)
  };

  console.log(values);
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = () => {
    // Use the selected file for further processing
    console.log("Selected File:", selectedFileName);

    // Reset the selected file name after processing if needed
    setSelectedFileName(null);

    // Update the state based on the condition
  };

  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border gap-[30px] tracking-[normal] mq750:gap-[15px] mq1050:pl-[30px] mq1050:box-border">
      <div className="h-[32.9px] w-[197.6px] relative hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-light-gohan hidden" />
      </div>
      <div className="w-[218px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border mq1050:hidden">
        <div className="self-stretch h-[1025px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
          <Menu1 />
        </div>
      </div>
      <section className="flex-1 flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border max-w-[calc(100%_-_248px)] text-left text-5xl text-black font-paragraph-ui-type-text-2xl-s mq750:pt-8 mq750:box-border mq1050:max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[137px] max-w-full mq750:gap-[34px] mq450:gap-[17px] mq1125:gap-[68px]">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[34px] max-w-full mq750:gap-[17px]">
            <div className="flex-1 flex flex-col items-start justify-center min-w-[684px] max-w-full z-[1] mq750:min-w-full">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                    Upload CSV
                  </h3>
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
          <div className="w-[622px] flex flex-row items-start justify-start py-0 pr-[26px] pl-0 box-border max-w-full text-center text-base text-light-trunks">
            <div className="flex-1 rounded-lg bg-light-gohan flex flex-col items-center justify-start p-4 box-border gap-[21px] max-w-full">
              <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-start pt-[98px] pb-[84px] pr-5 pl-[21px] gap-[16px] max-w-full z-[1] border-[1px] border-dashed border-light-beerus-hover">
                <img
                  className="w-9 h-9 relative"
                  loading="eager"
                  alt=""
                  src="/frame-76821.svg"
                />
                <div className="relative leading-[24px]">
                  {selectedFileName ? (
                    selectedFileName
                  ) : (
                    <>
                      <span>{`Drop your excel sheet here or `}</span>
                      <span
                        className="cursor-pointer text-mediumslateblue-200"
                        onClick={handleUploadClick}
                      >
                        Browse
                      </span>
                    </>
                  )}

                  <input
                    ref={fileInputRef}
                    hidden
                    type="file"
                    name="file"
                    accept=".csv"
                    onChange={changeHandler}
                  />
                </div>
                <div className="w-[564px] h-[258px] relative rounded-lg box-border hidden max-w-full border-[1px] border-dashed border-light-beerus-hover" />
                <div className="w-[464px] hidden max-w-full" />
              </div>
              <button
                type="submit"
                className={`cursor-pointer [border:none] py-4 px-5 bg-mediumslateblue-200 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center gap-[8px] hover:bg-mediumslateblue-100 ${
                  uploadDisabled || buttonClicked
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={uploadDisabled || buttonClicked}
              >
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/icon.svg"
                />
                <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-left">
                  Upload
                </div>
              </button>
            </div>
          </div>

          {values.length ? (
            <div className="w-[1076px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full text-left text-5xl text-black font-paragraph-ui-type-text-2xl-s">
              <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-h-[521px] max-w-full mq750:gap-[23px]">
                <h2 className="m-0 w-[133px] relative text-inherit leading-[32px] font-semibold font-inherit flex items-center mq450:text-lgi mq450:leading-[26px]">
                  Uploads
                </h2>
                <form className="m-0 self-stretch rounded-lg bg-background flex flex-col items-center justify-start pt-3.5 pb-0 pr-[15px] pl-4 box-border gap-[13px] max-w-full mq750:h-auto">
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

                  {values.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border min-h-[85px] max-w-full shrink-0"
                      >
                        <div className="flex-1 rounded-lg bg-light-gohan flex flex-row flex-wrap items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px] max-w-full mq750:gap-[18px] mq1050:gap-[35px]">
                          <div className="h-6 w-6 relative hidden">
                            <div className="absolute h-[66.67%] w-[66.67%] top-[83.33%] right-[16.67%] bottom-[-50%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start min-w-[421px] gap-[20px] max-w-full mq750:flex-wrap mq750:min-w-full">
                            <div className="w-10 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                              {value[0]}
                            </div>
                            <div className="w-60 flex flex-col items-start justify-start py-0  pl-0">
                              <a
                                className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                                href="https://www.google.com"
                                target="_blank"
                              >
                                {value[1]}
                              </a>
                            </div>
                            <div className="w-40 flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                              <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                                {value[2]}
                              </div>
                            </div>

                            <div  class="dropdown">
                              <a
                                className="no-underline relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Select Tags
                              </a>
                              <ul className="dropdown-menu">
                                {value[3].split(",").map((tag, tagIndex) => (
                                  <li key={tagIndex}>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      onClick={() => handleTagClick(tag, index)}
                                    >
                                      {tag.trim()}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
                            {(value[4] + dynamicContents[index])
                              .split(",")
                              .filter(
                                (tag) =>
                                  tag.trim() !== "" &&
                                  tag.trim() !== "undefined"
                              ) // Remove empty and 'undefined' tags
                              .map((tag, tagIndex) => (
                                <button
                                  key={tagIndex}
                                  className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100"
                                >
                                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                                    {tag.trim()}
                                  </div>
                                  
                                </button>
                              ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* Table body */}
                </form>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default Upload;
