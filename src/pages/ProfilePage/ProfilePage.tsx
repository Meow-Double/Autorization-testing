import { Button } from '@/shared';
import { SideBar } from './components';
import styles from './ProfilePage.module.css';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '@/context/Profile/ProfileContext';
import { MenuBar } from './components/menuBar/MenuBar';
import { postSetMoney } from '@/api/requests/setMoney';
import { getMoney } from '@/api/requests';

export const ProfilePage = () => {
  const { money, setMoney } = useContext(ProfileContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const data = window.localStorage.getItem('jwt');
    if (data) {
      const userData = JSON.parse(data);
      setUser(userData);

      getMoney({
        config: { headers: { Authorization: userData.accessToken } }
      }).then((res) => setMoney(res.data.money));
    }
  }, []);

  const addMoney = () => {
    setMoney((prev) => prev + 1);
    const object = {
      money: money + 1
    };

    const Auth = 'Bearer' + user.accessToken;
    postSetMoney({
      params: object,
      config: { headers: { Authorization: Auth } }
    });
  };

  return (
    <div className={styles.inner}>
      <div className={styles.main_window}>
        <MenuBar />
        <div className={styles.img_block}>
          <p className={styles.count_text}>Count: {money}</p>
          <Button variant='primary' onClick={addMoney}>
            Click me
          </Button>
        </div>
      </div>
      <SideBar money={money} />
    </div>
  );
};
