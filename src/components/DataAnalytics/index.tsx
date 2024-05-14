import Image from "next/image";

export default function DataAnalytics() {
  return (
    <section className="bg-dark-2 py-14">
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
            Data Analytics, Engineering, and Technology
            </p>
            <span className="mt-3 text-body-color dark:text-dark-6">
              <p className="py-2">{`Empower your organization's growth and decision-making with our advanced data analytics, engineering, and technology solutions. At our agency, we specialize in harnessing the power of data to drive insights, innovation, and efficiency across various industries.`}</p>
              <p className="py-2">{`Our team of skilled engineers and technology experts collaborates closely with clients to develop customized solutions tailored to their specific needs and goals. From predictive analytics and machine learning to software development and infrastructure management, we offer a comprehensive suite of services to help you unlock the full potential of your data and technology investments.`}</p>
              <p className="py-2">{`Partner with us to transform your business, optimize performance, and stay ahead in today's rapidly evolving digital landscape.`}</p>
            
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
