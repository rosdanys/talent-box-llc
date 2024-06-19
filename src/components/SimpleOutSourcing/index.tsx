import Image from "next/image";

export default function SimpleOutSourcing() {
  return (
    <>
      <section className="bg-dark-2 py-14" data-aos="fade-in">
        <div className="mx-auto max-w-screen-xl md:px-8">
          <p className="text-3xl font-semibold text-primary sm:text-4xl">
            Simple Outsourcing
          </p>
          <h2 className="my-4 pb-5">Simple and Uncomplicated Interaction</h2>
          <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 lg:block">
              <Image
                src="/images/simple/simple_outsourcing.jpg"
                className="sm:rounded-lg md:max-w-full lg:max-w-lg"
                width={774}
                height={600}
                alt=""
              />
            </div>
            <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="text-3xl mb-5 font-semibold text-primary sm:text-4xl">
                Talent Acquisition On-Demand
              </p>
              <span className="mt-3 text-body-color dark:text-dark-6">
                <ul className="mb-10 list-disc">
                  <li className="mb-2 text-base   text-body-color dark:text-dark- ">
                    Deliver talent when you need it for a flat monthly fee.
                  </li>
                  <li className="mb-2 text-base   text-body-color dark:text-dark- ">
                    If you need a Talent Advisor or a team of Talent Advisors,
                    we can make that happen without a long-term commitment.
                  </li>
                  <li className="mb-2 text-base   text-body-color dark:text-dark- ">
                    Each On-Demand resource can be available for different time
                    frames at a fixed monthly rate (3-Month Minimum). This makes
                    budgeting simple and eliminates unexpected costs.
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark-2 py-14" data-aos="fade-in">
        <div className="mx-auto max-w-screen-xl md:px-8">
          <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="text-3xl font-semibold text-primary sm:text-4xl">
              Talent Acquisition On-Demand Types
              </p>
              <span className="mt-3 text-body-color dark:text-dark-6">
              <h2 className="text-white my-2">Talent Advisor</h2><p className="py-2">{`
Talent Advisors who integrate into your team as if they were your own employees. We will pair you with a Talent Advisor who specializes in your specific hiring needs and can effortlessly adapt to your company culture.
`}</p>
                <h2 className="text-white my-2">Sourcer</h2><p className="py-2">{`
Sourcers who are passionate about candidate searches and consistently provide robust candidate pipelines for you. Our specialized team handles the entire process, delivering qualified candidates for your weekly hiring leader engagements.
`}</p>
                <h2 className="text-white my-2">Process Improvement Designer</h2><p className="py-2">{`
Talent consultants who seamlessly integrate with your team to enhance your processes. With intelligent design, we create innovative talent acquisition experiences that deliver results.`}</p>
              </span>
            </div>
            <div className="flex-1 lg:block">
              <Image
                src="/images/simple/ta_on_demand.jpg"
                className="sm:rounded-lg md:max-w-full lg:max-w-lg"
                width={774}
                height={600}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
