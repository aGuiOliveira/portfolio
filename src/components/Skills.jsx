import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiPython,
  DiGithubBadge,
} from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import Reveal from './Reveal';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      {
        name: 'HTML',
        icon: <DiHtml5 className="text-orange-600" />,
        svalue: 'w-11/12',
        pvalue: '91%',
      },
      {
        name: 'CSS',
        icon: <DiCss3 className="text-blue-600" />,
        svalue: 'w-10/12',
        pvalue: '83%',
      },
      {
        name: 'Sass',
        icon: <DiSass className="text-pink-600" />,
        svalue: 'w-1/3',
        pvalue: '33%',
      },
      {
        name: 'Bootstrap',
        icon: <DiBootstrap className="text-purple-600" />,
        svalue: 'w-7/12',
        pvalue: '58%',
      },
      {
        name: 'JavaScript',
        icon: <DiJavascript1 className="text-yellow-500" />,
        svalue: 'w-5/12',
        pvalue: '41%',
      },
      {
        name: 'React',
        icon: <DiReact className="text-blue-500" />,
        svalue: 'w-1/3',
        pvalue: '33%',
      },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      {
        name: 'Python',
        icon: <DiPython className="text-yellow-500" />,
        svalue: 'w-2/4',
        pvalue: '50%',
      },
      {
        name: 'C++',
        icon: <SiCplusplus className="text-blue-400" />,
        svalue: 'w-2/12',
        pvalue: '16%',
      },
      {
        name: 'GitHub',
        icon: <DiGithubBadge className="text-gray-600" />,
        svalue: 'w-4/12',
        pvalue: '33%',
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto flex flex-col px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-5xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">Check out some of my skills</p>

        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-1000/20 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <div className="grid grid-cols-1 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="w-28 text-gray-200">{tech.name}</span>
                    <div className="flex justify-between items-center w-full rounded-full h-full">
                      <div className="flex justify-between items-center w-11/12 bg-purple-950 rounded-full h-2/4">
                        <span
                          className={
                            'block relative bg-purple-500 rounded-full h-full ' +
                            tech.svalue
                          }
                        ></span>
                      </div>
                      <span className="text-gray-200">{tech.pvalue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
