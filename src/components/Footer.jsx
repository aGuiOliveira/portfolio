import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-center text-sm md:text-lg mb-12">
      <div className="space-y-4">
        <h3 className="text-gray-200 font-semibold">
          Guilherme Oliveira Santana de Almeida
        </h3>
        <div className="flex justify-around text-orange-500">
          <motion.div>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
