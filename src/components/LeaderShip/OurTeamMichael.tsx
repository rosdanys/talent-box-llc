import Image from "next/image";

export default function OurTeamMichael() {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col px-5 py-12">
        <div className="mx-auto lg:w-4/6">
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-36 w-36 items-center justify-center rounded-full bg-gray-800 text-gray-600">
                <div className="relative m-auto max-w-4xl">
                  <Image
                    alt="Colorful Image"
                    className="mx-auto w-full rounded-full bg-gray-500 shadow-lg"
                    decoding="async"
                    height="500"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 432px"
                    src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
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
                  Michael Petri
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-primary"></div>
                <p className="text-base text-gray-400">Co-Founder.</p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-800 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <span>
                {" "}
                <h2 className="mb-3 text-center text-4xl font-bold text-primary">
                  About me
                </h2>
              </span>
              <p className="text-lg leading-relaxed">
               {` Michael Petri is a seasoned and results-oriented bilingual
                Talent Acquisition professional with over a decade of experience
                spanning various industries. With a strong track record of
                sourcing, recruiting, and retaining top-tier talent, Michael has
                honed his expertise in developing and implementing innovative
                recruitment strategies aligned with organizational goals.`}
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                {`Throughout his career, Michael has showcased proficiency in full-cycle recruitment, interviewing, negotiation, and offer closing. His keen understanding of recruitment technologies has seen him adeptly utilize a range of tools, including Applicant Tracking Systems (ATS), Customer Relationship Management (CRM) platforms, and AI recruiting systems, among others. In his most recent role as a Senior Talent Advisor at Pfizer, Michael demonstrated his ability to excel in a remote environment, successfully managing a diverse array of requisitions within the pharmaceutical manufacturing sector. His commitment to diversity and inclusion initiatives, coupled with his strategic collaboration with department heads and HR partners, has contributed to Pfizer's recruitment success.`}
              </p>
              <br />
              <p className="text-lg leading-relaxed">
               {` Prior to Pfizer, Michael held key positions with American
                Express, GE Capital, GE Healthcare, Korn Ferry, Del Monte, and
                other renowned organizations, where he consistently delivered
                specialist and niche hiring solutions while ensuring compliance
                with industry regulations and internal policies. Michael holds a
                Master of Science in Human Resources Management from Florida
                International University and a Bachelor of Arts in Political
                Science from St. Mary's University. Complementing his academic
                credentials, Michael has pursued additional training and
                certifications in recruiting management and sourcing
                methodologies.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
