import { Button } from '@/shared';
import { SideBar } from './components';
import styles from './ProfilePage.module.css';
import { useContext } from 'react';
import { ProfileContext } from '@/context/Profile/ProfileContext';

export const ProfilePage = () => {
  const { money, setMoney } = useContext(ProfileContext);
  return (
    <div className={styles.inner}>
      <div className={styles.img_block}>
        <p className={styles.count_text}>Count: {money}</p>
        <Button variant='primary' onClick={() => setMoney(money + 1)}>
          Click me
        </Button>
      </div>
      <SideBar money={money}/>
    </div>
  );
};
