import { Button } from '@/shared';
import styles from './MenuBar.module.css';

const MenuList = ['Shop', 'Exchanger', 'Arena', 'Heroes', 'Missions', 'News', 'Info', 'Help'];
export const MenuBar = () => {
  return (
    <ul className={styles.menu}>
      {MenuList.map((item) => (
        <li key={item} className={styles.item}>
          <Button className={styles.btn} variant='primary'>
            {item}
          </Button>
        </li>
      ))}
    </ul>
  );
};
