import { useEffect, useState } from 'react';
import styles from './ResetPassPage.module.css';
import { Button } from '@/shared';
import { useParams } from 'react-router-dom';

export const ResetPassPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { token } = useParams();
  const onChangePSW = () => {
    
  };

  return (
    <div className={styles.inner}>
      <h2 className={styles.title}>Востановление пароля</h2>

      <form className={styles.form}>
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
        <Button onClick={onChangePSW} className={styles.btn} variant='primary'>
          Сбросить пароль
        </Button>
      </form>
    </div>
  );
};
