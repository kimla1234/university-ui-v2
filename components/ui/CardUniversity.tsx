import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function CardUniversity({ limit = 8 }: { limit?: number }) {
  const universities = [
    {
      name: "សាកលវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major : "ព័ត៌មានវិទ្យា",
      logo: "/assets/rupp.png",
      link: "/university-detail",
    },
    {
      name: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា",
      englishName: "Institute of Technology of Cambodia",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major : "វិស្វករ",
      logo: "/assets/itc.png",
      link: "#",
    },
    {
        name: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញវិចិត្រសិល្បៈ",
        englishName: "Royal University of Fine Arts",
        address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
        major : "ស្ថាបត្យកម្ម",
        logo: "/assets/rufa.png",
        link: "#",
      },
      {
        name: "សាកលវិទ្យាល័យអាមេរិកាំងភ្នំពេញ",
        englishName: "American University of Phnom Penh",
        address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
        major : "ព័ត៌មានវិទ្យា",
        logo: "/assets/aupp.png",
        link: "#",
      },
      {
        name: "សកលវិទ្យាល័យកម្ពុជា",
        englishName: "University of Cambodia",
        address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
        major : "ព័ត៌មានវិទ្យា",
        logo: "/assets/uc.png",
        link: "#",
      },
      {
        name: "សាកលវិទ្យាល័យវិទ្យាសាស្ត្រសុខាភិបាល",
        englishName: "University of Health Sciences",
        address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
        major : "វិជ្ជបណ្ឌិត",
        logo: "/assets/uss.png",
        link: "#",
      },
      {
          name: "វិទ្យាស្ថានស៊ីតិក",
          englishName: "SETEC Institute",
          address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
          major : "ឌីហ្សាញ",
          logo: "/assets/setec.png",
          link: "#",
        },
        {
          name: "សាកលវិទ្យាល័យន័រតុន",
          englishName: "Norton University",
          address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
          major : "ស្ថាបត្យកម្ម",
          logo: "/assets/norton.png",
          link: "#",
        },
  ];

  // Limit the displayed universities
  const displayedUniversities = universities.slice(0, limit);

  return (
    <div className="mt-8 mx-auto grid w-auto auto-rows-fr grid-cols-1 lg:gap-8 md:gap-8 gap-4 sm:mt-12 lg:grid-cols-2">
      {displayedUniversities.map((university, index) => (
        <div key={index}>
          <a
            href={university.link}
            className="flex lg:p-6 md:p-6 p-2 h-50 w-full flex-row items-center bg-white border border-gray-100 shadow-sm rounded-2xl  md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover lg:w-40 lg:h-40 md:w-40 md:h-40 w-24 h-24 mr-2 rounded-t-lg md:rounded-none md:rounded-s-lg"
              src={university.logo}
              alt={university.name}
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-between w-full lg:p-2 md:p-2 p-0 leading-normal">
              <h1 className="lg:mb-2 md:mbb-2 mb-1 text-lg md:text-2xl lg:text-2xl  font-bold tracking-tight text-textprimary dark:text-white">
                {university.name}
              </h1>
              <h2 className="lg:mb-2 md:mbb-2 mb-1 text-sm md:text-xl lg:text-xl  text-gray-600">
                {university.englishName}
              </h2>
              <div className="flex space-x-2">
                <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                <p className="lg:mb-2 md:mbb-2 mb-1 text-sm md:text-lg lg:text-lg font-normal text-gray-600 dark:text-gray-400">
                {university.address}
              </p>
              </div>
              <div className="lg:mb-2 md:mbb-2 mb-2 text-sm md:text-lg block md:hidden lg:hidden  lg:text-lg text-textprimary">
                ជំនាញពេញនិយម ៖
                <span className="text-sm md:text-lg lg:text-lg text-secondary">
                  {university.major}
                </span>
              </div>
              <div className="flex justify-between items-center ">
                <div className="text-sm md:text-lg hidden md:flex lg:flex lg:text-lg text-textprimary">
                  ជំនាញពេញនិយម ៖
                  <span className="text-sm md:text-lg lg:text-lg ml-2 text-secondary">
                    {university.major}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-sm md:text-lg lg:text-lg text-primary ">
                    ព័ត៌មានផ្សេងៗ
                  </div>
                  <div>
                    <BiRightArrowAlt className="text-sm md:text-2xl lg:text-2xl ml-2 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
