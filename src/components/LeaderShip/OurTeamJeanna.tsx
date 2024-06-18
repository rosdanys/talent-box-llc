import Image from "next/image";

export default function OurTeamJeanna() {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col px-5 py-12">
        <div className="mx-auto lg:w-4/6">
          <div className="mt-10 flex flex-col-reverse md:flex-row lg:flex-row">
            <div className="mt-4 border-t border-gray-800 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-r sm:border-t-0 sm:py-8 sm:pr-8 sm:text-left">
              <span>
                {" "}
                <h2 className="mb-3 text-center text-4xl font-bold text-primary">
                  About me
                </h2>
              </span>
              <p className="text-lg leading-relaxed">
               {`With over two decades of expertise in Recruitment Process Outsourcing (RPO), corporate, and agency settings, Jeanna is a seasoned consulting professional specializing in strategic human capital management. Her leadership spans diverse sectors including Aerospace, Healthcare, Pharma, and IT, where she has effectively managed high-volume recruitment teams.`}
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                {`Jeanna excels in full lifecycle recruiting, having played pivotal roles at Futurestep and Korn Ferry, including Project Manager, where she consistently delivered client-focused solutions. Her career showcases senior recruitment and leadership positions at global firms, underscoring her dedication to excellence in talent acquisition.`}
              </p>
              
            </div>

            <div className="text-center sm:w-1/3 sm:py-8 sm:pl-8">
              <div className="inline-flex h-36 w-36 items-center justify-center rounded-full bg-gray-800 text-gray-600">
                <div className="relative m-auto max-w-4xl">
                  <Image
                    alt="Colorful Image"
                    className="mx-auto w-full rounded-full bg-gray-500 shadow-lg"
                    decoding="async"
                    height="500"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 432px"
                    src="/images/ourteam/team-02.jpg"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "auto",
                      aspectRatio: 1,
                    }}
                    width="500"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-white">
                  Jeanna Czerniejewski
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-primary"></div>
                <p className="text-base text-gray-400">Co-Founder.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
