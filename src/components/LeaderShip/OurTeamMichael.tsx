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
                    alt="Michael Petri"
                    className="mx-auto w-full rounded-full bg-gray-500 shadow-lg"
                    decoding="async"
                    height="500"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 432px"
                    src="/images/ourteam/team-01.jpg"
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
               {`Michael Petri is a bilingual Talent Acquisition professional with over two decades of experience across various industries. Known for his effective recruitment strategies and expertise in full-cycle recruitment, Michael has successfully sourced and retained top talent for some of the world's largest organizations, which include American Express, Del Monte, GE Capital, GE Healthcare, Korn Ferry, and Pfizer.`}
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                {`Michael holds a Master’s in Human Resources Management from Florida International University and a Bachelor’s in Political Science from St. Mary's University.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
