"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Globe, Phone, Mail } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FaBook } from "react-icons/fa";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetUniversitiesQuery } from "@/redux/api";
import {
  setPage,
  setProvince,
  setSearch,
  setSelectedUniversity,
} from "@/redux/feature/filter/filterSlice";

// Define the major type
type MajorType = {
  uuid: string;
  name: string;
  description: string;
  fee_per_year: number;
  duration_years: number;
  degree: string; // Degree type (e.g., "ASSOCIATE", "BACHELOR", etc.)
  faculty?: string; // Make the faculty field optional
};

// Type definition for universities
type UniversityType = {
  uuid: string;
  kh_name: string;
  en_name: string;
  location: string;
  province_name: string;
  popular_major: string;
  logo_url: string;
  cover_image: string | null;
  phone: string;
  lowest_price: number;
  highest_price: number;
  latitude: number;
  longitude: number;
  email: string;
  website: string;
  description: string;
  mission: string;
  majors: MajorType[];
  vision: string;
  faculties: { uuid: string; name: string; description: string }[]; // Faculties
};

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

export default function CardUniversityDetail({
  kh_name,
  en_name,
  location,
  logo_url,
  cover_image,
  phone,
  lowest_price,
  highest_price,
  email,
  website,
  description,
  mission,
  vision,
  majors,
  latitude,
  longitude,
  faculties
}: UniversityType) {
  const [selectedDegree, setSelectedDegree] = useState<string>("BACHELOR"); // Default degree filter
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null); // Faculty filter
  const [filteredMajors, setFilteredMajors] = useState<MajorType[]>(majors);
  const [googleMapEmbedUrl, setGoogleMapEmbedUrl] = useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);
  const { search, province_uuid, page, selectedUniversity } = useAppSelector(
    (state) => state.filter
  );



  // Fetch data (universities and courses)
  useEffect(() => {
    // Filter majors based on selected degree and faculty
    let filtered = majors;

    if (selectedDegree) {
      filtered = filtered.filter((major) => major.degree === selectedDegree);
    }

    if (selectedFaculty) {
      filtered = filtered.filter((major) => major.faculty === selectedFaculty);
    }

    setFilteredMajors(filtered); // Update filtered majors
  }, [selectedDegree, selectedFaculty, majors]); // Re-filter when degree or faculty changes

  // Handle degree change
  const handleDegreeChange = (degree: string) => {
    setSelectedDegree(degree);
  };

  // Handle faculty change
  const handleFacultyChange = (faculty: string) => {
    setSelectedFaculty(faculty);
  };


  useEffect(() => {
    // Generate the Google Maps Embed URL using latitude and longitude
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${latitude},${longitude}`;
    setGoogleMapEmbedUrl(mapUrl); // Set the map URL dynamically based on coordinates
  }, [latitude, longitude]);

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
    <div className="min-h-screen bg-bglight">
      {/* Header */}
      <header className="relative">
        <div className="lg:w-full lg:h-[300px] md:w-full md:h-[200px] w-full h-[100px] overflow-hidden">
          <Image
            src={`http://136.228.158.126:3300/${cover_image}`}
            alt={kh_name}
            width={200}
            height={200}
            unoptimized // This disables Next.js image optimization (optional if needed)
            className="w-full h-full object-cover"
          />
        </div>
        {/* screen laptop and ipad */}
        <div className="hidden md:block lg:block  container mx-auto px-4  relative lg:-mt-12 md:-mt-12 -mt-6">
          <div className="bg-white  bg-opacity-30 lg:w-auto lg:h-[290px] md:w-auto md:h-[230px] w-auto h-[200px] backdrop-blur-lg border rounded-xl lg:p-6 md:p-6 p-3 shadow-sm flex  flex-row md:flex-row items-center lg:gap-6 md:gap-6 gap-2">
            <Image
              src={`http://136.228.158.126:3300/${logo_url}`}
              alt={kh_name}
              width={200}
              height={200}
              unoptimized // This disables Next.js image optimization (optional if needed)
              className=" object-contain lg:w-60 lg:h-60 md:w-32 md:h-32 w-10 h-10  "
            />
            <div className="text-center md:text-left">
              <h1 className="lg:text-5xl md:text-2xl text-lg font-bold text-textprimary mb-3">
                {kh_name}
              </h1>
              <p className="text-gray-600 lg:text-3xl md:text-xl text-sm mb-2">
                {en_name}
              </p>
              <p className="text-textprimary lg:text-2xl md:text-xl text-sm mb-4">
                {location}
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
                src={`http://136.228.158.126:3300/${logo_url}`}
                alt="ISTAD Logo"
                width={200}
                height={200}
                unoptimized // This disables Next.js image optimization (optional if needed)
                className="lg:w-60 lg:h-60 md:w-32 md:h-32 w-14 h-14 rounded-full lg:border-4 md:border-3 border border-primary"
              />
              <div className="text-center md:text-left">
                <h1 className="lg:text-5xl md:text-2xl text-lg font-bold text-textprimary mb-3">
                  {kh_name}
                </h1>
              </div>
            </div>
            <div className="flex justify-between  items-center">
              <p className="text-textprimary lg:text-2xl md:text-xl text-sm mb-4">
                {location}
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
              <div className="aspect-[4/3] rounded-xl bg-gray-100 mb-4">
                {/* Map placeholder */}
                <div className="w-full h-full  flex items-center justify-center text-gray-400">
                {googleMapEmbedUrl && (
                    <iframe
                      src={googleMapEmbedUrl}
                      width="600"
                      height="450"
                      loading="lazy"
                      allowFullScreen
                      className="w-full h-full "
                    ></iframe>
                  )}
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="lg:w-6 lg:h-6 md:w-10 md:h-10 w-8 h-8 text-gray-400" />
                  <div className=" lg:text-[16px] md:text-sm text-[16px] text-textprimary">
                    {location}
                  </div>
                </div>
                <div className="flex items-center gap-2 ">
                  <Globe className="lg:w-5 lg:h-5 md:w-4 md:h-4 w-5 h-5 text-gray-400 lg:text-[16px] md:text-[16px] text-[16px]" />
                  <div className="lg:text-[16px] md:text-sm text-[16px] text-primary ">
                    {website}
                  </div>
                   </div>
                <div className="flex items-center gap-2">
                  <Phone className="lg:w-5 lg:h-5 md:w-4 md:h-4 w-5 h-5 text-gray-400  lg:text-[16px] md:text-[16px] text-[16px]" />
                  <span className="lg:text-[16px] md:text-sm text-[16px] text-textprimary">
                    {phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="lg:w-5 lg:h-5 md:w-4 md:h-4 w-5 h-5 text-gray-400" />
                  <span className="lg:text-[16px] md:text-sm text-[16px] text-textprimary">
                    {email}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-primary mb-4">បេសកកម្ម</h2>
              <div className="space-y-2 text-md text-gray-600">
                <p>{mission}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-primary mb-4">
                ចក្ខុវិស័យ
              </h2>
              <div className="space-y-2 text-md text-gray-600">
                <p>{vision}</p>
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
                <p>{description}</p>
              </div>
            </CardContent>
          </Card>
          <div className="bg-white lg:p-6 md:p-4 p-3  rounded-xl shadow-sm mt-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="lg:text-2xl md:text-xl text-xl font-bold text-textprimary">
                ជំនាញសិក្សា
              </h2>
              <span className="text-orange-500 font-medium">
                តម្លៃសិក្សា៖ {lowest_price}$-{highest_price}$
              </span>
            </div>

            <div className="relative ">
            <button
                  onClick={() => handleDegreeChange("BACHELOR")}
                  className={`block px-4 py-2 w-full text-left ${selectedDegree === "BACHELOR" ? "bg-green-100" : ""}`}
                >
                  BACHELOR
                </button>
                <button
                  onClick={() => handleDegreeChange("ASSOCIATE")}
                  className={`block px-4 py-2 w-full text-left ${selectedDegree === "ASSOCIATE" ? "bg-green-100" : ""}`}
                >
                  ASSOCIATE
                </button>

                
            </div>
          </div>
           {/* Main Content - Courses */}
        <div className="md:col-span-2">
          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-textprimary mb-4">Courses</h2>
              {filteredMajors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 md:gap-2 gap-2">
                  {filteredMajors.map((course, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-4">
                      <h3 className="text-lg font-semibold text-textprimary mb-2">{course.name}</h3>
                      <p className="text-md text-gray-600 mb-1">{course.description}</p>
                      <p className="text-md text-gray-600 mb-1">Fee per year: ${course.fee_per_year}</p>
                      <p className="text-md text-gray-600">Duration: {course.duration_years} years</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No courses found for selected degree and faculty.</p>
              )}
            </CardContent>
          </Card>
          </div>
          </div>
          </main>
    </div>
  );
}