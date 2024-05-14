import Image from "next/image";

export default function Banking() {
  return (
    <section className="bg-dark-2 py-14">
      <div className="mx-auto max-w-screen-xl md:px-8">
        <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 lg:block">
            <Image
             src="/images/banking/banking.jpg"
              className="sm:rounded-lg md:max-w-full lg:max-w-lg"
              width={774}
              height={600}
              alt=""
            />
          </div>
          <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-3xl font-semibold text-white sm:text-4xl">
            Banking and Finance Services
            </p>
            <span className="mt-3 text-body-color dark:text-dark-6">
              <p className="py-2">{`Navigating the challenges of recruiting in the financial and professional services industry, especially amidst mergers, acquisitions, and evolving regulations, demands specialized expertise. With Talent Box, you gain access to experienced professionals adept at sourcing, attracting, and engaging top talent across various sectors including retail, small business, & commercial banking, insurance, wealth management, and private banking.`}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
