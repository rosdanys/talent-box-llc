import { FormHired } from "../FormHired/FormHired";
import FormHiredAttachment from "../FormHired/FormHiredAttachment";
import { FormTalent } from "../FormTalent/FormTalent";

export default function GetHired() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-[120px]"
      data-aos="fade-in"
    >
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full  dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[300px]">
                <h2 className="mb-6  text-3xl font-semibold sm:text-4xl text-primary">
                Get Hired
                </h2>
                <p className=" mt-3 text-body-color dark:text-dark-6">
                  {`At Talent Box, we combine advanced AI technologies, comprehensive data analytics, and four decades of industry experience and relationships to connect candidates with their ideal job opportunities. Our unique approach ensures a seamless match between candidates' skills and employers' needs, facilitating career growth and success.`}
                </p>
              </div>              
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">    
            <FormHiredAttachment />
          </div>
        </div>
      </div>
    </section>
  );
}
