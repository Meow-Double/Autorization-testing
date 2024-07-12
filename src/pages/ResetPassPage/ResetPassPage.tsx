import { useState } from 'react';
import styles from './ResetPassPage.module.css';
import { Button } from '@/shared';
import { useParams } from 'react-router-dom';
import { postChangePass } from '@/api/requests/change-pass';

export const ResetPassPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { token } = useParams();
  const onChangePSW = async () => {
    if (password === confirmPassword) {
      try {
        await postChangePass({ params: { password, token: token ?? '' } });
        window.location.pathname = '/login';
        alert('Пароль был сменён');
      } catch (error: any) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.inner}>
      <h2 className={styles.title}>Востановление пароля</h2>

      <form className={styles.form} onSubmit={onChangePSW}>
        <input
          value={password}
          className={styles.input}
          type='password'
          placeholder='Введите новый пароль'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={confirmPassword}
          className={styles.input}
          type='password'
          placeholder='Повторите пароль'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button className={styles.btn} variant='primary'>
          Сбросить пароль
        </Button>
      </form>
      {/* <Navigate to='/login' /> */}
    </div>
  );
};
