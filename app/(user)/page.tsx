"use client";
import Image from "next/image";
import Link from "next/link";

import { BiRightArrowAlt } from "react-icons/bi";
import TeamProfilesHomePage from "@//components/ui/TeamProfilesHomePaage";
import NewsEventHomePage from "@/components/ui/NewsEventHomePage";
import About_us_homepage from "@/components/ui/About_us_homepage";
import Feedback from "@/components/ui/Feedback";
import { useAppSelector } from "@/redux/hooks";
import { useGetPopularSchoolsQuery } from "@/redux/service/university";
import CardUniversity from "@/components/UniversityComponent/CardUniversity";
import { useRouter } from "next/navigation";

// Type definition for universities
type UniversityType = {
  uuid: string;
  kh_name: string;
  en_name: string;
  location: string;
  province_name: string;
  popular_major: string;
  logo_url: string | null; // Handle null value
};
// Define the types for the props
interface FeatureCardProps {
  image: string; // Path to the image
  title: string; // Title of the feature
  description: string; // Description of the feature
}

export default function Page() {
  const router = useRouter();


  const { search, province_uuid, page } = useAppSelector(
    (state) => state.filter
  ); // Ensure you have selectedUniversity in Redux

  const { data } = useGetPopularSchoolsQuery({
    search,
    province_uuid,
    page,
  });
  const handleCardClick = (id: string) => {
    router.push(`/university/${id}`);
  };
  return (
    <div className="w-full h-auto bg-white ">
      {/* Hero Section */}
      <section className="relative mt-10">
        {/* Text Content */}
        <div className="flex justify-center ">
          <div className="container mx-auto px-4 pt-10 md:pt-16 lg:pt-24 text-center ">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold lg:mb-6 md:mb-4 mb-0">
              <span className="text-emerald-500">ស្វាគមន៍មកកាន់</span>
              <span className="text-orange-400">សាកលវិទ្យាល័យ</span>
            </h1>
            <p className="lg:max-w-5xl md:max-w-2xl max-w-4xl mx-auto text-textprimary lg:text-2xl md:text-2xl text-md m-3">
              នៅទីនេះ អ្នកអាចស្វែងរកព័ត៌មានលម្អិតអំពីសកលវិទ្យាល័យនានា
              និងជម្រើសដែលល្អបំផុតសម្រាប់សិក្សា។ ថែមទាំង ការងារ
              ព័ត៌មានអាហារូបករណ៍ របទៅនឹងចំណង់ចំណូលចិត្ត
              ចំណុចខ្លាំងនិងគោលដៅអាជីពនាពេលអនាគតរបស់អ្នក។
            </p>

            <Link href="/university">
              <button className="bg-emerald-500 text-white px-6 py-2 md:px-8 md:py-3 lg:px-8 lg:py-3 rounded-xl text-md md:text-lg lg:text-lg hover:bg-emerald-600 transition-colors">
                ចាប់ផ្តើម
              </button>
            </Link>
          </div>
        </div>
        {/* Background Image */}
        <div>
          <Image
            src="/assets/background-home-page.png"
            alt="Background Home Page"
            width={200}
            height={200}
            className="object-cover w-full h-[50%]"
          />
        </div>
      </section>

      {/* Who is Norm Plov for?   */}

      <section className="max-w-7xl mx-auto my-6">
        <div className="container px-4 lg:py-12 md:py-12 py-3">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center lg:mb-12 md:m-12 mb-4 text-textprimary">
            តើ<span className="text-emerald-500">នាំផ្លូវ</span>សម្រាប់អ្នកណា?
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-6 gap-0">
            {/* Feature 1: Student */}
            <FeatureCard
              image="/assets/feature-01.png"
              title="សិស្សវិទ្យាល័យ"
              description="សិស្សវិទ្យាល័យអាចស្វែងយល់ពីចំណង់ចំណូលចិត្តរបស់ខ្លួននិងមុខវិជ្ជាដែលខ្លួនចូលចិត្ត"
            />

            {/* Feature 2: Undergraduate */}
            <FeatureCard
              image="/assets/feature-02.png"
              title="សិស្សសកលវិទ្យាល័យ"
              description="សិស្សសកលវិទ្យាល័យដែលមានអារម្មណ៍ថាកំពុងជ្រើសរើសជំនាញខុស"
            />

            {/* Feature 3: Business Professional */}
            <FeatureCard
              image="/assets/feature-03.png"
              title="បុគ្គលិកកំពុងធ្វើការងារ"
              description="បុគ្គលិកដែលមានបំណងចង់ផ្លាស់ប្តូរការងារ ដែលមិនច្បាស់នឹងជំនាញដែលខ្លួនកំពុងធ្វើ"
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="flex   justify-center mb-2 lg:p-10 md:p-10 p-4">
        <div className="max-w-7xl mx-auto my-4 md:my-6">
          <div className="mt-8  border-l-8 border-textprimary">
            <div className="lg:text-4xl  md:text-4xl text-2xl font-bold mt-2 mb-1 ml-4 text-textprimary">
              ព័ត៌មាន និង ព្រឹត្តិការណ៍
            </div>
          </div>
          <div className="mt-6 mb-8">
            <div className="text-lg md:text-xl text-textprimary leading-relaxed">
              ស្វែងរកព័ត៌មានអាហារូបករណ៍ សិក្ខាសាលា
              និងពិព័រណ៍ការងារថ្មីៗជាមួយអនុវត្តន៍ចុងក្រោយ
              សម្រាប់ការបង្កើតនូវឱកាសសិក្សា និងបន្ដអភិវឌ្ឍន៍ការងារអនាគត។
              គ្រប់ព័ត៌មានចាំបាច់ដើម្បីជំរុញការស្វែងយល់ ការសិក្សា
              និងការផ្សាយបន្ដនូវជំនាញវិជ្ជាជីវៈរបស់និស្សិត, មានផ្សាយនៅទីនេះ!
            </div>
          </div>

          <NewsEventHomePage />
          <div className=" flex justify-end items-center mt-6 ">
            <div className="text-md md:text-xl lg:text-xl text-primary  font-kontumruy ">
              ផ្សេងៗទៀត
            </div>
            <div className=" ">
              <BiRightArrowAlt className="text-2xl ml-2 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* University card Section */}
      <section className=" lg:p-10 md:p-10 p-4">
        <div className="max-w-7xl mx-auto my-4 md:my-6 flex lg:justify-between md:justify-between justify-center items-center">
          <h1 className="text-2xl  w-[90%] lg:w-full md:w-full md:text-4xl lg:text-5xl font-bold lg:text-start md:text-center  text-center mb-2 text-textprimary">
            សាកលវិទ្យាល័យដែលមានប្រជាប្រិយភាព
          </h1>
          <Link
            href="/"
            className="text-xl  lg:flex md:hidden hidden justify-center items-center font-bold text-center mb-2 text-textprimary"
          >
            <div className="flex">
              <div className="text-primary w-32  ">ព័ត៌មានបន្ថែម</div>
              <BiRightArrowAlt className="text-3xl  text-primary" />
            </div>
          </Link>
        </div>
        <div className="max-w-7xl mx-auto my-4 md:my-6 mt-10  grid w-auto auto-rows-fr grid-cols-1 lg:gap-8 md:gap-8 gap-4 sm:mt-12 lg:grid-cols-2 md:grid-cols-1">
          {data?.payload?.map((university: UniversityType, index: number) => (
            <CardUniversity
              key={index}
              kh_name={university.kh_name}
              en_name={university.en_name}
              location={university.location}
              popular_major={university.popular_major}
              logo_url={university.logo_url || "/assets/default.png"}
              onClick={() => handleCardClick(university.uuid)}
            />
          ))}
          <Link
            href=""
            className="text-xl  lg:hidden md:flex hidden justify-end mt-6 items-center font-bold text-center text-textprimary"
          >
            <div className="text-primary">ព័ត៌មានបន្ថែម</div>
            <BiRightArrowAlt className="text-3xl ml-2 text-primary" />
          </Link>
        </div>
      </section>
      {/* Team Profiles card Section */}
      <section>
        <TeamProfilesHomePage />
      </section>
      {/* Process card Section */}
      <section>
        <About_us_homepage />
      </section>
      {/* Feedback Section */}
      <section className="flex justify-center mt-14 mb-14 ">
        <Feedback />
      </section>
    </div>
  );
}

// Reusable FeatureCard Component
function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-lg ">
      {/* Fixed-size Image Container */}
      <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]  mb-2">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="lg:p-4 md:p-0 p-2 rounded-lg lg:w-90 md:w-78 w-90">
        <h2 className="lg:text-3xl  md:text-2xl text-xl font-semibold mb-3 text-textprimary">
          {title}
        </h2>
        <p className="text-gray-600 lg:text-xl md:text-xl text-md leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
