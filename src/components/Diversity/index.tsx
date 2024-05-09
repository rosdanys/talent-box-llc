import Image from "next/image";

export default function Diversity (){
  return (
    
<section className="bg-dark-2 py-14" data-aos="fade-in">
  <div className="mx-auto max-w-screen-xl md:px-8">
    <div className="items-start gap-x-12 sm:px-4 md:px-0 lg:flex">
      <div className="flex-1 lg:block">
        <Image
          src="/images/dei/dei.jpg"
          className="sm:rounded-lg md:max-w-full lg:max-w-lg"
          width={774}
          height={600}
          alt=""
        />
      </div>
      <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
        <p className="text-3xl font-semibold text-white sm:text-4xl">
        Diversity, Equity, and Inclusion (DEI)
        </p>
        <p className="mt-3 text-body-color dark:text-dark-6">
        <span>Diversity, Equity, and Inclusion Statement:</span>
        <p className="py-2">
          {`At Talent Box we are fiercely committed to championing diversity, equity, and inclusion in every aspect of our work. We believe that diversity is not only a strength but a fundamental necessity for driving innovation, fostering creativity, and creating a more equitable society.`}
        </p>
        <p className="py-2">
          {`Our agency is founded on the principle that every individual, regardless of race, ethnicity, gender identity, sexual orientation, age, ability, religion, or background, deserves equal opportunities to thrive and succeed. We are dedicated to dismantling systemic barriers and biases that perpetuate inequality and limit access to opportunities.`}
        </p>
        <p className="py-2">
          {`We recognize that true progress requires intentional action and unwavering commitment. That's why we actively seek out and celebrate diverse perspectives, experiences, and talents within our team and among the candidates and clients we serve. We are committed to creating a workplace where everyone feels valued, respected, and empowered to bring their authentic selves to the table.`}
        </p>
        <p className="py-2">
          {`Through ongoing education, training, and dialogue, we strive to cultivate a culture of empathy, understanding, and allyship. We acknowledge that we may not have all the answers, but we are committed to listening, learning, and evolving as we work towards creating a more inclusive and equitable future for all.`}
        </p>
        <p className="py-2">
          {`Transparency and accountability are integral to our approach. We hold ourselves accountable for promoting fairness and equity in our recruitment practices, ensuring that every candidate is evaluated based on their skills, qualifications, and potential, free from bias or discrimination.`}
        </p>
        <p className="py-2">
          {`At Tale Box, we stand as allies and advocates for social justice and equality. We believe that by embracing diversity and fostering inclusivity, we can drive positive change and create a world where everyone has the opportunity to thrive, regardless of who they are or where they come from. Join us in our mission to build a more just and equitable future for all.`}
        </p>
        </p>
      </div>
    </div>
  </div>
</section>
  )
}