import { useState } from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import BigMenu from '@layout/components/BigMenu';

const Header = () => {
  const [activeNav, setActiveNav] = useState<boolean>(false);

  const navIconToggle = () => {
    setActiveNav((prev) => !prev);
  };

  return (
    <div className={s.header}>
      <div className={s.header__row}>
        <div className={s.logo}>
          Logo
        </div>
        <div>

        </div>
      </div>
      <BigMenu isActive={activeNav} />
    </div>
  );
};

export default Header;
