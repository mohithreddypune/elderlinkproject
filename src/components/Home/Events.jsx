import React, { useState, useEffect } from 'react';
import { quiz_illustration,quizz2,quizz3,quizz1,quizz4 } from "../../assets/home";
import Container from "../Container";


export default function Quiz() { // Give the component a name
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);
  return (
    <section className="my-14">
      <Container  >
        <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
              Easter "Quiz"
            </h1>
            <a href='https://form.jotform.com/241256605845156'>
            <button className="capitalize bg-button-primary hover:bg-button-primary-hover transition-colors px-14 py-3 rounded-sm font-bold text-[#6C6252]">
              Wanna Play
            </button></a>
          </article>
          <div className="absolute lg:right-[10%] right-[4%] lg:-top-[10%] -top-[5%] md:block hidden">
            <img src={quiz_illustration} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
      <br></br>
      <Container>
      <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
            Yoga
            </h1>
            <h1 className="font-bold lg:text-[25px] text-[30px] text-white pb-8">Tuesday, May 7, 2024 <br></br>&nbsp;06:00 p.m.–07:00 p.m.</h1>
            <a target='_blank' href='https://nycparks.perfectmind.com/24936/Clients/BookMe4LandingPages/Class?widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False&redirectedFromEmbededMode=False&classId=62d4ce60-c58f-493e-95d5-f0e50e209ffe&occurrenceDate=20240507'>
                <button className="capitalize bg-button-primary hover:bg-button-primary-hover transition-colors px-14 py-3 rounded-sm font-bold text-[#6C6252]">
              Register
            </button></a>
          </article>
          <div className="absolute lg:right-[10%] right-[2%] lg:-top-[4%] -top-[5%] md:block hidden">
            <img src={quizz1} alt="illustration" className="w-72" />
          </div>
        </div>
 
      </Container><br></br>
      
      <Container>
      <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
            Dances for a Variable Population
            </h1>
            <h1 className="font-bold lg:text-[25px] text-[30px] text-white pb-8">Tuesday, May 14, 2024 <br></br>&nbsp;9:30 a.m.–10:30 a.m.</h1>
            <a target='_blank' href='https://www.nycgovparks.org/events/2024/05/14/dances-for-a-variable-population'>
                <button className="capitalize bg-button-primary hover:bg-button-primary-hover transition-colors px-14 py-3 rounded-sm font-bold text-[#6C6252]">
              Register
            </button></a>
          </article>
          <div className="absolute lg:right-[10%] right-[4%] lg:-top-[3%] -top-[5%] md:block hidden">
            <img src={quizz3} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
      <br></br>
      <Container>
      <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
            Senior Cardio Sculpt
            </h1>
            <h1 className="font-bold lg:text-[25px] text-[30px] text-white pb-8">Wednesday, May 8, 2024 <br></br>&nbsp;10:30 a.m.–11:30 a.m.</h1>
            <a target='_blank' href='https://nycparks.perfectmind.com/24936/Clients/BookMe4LandingPages/Class?widgetId=15f6af07-39c5-473e-b053-96653f77a406&embed=False&redirectedFromEmbededMode=False&classId=3cccf74c-f6ba-4588-a33e-6e92f1aa66f4&occurrenceDate=20240508'>
                <button className="capitalize bg-button-primary hover:bg-button-primary-hover transition-colors px-14 py-3 rounded-sm font-bold text-[#6C6252]">
              Register
            </button></a>
          </article>
          <div className="absolute lg:right-[10%] right-[4%] lg:-top-[3%] -top-[5%] md:block hidden">
            <img src={quizz2} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container><br></br>
      <Container id="quizz2">
        <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
            Forest Fitness
            </h1>
            <h1 className="font-bold lg:text-[25px] text-[30px] text-white pb-8">Saturday, May 11, 2024 <br></br>&nbsp;08:30 a.m.–09:30 a.m.</h1>
            <a target='_blank' href='https://www.nycgovparks.org/events/2024/05/11/forest-fitness'>
                <button className="capitalize bg-button-primary hover:bg-button-primary-hover transition-colors px-14 py-3 rounded-sm font-bold text-[#6C6252]">
              Register
            </button></a>
          </article>
          <div className="absolute lg:right-[10%] right-[4%] lg:-top-[6%] -top-[5%] md:block hidden">
            <img src={quizz4} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
      <br></br>
    </section>
  );
}