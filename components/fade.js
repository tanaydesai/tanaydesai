import { Fade, Slide } from "react-awesome-reveal";
      
export const FadeBox = ({sentence= "Tanay Desai is a software alchemist by day & user interfaces & interactions craftsman by night. Into deep learning & neural nets & sometimes making other intiutive & puposeful software."}) => {
  const wordsArray = sentence.split(' ');

  return <main className="relative mt-5 ml-2 z-[1]">
      <Fade className='text-[#2b2b2b] opacity-0 text-[14px] mt-5 font-STY z-[1] '>
       <div>
       {wordsArray.map((word, index) => {
          return (<span>{word === '\n' ? <br /> : word} </span>)  
        })}
       </div>
      </Fade>
    </main>
}