import Image from "next/image";

export default function Executive() {
  return (
    <section className="bg-dark-2 py-14" data-aos="fade-in">
      <div className="mx-auto max-w-screen-xl md:px-8">
        <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 lg:block">
            <Image
              src="/images/noimage.jpg"
              className="sm:rounded-lg md:max-w-full lg:max-w-lg"
              width={774}
              height={600}
              alt=""
            />
          </div>
          <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-3xl font-semibold text-white sm:text-4xl">
              Executive and Professional Search
            </p>
            <span className="mt-3 text-body-color dark:text-dark-6">
              <p className="py-2">{`Our Executive and Professional Search services are dedicated to connecting organizations with top-tier talent that drives success and growth. With a deep understanding of industry dynamics and a vast network of high-caliber candidates, we specialize in identifying and recruiting exceptional executives and professionals who possess the skills, experience, and leadership qualities needed to excel in key roles.`}</p>
              <p className="py-2">{`At Talent Box, we recognize that executive and professional hires are critical to the long-term success of any organization. Our experienced team of recruiters utilizes a personalized approach, working closely with clients to understand their unique requirements, culture, and strategic objectives. Through meticulous research, targeted sourcing, and rigorous assessment, we deliver customized recruitment solutions that align with our clients' vision and goals.`}</p>
              <p className="py-2">{`Whether you're seeking a C-suite executive to lead your organization to new heights or a seasoned professional to drive innovation and excellence within your team, we are committed to delivering exceptional results. Our unwavering dedication to quality, integrity, and client satisfaction sets us apart as trusted partners in executive and professional recruitment.`}</p>
              <p className="py-2">{`Regardless of your hiring schedule, our sourcing strategies, informed by thorough research and bolstered by cutting-edge technology, are designed to assist you at every stage of the executive and professional talent acquisition journey.`}</p>              
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
