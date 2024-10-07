import Reveal from './Reveal';

export default function AboutComponent() {
  return (
    <div className="px-6 max-w-[1200px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid lg:grid-cols-1 place-items-center">
          <div className="w-5/6">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 mx-auto">
                I started my career at 15 as an electrical and mechanical
                apprentice through SENAI. My salary allowed me to invest in an
                English course, earning the “First Certificate in English” from
                Cambridge. At 20, I joined USEND, initially in customer service.
                I’ve since held roles in fraud analysis and compliance (AML).
                Now, at Inter, I handle onboarding for the US Digital Account, a
                banking service for Brazilian and American residents.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-4">
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  3<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>happy clients</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
