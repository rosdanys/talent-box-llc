import Image from "next/image";

export default function PharmaManufacturingHome() {
  return (
    <section className="bg-dark-700 py-14 " data-aos="fade-in">
      <div className="mx-auto max-w-screen-xl md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src="/images/pharma/pharma.jpg"
              className="sm:rounded-lg md:max-w-lg"
              alt=""
              width={774}
              height={400}
            />
          </div>
          <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-3xl font-semibold text-white sm:text-4xl">
            Pharma Manufacturing
            </p>

            <p className="mt-3 text-body-color dark:text-dark-6">
              {`Elevate your pharmaceutical manufacturing with our specialized services, optimizing efficiency, quality, and compliance from start to finish.`}
            </p>
            <a
              href="/pharma"
              className="hover:text-btn-hover-dark inline-flex items-center gap-x-1 font-medium text-primary duration-150"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
