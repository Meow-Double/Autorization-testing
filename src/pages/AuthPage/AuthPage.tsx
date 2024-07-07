import { useForm } from 'react-hook-form';
import styles from './AuthPage.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from './constans/RegisterSchema';
import clsx from 'clsx';
import { postUser } from '@/api/requests';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProfileContext } from '@/context/Profile/ProfileContext';

export const AuthPage = () => {
  // const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const { setIsAuth } = useContext(ProfileContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (value: RegisterSchema) => {
    try {
      const { confirmPassword, ...user } = value;
      const response = await postUser({ params: user, config: {} });
      if (response.status === 200) {
        alert('Пользователь зарегестрирован!');
        localStorage.setItem('jwt', JSON.stringify(response.data));
        setIsAuth(true);
        navigate('/profile');
      }
    } catch (error: any & Error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Регестрация</h2>
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
            type='text'
            className={clsx(styles.input, errors.name?.message && styles.error)}
            placeholder='Ваше имя'
            {...register('name')}
          />
          <span className={clsx(styles.error_text)}>{errors.name?.message}</span>
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
        <div className={styles.input_block}>
          <input
            type='password'
            className={clsx(styles.input, errors.confirmPassword?.message && styles.error)}
            placeholder='Повторите пароль'
            {...register('confirmPassword')}
          />
          <span className={clsx(styles.error_text)}>{errors.confirmPassword?.message}</span>
        </div>

        <Link to='/login' className={styles.link}>
          Login in
        </Link>
        <button className={styles.btn}>Зарегестрироваться</button>
      </form>
    </div>
  );
};
