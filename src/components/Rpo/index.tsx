import Image from "next/image";

export default function Rpo() {
  return (
    <>
    <section className="bg-dark-2 py-14" data-aos="fade-in">
      <div className="mx-auto max-w-screen-xl md:px-8">
        <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 lg:block">
            <Image
              src="/images/rpo/rpo.jpg"
              className="sm:rounded-lg md:max-w-full lg:max-w-lg"
              width={774}
              height={600}
              alt=""
            />
          </div>
          <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-3xl font-semibold text-primary sm:text-4xl">
            Recruitment Process Outsourcing (RPO)
            </p>
            <span className="mt-3 text-body-color dark:text-dark-6">
              <p className="py-2">
                {" "}
                {`Recruitment Process Outsourcing (RPO) involves entrusting the execution of either the entire recruitment process or specific segments of it to an external partner on a continual basis. Through RPO, recruiters are strategically selected to assimilate your organizational culture and embody your brand identity. Backed by cutting-edge talent acquisition technology, tools, and proficiency, these recruiters expedite the acquisition of top-tier talent, facilitating swifter and more impactful hires that drive favorable outcomes for your business. `}
              </p>              
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
          Mini RPO
          </p>
          <span className="mt-3 text-body-color dark:text-dark-6">
            <p className="py-2">{`Our Mini-RPO service offers a tailored solution for organizations seeking to optimize specific aspects of their recruitment process. Designed to provide targeted support and flexibility, Mini-RPO allows clients to outsource select recruitment functions while maintaining control over key aspects of the hiring process. `}</p>
            <p className="py-2">{`With Mini-RPO, clients can access the expertise and resources of our agency to streamline critical stages of recruitment, such as candidate sourcing, screening, or interview coordination. Whether you need assistance with high-volume hiring, niche talent acquisition, or specialized recruitment projects, our Mini-RPO service is customizable to meet your unique needs and objectives. `}</p>
            <p className="py-2">{`By partnering with us for Mini-RPO, clients benefit from improved efficiency, reduced time-to-hire, and enhanced candidate quality, all while retaining visibility and oversight over the recruitment process. Our collaborative approach ensures alignment with your organization's culture, values, and goals, resulting in successful hires that drive business growth and success. `}</p>   
            <p className="py-2">{`Experience the convenience and effectiveness of Mini-RPO, where targeted support meets exceptional results. Let us help you optimize your recruitment process and unlock the full potential of your talent acquisition strategy. `}</p>     
          </span>
        </div>
        <div className="flex-1 lg:block">
          <Image
            src="/images/rpo/rpo.jpg"
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
