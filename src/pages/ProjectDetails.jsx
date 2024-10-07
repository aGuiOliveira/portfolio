import { useParams } from 'react-router-dom';
import data from '../data/projects.json';
import Reveal from '../components/Reveal';

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

export default function ProjectDetails() {
  const { id } = useParams();

  const project = data.find((project) => project.id == id);

  const technologyIcons = {
    DiHtml5: <DiHtml5 />,
    DiCss3: <DiCss3 />,
    DiSass: <DiSass />,
    DiBootstrap: <DiBootstrap />,
    DiJavascript1: <DiJavascript1 />,
    DiReact: <DiReact />,
    DiPython: <DiPython />,
    DiGithubBadge: <DiGithubBadge />,
    SiCplusplus: <SiCplusplus />,
  };

  return (
    <>
      {project ? (
        <div>
          <h2 className="text-5xl font-bold mb-4 text-center text-white">
            {project.title}
          </h2>
          <div className="px-6 max-w-[1200px] mx-auto md:my-12" id="contact">
            <Reveal>
              <div className="grid lg:grid-cols-1 place-items-center mb-6">
                <div className="w-5/6">
                  <div className="text-gray-300 my-3">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <h3 className="text-4xl font-semibold mb-5 mt-6">
                      About the <span>Project</span>
                    </h3>
                    <div className="">
                      <p className="text-justify leading-7 mx-auto">
                        {project.fulldescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-10 items-center gap-4">
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <div className="flex gap-5">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="text-4xl">
                            {technologyIcons[technology]}
                          </span>
                        ))}
                      </div>
                      <p className="pt-2 text-lg md:text-base">
                        <span>Technologies used</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      ) : (
        <h2 className="text-5xl font-bold mb-4 text-center text-white mt-24 mb-24">
          Project Not found
        </h2>
      )}
    </>
  );
}
