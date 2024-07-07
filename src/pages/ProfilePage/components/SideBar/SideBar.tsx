import { Button } from '@/shared';
import styles from './SideBar.module.css';
import MoneySvg from '@/assets/svg/money.svg';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '@/context/Profile/ProfileContext';

interface SideBarProps {
  money: number;
}

export const SideBar = ({ money }: SideBarProps) => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(ProfileContext);

  const [user, setUser] = useState<UserTypes | null>(null);

  useEffect(() => {
    const data = window.localStorage.getItem('jwt');
    if (data) {
      const { user: userData } = JSON.parse(data);
      setUser(userData);
    }
  }, []);

  const onClickExit = () => {
    localStorage.removeItem('jwt');
    setIsAuth(false);
    navigate('/auth');
  };

  return (
    <div className={styles.inner}>
      <img
        src='https://cdn4.sharechat.com/img_413052_10538a06_1669347410016_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=016_sc.jpg'
        alt='avatarka'
        className={styles.img}
      />
      <div>
        <h2 className={styles.name}>{user?.name}</h2>
        <span className={styles.email}>{user?.email}</span>
      </div>
      <div className={styles.money_block}>
        <div className={styles.money}>Money: {money}</div>
        <img src={MoneySvg} alt='money' />
      </div>
      <div className={styles.menu_list}>
        <Button variant='primary'>Settings</Button>
        <Button variant='primary' onClick={onClickExit}>
          Exit
        </Button>
      </div>
    </div>
  );
};
