import { motion, useAnimate, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

export const Fade = ({sentence= "Tanay Desai is a software alchemist by day & user interfaces & interactions craftsman by night. Into deep learning & neural nets & sometimes making other intiutive & puposeful software."}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = sentence.split(' ');


  const renderWords = () => {
    return (
      <motion.div ref={scope} transition={{type: 'spring', bounce: 0.2}} className='h-fit'>
        {wordsArray.map((word, index) => {
          return (
            <motion.span className="text-gray-500 opacity-0  text-[17px] mt-5 font-LufgaLight">{word === '\n' ? <br /> : word} </motion.span>
          );
        })}
      </motion.div>
    );
  };
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0),
      }
    );
  }, [scope.current]);
  return <main className="relative mt-5 ml-2">{renderWords()}</main>
}