import React from 'react';
import cn from 'classnames';

import s from './BigMenu.module.scss';

interface BigMenuProps {
  isActive?: boolean;
}

const BigMenu = ({ isActive }: BigMenuProps) => {
  return (
    <>
      <div className={cn(s.menu, isActive && s.active)}>
        <ul className="section_nav">
          <li className={s.active}>
            <a href={'#sec_1'}>Section #1</a>
          </li>
          <li>
            <a href={'#sec_2'}>Section #2</a>
          </li>
          <li>
            <a href={'#sec_3'}>Section #3</a>
          </li>
          <li>
            <a href={'#sec_4'}>Section #4</a>
          </li>
          <li>
            <a href={'#sec_5'}>Section #5</a>
          </li>
          <li>
            <a href={'#sec_6'}>Section #6</a>
          </li>
          <li>
            <a href={'#sec_7'}>Section #7</a>
          </li>
          <li>
            <a href={'#sec_8'}>Section #8</a>
          </li>
          <li>
            <a href={'#sec_9'}>Section #9</a>
          </li>
          <li>
            <a href={'#sec_10'}>Section #10</a>
          </li>
        </ul>
      </div>
      <div className={cn(s.bgNav, isActive && s.active)} />
    </>
  );
};

export default BigMenu;
