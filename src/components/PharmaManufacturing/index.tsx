import Image from "next/image";

export default function PharmaManufacturing() {
  return (
    <>
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
            <p className="text-3xl font-semibold text-primary sm:text-4xl">
            Pharma Manufacturing
            </p>
            <span className="mt-3 text-body-color dark:text-dark-6">
              <p className="py-2">
                {`Elevate your pharmaceutical manufacturing operations with our comprehensive services tailored to meet the unique demands of the industry. At Talent Box, we specialize in providing strategic solutions designed to optimize efficiency, quality, and compliance throughout the manufacturing process. From regulatory compliance and quality assurance to supply chain management and operational excellence, our team of experts is dedicated to supporting your organization at every stage of production. With our industry-leading expertise and innovative approach, we empower pharmaceutical manufacturers to streamline operations, minimize risk, and maximize productivity, ultimately driving success in today's competitive market. Experience the difference with our tailored solutions designed to meet your specific needs and propel your manufacturing operations to new heights.`}
              </p>              
            </span>
          </div>
        </div>
      </div>
    </section>
    
  </>
  );
}
