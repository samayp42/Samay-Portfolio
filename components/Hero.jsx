import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import StarsCanvas from "./canvas/Stars";
import Image from "next/image";

function Hero({ loading, isMobile }) {
  return (
    <section
      className={`relative w-full h-[100svh] md:max-h-[800px] max-h-[600px] mx-auto flex flex-col overflow-hidden bg-bgSecondaryDark rounded-2xl shadow-lg shadow-primary/20 backdrop-blur-sm`}
    >
      <StarsCanvas className="absolute inset-0 z-0 opacity-80" />
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto paddingX flex flex-row items-center justify-between gap-8 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-5 h-5 rounded-full bg-primary shadow-md shadow-primary/50" 
          />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1 sm:h-80 h-40 violet-gradient" 
          />
        </div>

        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.55 }}
          className="relative z-10 flex-1"
        >
          <div className="mt-0">
            <h1 className={`heroHeadText text-left bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9d4edd]`}>
              Hi, I&apos;m{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] to-primary">Samay Patel</span>
            </h1>
            <p className={`heroSubText mt-6 tracking-wide max-w-2xl text-secondary/90`}>
              AI Innovator | Building Intelligent Solutions for Real-World Impact
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative w-1/3"
        >
          <Image
            src="../public/assets/background/hero-image.png"
            alt="AI Technology"
            width={500}
            height={500}
            priority
            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 filter drop-shadow-lg"
          />
        </motion.div>
      </div>
      <StarsCanvas />

      <div className="absolute xs:bottom-10 bottom-32 left-1/2 justify-center items-center z-20 hidden md:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
