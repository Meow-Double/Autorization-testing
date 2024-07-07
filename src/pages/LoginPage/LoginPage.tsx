import { useForm } from 'react-hook-form';
import styles from './LoginPage.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from './constans/LoginShcema';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { postLogin } from '@/api/requests/login';
import { useContext } from 'react';
import { ProfileContext } from '@/context/Profile/ProfileContext';

export const LoginPage = () => {
  const { setIsAuth } = useContext(ProfileContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (value: LoginSchema) => {
    try {
      const response = await postLogin({ params: { ...value } });
      alert('Вы вошли!');
      localStorage.setItem('jwt', JSON.stringify(response.data));
      setIsAuth(true);
      navigate('/profile');
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Авторизация</h2>
        <div className={styles.input_block}>
          <input
            type='text'
            className={clsx(styles.input, errors.email?.message && styles.error)}
            placeholder='Ваш email'
            {...register('email')}
          />
          <span className={clsx(styles.error_text)}>{errors.email?.message}</span>
        </div>
        <div className={styles.input_block}>
          <input
            type='password'
            className={clsx(styles.input, errors.password?.message && styles.error)}
            placeholder='Ваш пароль'
            {...register('password')}
          />
          <span className={clsx(styles.error_text)}>{errors.password?.message}</span>
        </div>

        <Link to='/auth' className={styles.link}>
          Register
        </Link>
        <button className={styles.btn}>Войти в аккаунт</button>
      </form>
    </div>
  );
};
