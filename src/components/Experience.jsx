import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'USEND (Acquired by Inter)',
    work: [
      {
        position: 'Bilingual Customer Service Representative',
        period: 'Oct 2020 - Mar 2021',
      },
      {
        position: 'Jr Fraud Analyst',
        period: 'Mar 2021 - Jul 2021',
      },
      {
        position: 'B2B Operation Analyst',
        period: 'Jul 2021 - Mar 2022',
      },
      {
        position: 'B2B Operation Supervisor',
        period: 'Mar 2023 - Jul 2023',
      },
      {
        position: 'B2B & Global Account Operation Supervisor',
        period: 'Jul 2023 - Abr 2024',
      },
    ],
  },
  {
    company: 'Inter',
    work: [
      {
        position: 'Onboarding Leader',
        period: 'Abr 2024 - Present',
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              {experience.work.map((work, index) => (
                <div key={index}>
                  <p className="text-gray-300 mt-4">{work.position}</p>
                  <p className="text-gray-400 mb-4">{work.period}</p>
                </div>
              ))}
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
