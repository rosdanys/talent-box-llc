import Image from "next/image";

export default function Culture (){
  return (
    
<section className="bg-dark-2 py-14" data-aos="fade-in">
  <div className="mx-auto max-w-screen-xl md:px-8">
    <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
      <div className="flex-1 lg:block">
        <Image
          src="/images/culture/culture_pic.jpg"
          className="sm:rounded-lg md:max-w-full lg:max-w-lg"
          width={774}
          height={600}
          alt=""
        />
      </div>
      <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
        <p className="text-3xl font-semibold text-primary sm:text-4xl">
        Culture
        </p>
        <p className="mt-3 text-body-color dark:text-dark-6">
          {`At Talent Box LLC we are dedicated to fostering an inclusive and progressive environment
          where every individual has the opportunity to flourish and reach their fullest potential.
          We believe in the power of diversity, equity, and inclusion as catalysts for innovation
          and success. `}<br></br>{`
          Our culture is built on the foundation of respect, empathy, and
          collaboration. We value the unique perspectives, backgrounds, and experiences that each
          member of our team brings to the table, recognizing that it is through embracing our
          differences that we can truly thrive. `}
          {` 
          We are committed to providing a supportive and empowering atmosphere where all voices are heard and valued. Through ongoing learning and
          development initiatives, we strive to cultivate a growth mindset that encourages
          continuous improvement and professional advancement for every team member.`} 
          {`
          Transparency and integrity are at the core of everything we do. We believe in open communication,
          honesty, and accountability, both internally within our team and externally with our
          clients and candidates. By upholding the highest ethical standards, we build trust and
          credibility in all our interactions. 
          At Talent Box LLC, we are not just recruiters; we are partners in our clients' and candidates' success stories. We are passionate about making
          meaningful connections and matching the right talent with the right opportunities, driving
          positive change and impact in the world. 
          Together, we are dedicated to creating a culture where everyone feels valued, empowered, and inspired to unleash their full potential. Join
          us as we redefine the future of Talent Acquisition, one opportunity at a time.`}
        </p>
      </div>
    </div>
  </div>
</section>
  )
}