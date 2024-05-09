import Image from "next/image";

export default function DiversityHome (){
  return (
    <section className="py-14 bg-dark-700 " data-aos="fade-in">
    <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
           
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <p className="text-white text-3xl font-semibold sm:text-4xl">
                Diversity, Equity, and Inclusion (DEI)
                </p>
               
                <p className="mt-3 text-body-color dark:text-dark-6">
                {`At Talent Box, we passionately champion diversity, equity, and inclusion across all facets of our work. We firmly believe that diversity isn't just advantageous but a vital driver of innovation, creativity, and societal equity. Our agency is founded on the principle of providing equal opportunities for everyone, regardless of race, ethnicity, gender identity, sexual orientation, age, ability, religion, or background.

We are committed to dismantling systemic barriers and biases, actively seeking and celebrating diverse perspectives within our team and among the candidates and clients we serve. Through ongoing education and dialogue, we cultivate a culture of empathy, understanding, and allyship, acknowledging that progress requires continuous learning and evolution.

Transparency and accountability are fundamental to our approach, ensuring fairness and equity in our recruitment practices. We stand as allies for social justice and equality, believing that embracing diversity and fostering inclusivity can drive positive change towards a more just and equitable future for all.

Join us in our mission to build a world where everyone has the opportunity to thrive.`}
                </p>
                <a href="/diversity" className="inline-flex gap-x-1 items-center text-primary hover:text-btn-hover-dark duration-150 font-medium">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div className="flex-1 sm:hidden lg:block">
                <Image src="/images/dei/dei.jpg" className="md:max-w-lg sm:rounded-lg" alt=""
                width={774}
                height={400}
                 />
            </div>
        </div>
    </div>
</section>
  )
}