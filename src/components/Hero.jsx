import profilepic from '../../public/img/profilepic.jpeg';
import { TypeAnimation } from 'react-type-animation';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiBootstrap,
} from 'react-icons/di';
import { motion } from 'framer-motion';
import { RiTailwindCssFill } from 'react-icons/ri';

const Hero = () => {
  return (
    <div className="mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.img
          src={profilepic}
          className="w-[250px] md:w-[400px] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Fullstack Dev',
              1000,
              'Webdesigner',
              1000,
              'Student',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">GUILHERME</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate software engineering student.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/aGuiOliveira"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/guilherme-oliveira-466724167/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/sguioliveira/?locale=us&hl=am-et"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.8 }}
        className="flex flex-col md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <div>
          <p className="text-gray-200 md:mr-6">My Tech Stack</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <DiHtml5 className="text-orange-600 mx-2" />
          <DiCss3 className="text-blue-600 mx-2" />
          <DiJavascript1 className="text-yellow-500 mx-2" />
          <DiReact className="text-blue-500 mx-2" />
          <DiBootstrap className="text-violet-700 mx-2" />
          <RiTailwindCssFill className="text-sky-400 mx-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
