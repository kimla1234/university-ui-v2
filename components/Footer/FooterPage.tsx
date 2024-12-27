import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
export default function FooterHomePage() {
  return (
    <div>
      <div className=" bg-slate-50 w-full pt-9 flex border-t  justify-center">
        <div className="lg:w-[80%] md:w-[90%] w-[90%] ">
          <div className="flex flex-col justify-between  md:flex-row ">
            <div className="lg:w-[300px] md:w-[216px] w-[300px]  ">
              <p className="text-[18px] font-normal text-textprimary">
                <h1 className="text-textprimary font-semibold lg:text-2xl md:text-xl">មាតិការ</h1>
              </p>
              <ul>
                <li className="mt-[15px]">
                  <a
                    className="text-deutziawhite text-textprimary  hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/"
                  >
                    ទំព័រដើម
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px]">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/our-tutors"
                  >
                    សាកលវិទ្យាល័យ
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px]">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/become-a-tutor"
                  >
                    អាហារូបករណ៍
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px]">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/plans-and-pricing"
                  >
                    ព័ត៌មាន
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px] mb-4">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/terms-and-conditions"
                  >
                    អំពីយើង
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-[316px] md:w-[400px] w-[316px] ">
              <p className="text-[16px] font-medium text-textprimary">
                <h1 className="text-textprimary font-semibold  lg:text-2xl md:text-xl">សាកលវិទ្យាល័យល្បីៗ</h1>
              </p>
              <ul>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px]">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/"
                  >
                    សាកលវិទ្យាល័យភូមិន្ទភ្នំពពេញ
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px]">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/our-tutors"
                  >
                    វិទ្យាស្ថានចេ្ចកវិទ្យាកម្ពុជា
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px]">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/become-a-tutor"
                  >
                    សាកលវិទ្យាល័យភូមិន្ទវិចិត្រសិល្បៈ
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px]">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/plans-and-pricing"
                  >
                    សាកលវិទ្យាល័យន័រតុន
                  </a>
                </li>
                <li className="lg:mt-[15px] md:mt-[10px] mt-[10px] mb-4">
                  <a
                    className="text-deutziawhite text-textprimary hover:text-deutziawhite/80 font-inter text-[16px] font-normal hover:font-semibold"
                    href="/terms-and-conditions"
                  >
                    សាកលវិទ្យាល័យភូមិន្ទនីតិសាស្ត្រ
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-[316px] md:w-[400px] ">
              <div className="text-textprimary  font-bold lg:text-2xl md:text-xl">ព័ត៌មានទំនាក់ទំនង</div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px]  w-[38px] items-center justify-center rounded-[75%]">
                <MdOutlinePhoneInTalk className="w-6 h-6 text-green-600"  />
                </div>
                <div className="ml-[18px]">
                  <a
                    href="tel:+911800123444"
                    className="font-Inter text-[16px] font-medium text-textprimary"
                  >
                    +91 1800123444
                  </a>
                  <p className="font-Inter text-[16px] font-medium text-textprimary">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="lg:mt-[23px] md:mt-[10px] mt-[10px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <MdOutlineMarkEmailUnread className="w-6 h-6 text-green-600"  />
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[16px] font-medium text-textprimary"
                  >
                    help@lorem.com
                  </a>
                  <p className="font-Inter text-[16px] font-medium text-textprimary">
                    Support Email
                  </p>
                </div>
              </div>
              <div className="lg:mt-[23px] md:mt-[10px] mt-[10px]  flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <RiMapPinLine className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[16px] font-medium text-textprimary"
                  >
                    Sub Nerul, Mumbia, India, 
                  </a>
                  <p className="font-Inter text-[16px] font-medium text-textprimary">
                  123456 Address
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:w-[316px] lg:block md:hidden hidden w-full flex-col justify-between text-textprimary sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="mt-6 flex flex-col gap-4 sm:mt-0">
                <p className="text-deutziawhite font-bold lg:text-2xl md:text-xl">
                  ទាញយកកម្មវិធី
                </p>
                <div className="flex gap-4 sm:flex-col">
                  <a target="_blank" href="#">
                    <button
                      type="button"
                      className="flex bg-white border border-gray-200 items-center justify-center w-48 mt-3 text-slate-950 h-14 rounded-xl"
                    >
                      <div className="mr-3">
                        <svg viewBox="0 0 384 512" width="30">
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs ">Download on the</div>
                        <div className="-mt-1 font-sans text-xl font-semibold">
                          App Store
                        </div>
                      </div>
                    </button>
                  </a>
                  <a target="_blank" href="#">
                    <button
                      type="button"
                      className="flex items-center border border-gray-200 justify-center w-48 mt-3 text-slate-950 bg-white rounded-lg h-14"
                    >
                      <div className="mr-3">
                        <svg viewBox="30 336.7 120.9 129.2" width="30">
                          <path
                            fill="#FFD400"
                            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                          ></path>
                          <path
                            fill="#FF3333"
                            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                          ></path>
                          <path
                            fill="#48FF48"
                            d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                          ></path>
                          <path
                            fill="#3BCCFF"
                            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs">GET IT ON</div>
                        <div className="-mt-1 font-sans text-xl font-semibold">
                          Google Play
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className=" text-2xl mt-4 mb-2" />
          <div className="flex justify-center items-center mb-2 text-[16px]">
          <div className=" text-textprimary text-[16px]">Copyright © 2024 សាកលវិទ្យាល័យ</div>
          </div> 
        </div>
      </div>
    </div>
  );
}
