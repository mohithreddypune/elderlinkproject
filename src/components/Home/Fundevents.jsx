import React, { useState, useEffect } from 'react';
import { quiz_illustration,quizz2,quizz3,quizz1,quizz4 } from "../../assets/home";
import Container from "../Container";


export default function Quiz() { // Give the component a name
   
  return (
    <section className="my-14">
      
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
          <div className="absolute lg:right-[10%] right-[4%] lg:-top-[3%] -top-[5%] md:block hidden">
            <img src={quizz4} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
      < br></br>              < br></br>
      < br></br>
        <div className="hovering text-xl text-center more_news_gradient h-44 w-full text-black font-bold uppercase py-4 flex items-end justify-center relative z-20 ">
          <a href="/events" className="cursor-pointer">More Events</a>
        </div>
      <br></br>
    </section>
  );
}