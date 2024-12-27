import Link from "next/link";
import Image from "next/image";


const blogPosts = [
  {
    id: "1",
    title: "2024 ASEAN Scholarship for Cambodia ប្រទេសសិង្ហបុរី ឆ្នាំសិក្សា២០២៣",
    desc: "Anakut Digital Solutions",
    image: "/assets/new/new-01.png",
    date: "May 10, 2023",
    author: "Pov Narong",
    authorImg:"/assets/new/author-01.png",
    link: "/tech-blog/post1",
  },
  {
    id: "2",
    title:
      "ឱកាសទទួលបានអាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោ ចំនួន ២០០កន្លែង",
    desc: "Cambodia Tech Ventures",
    image:
      "/assets/new/author-02.png",
    date: "October 24, 2024",
    author: "Sokunpanha Chann",
    authorImg:"/assets/new/new-02.png",
    link: "/tech-blog/post2",
  },
  {
    id: "3",
    title: "ឱកាសអាហារូបករណ៍​សិក្សាថ្នាក់បរិញ្ញាបត្រនៅសាកលវិទ្យាល័យជាតិគ្រប់គ្រង",
    desc: "Future AI Labs",
    image:
      "/assets/new/new-03.png",
    date: "October 17, 2024",
    author: "Sokunpanha Chann",
    authorImg:"/assets/new/new-02.png",
    link: "/tech-blog/post3",
  },
  {
    id: "4",
    title: "ឱកាសអាហារូបករណ៍​សិក្សាថ្នាក់បរិញ្ញាបត្រនៅសាកលវិទ្យាល័យជាតិគ្រប់គ្រង",
    desc: "Future AI Labs",
    image:
      "/assets/new/new-03.png",
    date: "October 17, 2024",
    author: "Sokunpanha Chann",
    authorImg:"/assets/new/new-02.png",
    link: "/tech-blog/post3",
  },
  {
    id: "4",
    title: "ឱកាសអាហារូបករណ៍​សិក្សាថ្នាក់បរិញ្ញាបត្រនៅសាកលវិទ្យាល័យជាតិគ្រប់គ្រង",
    desc: "Future AI Labs",
    image:
      "/assets/new/new-03.png",
    date: "October 17, 2024",
    author: "Sokunpanha Chann",
    authorImg:"/assets/new/new-02.png",
    link: "/tech-blog/post3",
  },
  {
    id: "4",
    title: "ឱកាសអាហារូបករណ៍​សិក្សាថ្នាក់បរិញ្ញាបត្រនៅសាកលវិទ្យាល័យជាតិគ្រប់គ្រង",
    desc: "Future AI Labs",
    image:
      "/assets/new/new-03.png",
    date: "October 17, 2024",
    author: "Sokunpanha Chann",
    authorImg:"/assets/new/new-02.png",
    link: "/tech-blog/post3",
  },
  // Add more blog posts here...
];

export default function NewsEventHomePage() {
  return (
    <div className="w-full dark:bg-gray-800">
      <div className="mx-auto w-full ">
        <div className="mx-auto mt-8 grid w-full auto-rows-fr grid-cols-1 lg:gap-8 md:gap-6 gap-5 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-4 pt-80 sm:pt-48 lg:pt-80 hover:scale-105"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={200}
                height={200}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              <div className="  bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-2 mt-4 z-10">
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.date} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <div className="flex gap-x-2.5">
                      <Image 
                        width={200}
                        height={200}
                        src={post.authorImg as string}
                        alt={post.author}
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={post.link} className="relative inline-block">
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
