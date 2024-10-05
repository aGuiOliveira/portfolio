import iotdashboard_img from '../assets/iotdashboard_img.png';
import mentealternativa_img from '../assets/mentealternativa_img.png';
import feclub_img from '../assets/feclub_img.png';
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: feclub_img,
    title: 'Fe-Club',
    description: 'Webgame dedicated to the Formula E',
    links: {
      site: '#',
      github: 'https://github.com/RafaelDuarteF/fe-club-react',
    },
  },
  {
    img: mentealternativa_img,
    title: 'Mente Alternativa',
    description:
      'A website that aims to provide tools and information to help you with everyday problems.',
    links: {
      site: '#',
      github: 'https://mentealternativa.com.br/',
    },
  },
  {
    img: iotdashboard_img,
    title: 'IoT Dashboard',
    description:
      'An application developed to capture and monitor the environment of a wine cellar',
    links: {
      site: '#',
      github: 'https://github.com/aGuiOliveira/FE-Club_IoT',
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="p-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                >
                  About
                </a>
                <a
                  href={project.links.github}
                  className="flex items-center p-4 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
