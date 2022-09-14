import { useEffect } from 'react';
import cn from 'classnames';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import s from './Home.module.scss';

import { useRouter } from 'next/router';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause',
      scroller: '.sections',
    });

    const navLinks = gsap.utils.toArray('.section_nav a');
    // navLinks.forEach((link: any, i) => {
    //   link.addEventListener('click', (e: any) => {
    //     e.preventDefault();
    //     gsap.to(window, { scrollTo: i * innerHeight });
    //   });
    // });

    const panels = gsap.utils.toArray('.panel');
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        start: 0,
        end: (i + 1) * innerHeight - innerHeight / 1.6,
        markers: false,
        onLeave: () => {
          if (navLinks[i + 1]) {
            // @ts-ignore
            gsap.to(navLinks[i + 1], { className: 'active' });
            // @ts-ignore
            gsap.to(navLinks[i], { className: 'not-active' });
          }
        },
        onEnterBack: () => {
          // @ts-ignore
          gsap.to(navLinks[i], { className: 'active' });
          if (navLinks[i + 1]) {
            // @ts-ignore
            gsap.to(navLinks[i + 1], { className: 'not-active' });
          }
        },
      });
    });
  }, []);

  return (
    <div className={s.home}>
      <div className="container sections">
        <section className="panel blue" id="sec_1">
          <h1>Section #1</h1>
        </section>

        <section className="panel orange" id="sec_2">
          <p>Section #2</p>
        </section>

        <section className="panel red" id="sec_3">
          <p>Section #3</p>
        </section>

        <section className="panel blue2 yoyo"  id="sec_4">
          <p>Section #4</p>
        </section>

        <section className="panel red" id="sec_5">
          <p>Section #5</p>
        </section>

        <section className="panel orange" id="sec_6">
          <p>Section #6</p>
        </section>

        <section className="panel red2" id="sec_7">
          <p>Section #7</p>
        </section>

        <section className="panel blue2 yoyo"  id="sec_8">
          <p>Section #8</p>
        </section>

        <section className="panel red" id="sec_9">
          <p>Section #9</p>
        </section>

        <section className="panel orange" id="sec_10">
          <p>Section #10</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
