"use client";
import React from "react";
import { MapPin, Globe, Phone, Mail } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FaBook } from "react-icons/fa";
import Image from "next/image";

// Button component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={`px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${className}`}
    ref={ref}
    {...props}
  />
));
Button.displayName = "Button";

// Card component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={`bg-white rounded-xl shadow-sm ${className}`}
    ref={ref}
    {...props}
  />
));
Card.displayName = "Card";

// CardContent component
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={`lg:p-6 md:p-4 p-3 ${className}`} ref={ref} {...props} />
));
CardContent.displayName = "CardContent";

// Button component
const Button1 = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center bg-green-50 justify-between rounded-md  px-4 py-2 text-sm font-medium text-gray-700   focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
));
Button1.displayName = "Button1";

export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false);
  const courses = [
    { title: "គណិតវិទ្យា", price: "$800 - $1200", duration: "សិក្សា 4 ឆ្នាំ" },
    { title: "រូបវិទ្យា", price: "$800 - $1200", duration: "សិក្សា 4 ឆ្នាំ" },
    { title: "គីមីវិទ្យា", price: "$800 - $1200", duration: "សិក្សា 4 ឆ្នាំ" },
    { title: "ជីវវិទ្យា", price: "$800 - $1200", duration: "សិក្សា 4 ឆ្នាំ" },
    {
      title: "ឌីជីថលវិទ្យា",
      price: "$800 - $1200",
      duration: "សិក្សា 4 ឆ្នាំ",
    },
    {
      title: "បច្ចេកវិទ្យា",
      price: "$800 - $1200",
      duration: "សិក្សា 4 ឆ្នាំ",
    },
  ];

  return (
    <div className="min-h-screen bg-bglight mt-[70px]">
      {/* Header */}
      <header className="relative">
        <div className="lg:w-full lg:h-[300px] md:w-full md:h-[200px] w-full h-[100px] overflow-hidden">
          <Image
            src="/assets/cover-sala.png"
            alt="ISTAD Students"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        {/* screen laptop and ipad */}
        <div className="hidden md:block lg:block  container mx-auto px-4  relative lg:-mt-12 md:-mt-12 -mt-6">
          <div className="bg-white  bg-opacity-30 lg:w-auto lg:h-[290px] md:w-auto md:h-[230px] w-auto h-[200px] backdrop-blur-lg border rounded-xl lg:p-6 md:p-6 p-3 shadow-sm flex  flex-row md:flex-row items-center lg:gap-6 md:gap-6 gap-2">
            <Image
              src="/assets/logo-istad.jpg"
              alt="ISTAD Logo"
              width={200}
            height={200}
              className="lg:w-60 lg:h-60 md:w-32 md:h-32 w-10 h-10 rounded-full lg:border-4 md:border-3 border border-primary"
            />
            <div className="text-center md:text-left">
              <h1 className="lg:text-5xl md:text-2xl text-lg font-bold text-textprimary mb-3">
                មជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាកម្រិតខ្ពស់
              </h1>
              <p className="text-gray-600 lg:text-3xl md:text-xl text-sm mb-2">
                INSTITUTION OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT
              </p>
              <p className="text-textprimary lg:text-2xl md:text-xl text-sm mb-4">
                ផ្ទះលេខ ២៤ ផ្លូវ ៥៦២ សង្កាត់បឹងកក់ ១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ
              </p>
              <button className="bg-primary lg:text-lg md:text-lg text-sm text-white py-2 px-6 rounded-xl hover:bg-secondary transition-all">
                ចូលទៅកាន់គេហទំព័រ
              </button>
            </div>
          </div>
        </div>

        {/* screen phone */}
        <div className="block md:hidden lg:hidden  container mx-auto px-4  relative lg:-mt-12 md:-mt-12 -mt-6">
          <div className="bg-white   bg-opacity-30 lg:w-auto lg:h-[290px] md:w-auto md:h-[230px] w-auto h-[140px] backdrop-blur-lg border rounded-xl lg:p-6 md:p-6 p-3 shadow-sm lg:flex md:flex  flex-row md:flex-row items-center lg:gap-6 md:gap-6 gap-2">
            <div className="flex">
              <Image
                src="/assets/logo-istad.jpg"
                alt="ISTAD Logo"
                width={200}
            height={200}
                className="lg:w-60 lg:h-60 md:w-32 md:h-32 w-14 h-14 rounded-full lg:border-4 md:border-3 border border-primary"
              />
              <div className="text-center md:text-left">
                <h1 className="lg:text-5xl md:text-2xl text-lg font-bold text-textprimary mb-3">
                  មជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាកម្រិតខ្ពស់
                </h1>
              </div>
            </div>
            <div className="flex justify-between  items-center">
              <p className="text-textprimary lg:text-2xl md:text-xl text-sm mb-4">
                ផ្ទះលេខ ២៤ ផ្លូវ ៥៦២ សង្កាត់បឹងកក់ ១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ
              </p>
              <button className="bg-primary lg:text-lg md:text-lg text-sm text-white lg:py-2 lg:px-6 md:py-2 md:px-6 py-2 px-3 rounded-xl hover:bg-secondary transition-all">
               គេហទំព័រ
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4  lg:py-8 md:py-4 py-2.5 grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-4 gap-2.5">
        {/* Sidebar */}
        <div className="md:col-span-1 lg:space-y-3 md:space-y-2 space-y-2.5">
          <Card>
            <CardContent>
              <h2 className="font-bold text-textprimary text-xl mb-4">
                ទីតាំងយើងខ្ញុំ
              </h2>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="lg:w-6 lg:h-6 md:w-10 md:h-10 w-8 h-8 text-gray-400" />
                  <div className=" lg:text-[16px] md:text-sm text-[16px] text-textprimary">
                    ផ្ទះលេខ ២៤ ផ្លូវ ៥៦២ សង្កាត់បឹងកក់ ១ ខណ្ឌទួលគោក
                    រាជធានីភ្នំពេញ
                  </div>
                </div>
                <div className="flex items-center gap-2 ">
                  <Globe className="lg:w-5 lg:h-5 md:w-4 md:h-4 w-5 h-5 text-gray-400 lg:text-[16px] md:text-[16px] text-[16px]" />
                  <div className="lg:text-[16px] md:text-sm text-[16px] text-primary ">
                    https://www.istad.edu.kh/
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="lg:w-5 lg:h-5 md:w-4 md:h-4 w-5 h-5 text-gray-400  lg:text-[16px] md:text-[16px] text-[16px]" />
                  <span className="lg:text-[16px] md:text-sm text-[16px] text-textprimary">
                    (+855)959910
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="lg:w-5 lg:h-5 md:w-4 md:h-4 w-5 h-5 text-gray-400" />
                  <span className="lg:text-[16px] md:text-sm text-[16px] text-textprimary">
                    info.istad@gmail.com
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-primary mb-4">បេសកកម្ម</h2>
              <div className="space-y-2 text-md text-gray-600">
                <p>
                  Provide the latest methodology with high-quality training and
                  mentoring
                </p>
                <p>
                  Build up the capacity and career of IT experts in Cambodia
                </p>
                <p>Consult and connect ISTAD trainees to top IT careers</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-primary mb-4">
                ចក្ខុវិស័យ
              </h2>
              <div className="space-y-2 text-md text-gray-600">
                <p>Advanced IT Institute in Cambodia</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-textprimary mb-4">
                អំពីសាលា
              </h2>
              <div className="space-y-2 lg:text-lg md:text-lg text-md text-gray-600">
                <p>
                  សកលវិទ្យាល័យភូមិន្ទភ្នំពេញត្រួវបានបង្កើតឡើងដំបូងនៅឆ្នាំ១៩៦០
                  អំឡុងពេលដែលប្រទេសកម្ពុជាមានការរីកចម្រើនយ៉ាងខ្លាំងក្លា ដោយមាន
                  ឈ្មោះដើមថា សាកលវិទ្យាល័យភូមិន្ទ។
                  នៅពេលនោះភាសាដែលត្រូវបានគេប្រើប្រាស់ជាភាសាបារាំង។
                  នៅសម័យសាធារណរដ្ឋខ្មែរ សាកល
                  វិទ្យាល័យបានត្រូវប្តូរឈ្មោះជាសាកលវិទ្យាល័យភ្នំពេញ។
                  នៅសម័យខ្មែរក្រហម សាកលវិទ្យាល័យនៅទូទាំងប្រទេស​ត្រូវបានបិទទ្វារ
                  ហើយ
                  សាស្ត្រាចារ្យទាំងអស់បានក្លាយជាមុខសញ្ញានៃការសម្លាប់របស់ពួកខ្មែរក្រហម។
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="bg-white lg:p-6 md:p-4 p-3  rounded-xl shadow-sm mt-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="lg:text-2xl md:text-xl text-xl font-bold text-textprimary">
                ជំនាញសិក្សា
              </h2>
              <span className="text-orange-500 font-medium">
                តម្លៃសិក្សា៖ 350$ - 1200$
              </span>
            </div>

            <div className="relative ">
              <Button1
                onClick={() => setIsOpen(!isOpen)}
                className="w-full border rounded-xl"
              >
                <span>មហាវិទ្យាល័យវិទ្យាសាស្ត្រ</span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isOpen ? "transform rotate-180 " : ""
                  }`}
                />
              </Button1>

              {isOpen && (
                <div className="absolute z-10 mt-1 w-full  bg-green-50 shadow-lg rounded-xl">
                  <div className="py-1">
                    {[
                      "មហាវិទ្យាល័យវិទ្យាសាស្ត្រ",
                      "មហាវិទ្យាល័យវិស្វកម្ម",
                      "មហាវិទ្យាល័យវិទ្យាអប់រំ",
                      "មហាវិទ្យាល័យវិទ្យាភាសា",
                    ].map((item, index) => (
                      <button
                        key={index}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 md:gap-2 gap-2">
            {courses.map((course, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex gap-4 items-center w-full">
                    <FaBook className="lg:w-12 lg:h-8 md:w-6 md:h-10 w-10 h-10 text-primary lg:block md:hidden hidden " />
                    <div className=" w-full">
                      <div className="flex space-x-4">
                        <h3 className=" text-lg mb-2 text-textprimary">
                          {course.title}
                        </h3>
                      </div>
                      <div className="flex  justify-between  ">
                        <div>
                          <p className="text-md text-gray-600 mb-1">
                            {course.price}
                          </p>
                        </div>
                        <div className="flex justify-center items-center space-x-2">
                          <p className="text-md text-gray-600 flex  items-center gap-1">
                            {course.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
