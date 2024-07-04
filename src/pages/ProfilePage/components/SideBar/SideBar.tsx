import { Button } from '@/shared';
import styles from './SideBar.module.css';
import MoneySvg from '@/assets/svg/money.svg';

interface SideBarProps {
  money: number;
}

export const SideBar = ({ money }: SideBarProps) => {
  return (
    <div className={styles.inner}>
      <img
        src='https://cdn4.sharechat.com/img_413052_10538a06_1669347410016_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=016_sc.jpg'
        alt='avatarka'
        className={styles.img}
      />
      <div>
        <h2 className={styles.name}>title</h2>
        <span className={styles.email}>email.com</span>
      </div>
      <div className={styles.money_block}>
        <div className={styles.money}>Money: {money}</div>
        <img src={MoneySvg} alt='money' />
      </div>
      <div className={styles.menu_list}>
        <Button variant='primary'>Settings</Button>
        <Button variant='primary'>Exit</Button>
      </div>
    </div>
  );
};
