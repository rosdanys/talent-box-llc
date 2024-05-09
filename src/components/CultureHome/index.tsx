import Image from "next/image";

export default function CultureHome (){
  return (
    <section className="py-14 bg-dark-700 " data-aos="fade-in">
    <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
                <Image src="/images/culture/culture_pic.jpg" className="md:max-w-lg sm:rounded-lg" alt=""
                width={774}
                height={400}
                 />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <p className="text-white text-3xl font-semibold sm:text-4xl">
                    Culture
                </p>
               
                <p className="mt-3 text-body-color dark:text-dark-6">
                {`At Talent Box LLC, we're dedicated to creating an inclusive and innovative environment where diversity thrives as the catalyst for success. Built on respect, empathy, and collaboration, our culture fosters continuous growth and development for every team member. With transparency and integrity as our cornerstones, we prioritize ethical standards in all interactions, building trust with clients and candidates alike. As partners in their success stories, we're passionate about making meaningful connections and driving positive change in Talent Acquisition. Join us in reshaping the future, where everyone's potential is valued and unleashed.`}
                </p>
                <a href="/culture" className="inline-flex gap-x-1 items-center text-primary hover:text-btn-hover-dark duration-150 font-medium">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}