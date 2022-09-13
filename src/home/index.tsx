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
          <h1>Pair with CSS Scroll Snapping</h1>
        </section>

        <section className="panel orange" id="sec_2">
          <p>This element will spin.</p>
        </section>

        <section className="panel red" id="sec_3">
          <p>This background color will change</p>
        </section>

        <section className="panel blue yoyo"  id="sec_4">
          <p>Yoyo Text!</p>
        </section>

        <section className="panel blue" id="sec_5">
          <p>Pair with CSS Scroll Snapping</p>
        </section>

        <section className="panel orange" id="sec_6">
          <p>This element will spin.</p>
        </section>

        <section className="panel red" id="sec_7">
          <p>This element will spin.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
