import Image from "next/image";

export default function HealthCare() {
  return (
    <>
    <section className="bg-dark-2 py-14">
      <div className="mx-auto max-w-screen-xl md:px-8">
        <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 lg:block">
            <Image
              src="/images/healthcare/healthcare.jpg"
              className="sm:rounded-lg md:max-w-full lg:max-w-lg"
              width={774}
              height={600}
              alt=""
            />
          </div>
          <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-3xl font-semibold text-primary sm:text-4xl">
            Healthcare
            </p>
            <span className="mt-3 text-body-color dark:text-dark-6">
              <p className="py-2">
                {`Exceptional patient experiences begin with exceptional people, and at Talent Box, we specialize in sourcing the nurses, clinicians, physicians, and other healthcare professionals essential to your success. Our expertise lies in identifying top talent that not only possesses the necessary skills but also embodies the values and ethos of your organization. Whether you need talent locally or across regions, we are dedicated to bringing the right individuals to you, ensuring seamless integration into your team and a commitment to delivering the highest standard of care. `}
              </p>              
            </span>
          </div>
        </div>
      </div>
    </section>
    
  </>
  );
}
