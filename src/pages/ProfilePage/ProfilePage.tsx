import { Button } from '@/shared';
import { SideBar } from './components';
import styles from './ProfilePage.module.css';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '@/context/Profile/ProfileContext';
import { MenuBar } from './components/menuBar/MenuBar';
import { postSetMoney } from '@/api/requests/setMoney';
import { getActivated, getMoney, postActivated } from '@/api/requests';
import { ActivateLink } from './components/ActivateLink/ActivateLink';

export const ProfilePage = () => {
  const { money, setMoney } = useContext(ProfileContext);

  const [user, setUser] = useState<PostUserTypes | null>(null);

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

    const Auth = 'Bearer' + user?.accessToken;
    postSetMoney({
      params: object,
      config: { headers: { Authorization: Auth } }
    });
  };

  useEffect(() => {
    const accessToken = user?.accessToken;
    const data = window.localStorage.getItem('jwt');
    const jwtData = JSON.parse(data);

    postActivated({
      params: { email: jwtData.user.email },
      config: { headers: { Authorization: accessToken } }
    }).then((res) => {
      if (res.data.isActivated) {
        window.localStorage.removeItem('jwt');
        window.location.reload();
      }
    });
  }, []);

  if (!user?.user.isActivated) {
    return <ActivateLink email={user?.user.email} />;
  }

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
