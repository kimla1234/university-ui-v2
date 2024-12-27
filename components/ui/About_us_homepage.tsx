

export default function About_us_homepage() {
  return (
    <div className="mt-10 ">
      <section className="relative min-h-[400px] w-full">
      <div 
        className="absolute opacity-30 bg-green-500 w-full h-[400px] inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://strapi.rupp.support/uploads/home_about_us_5caf6e3b48.jpg')",
        }}
      />
      <div className="absolute inset-0 w-full h-[400px] bg-green-800/50 " />
      <div className="relative  flex min-h-[400px] w-[100%]   flex-col  items-center justify-center px-4 text-center">
        <div className="lg:max-w-3xl md:max-w-[92%] max-w-3xl space-y-6  ">
          <h2 className="lg:text-4xl  text-2xl font-bold text-white sm:text-5xl md:text-6xl">
            About Us
          </h2>
          <div className="mx-auto  lg:text-2xl md:text-2xl text-lg  text-center text-white/90 ">
          នៅសាកលវិទ្យាល័យរបស់យើង អ្នកអាចស្វែងរកព័ត៌មានលម្អិតអំពីសាកលវិទ្យាល័យនានា ការសិក្សានិងជម្រើសដែលល្អបំផុតសម្រាប់ការសិក្សារបស់អ្នក។ យើងមានគោលបំណងណែនាំអ្នកឲ្យឃើញផ្លូវនៃការសិក្សានិងការងារ ដោយផ្តល់ឱកាសសម្រាប់ធ្វើការស្វែងយល់អំពីធនធានដែលមានតំលៃរួមមាន ៖ ឱកាសការសិក្សា ឱកាសការងារ ព័ត៌មានអាហារូបករណ៍ ។
          </div>
          <button
            className=" "
          >
            <div className="rounded-xl  text-xl shadow lg:mt-4 md:mt-4 mt-0 ">
              <a
                className="w-full  text-white flex items-center justify-center px-8 py-3 border border-slate-500 text-base leading-6 font-medium rounded-xl  bg-primary hover:bg-blue-600 focus:ring ring-offset-2 ring-pink-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                href=""
              >
                Learn More
              </a>
            </div>
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}
