import { FormTalent } from "../FormTalent/FormTalent";
import FormTalentResend from "../FormTalent/FormTalentResend";

export default function SecureTalent() {
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
                Secure Talent
                </h2>
                <p className=" mt-3 text-body-color dark:text-dark-6">
                  {`At Talent Box, we leverage cutting-edge AI technologies, advanced data analytics, and four decades of industry experience to identify and secure the ideal candidates for your organization. Our innovative approach ensures a precise match between your needs and top talent, streamlining the hiring process and delivering exceptional results.`}
                </p>
              </div>              
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">    
            <FormTalentResend />
          </div>
        </div>
      </div>
    </section>
  );
}
