import styles from './ActivateLink.module.css';

interface ActivateLinkProps {
  email: string | undefined;
}

export const ActivateLink = ({ email }: ActivateLinkProps) => {
  const newEmail =
    email && email.substr(0, 2) + email.slice(2, -2).replace(/[^\s]/g, '*') + email.substr(-2);

  return (
    <div className={styles.inner}>
      <h3 className={styles.title}>Активируйте свой аккаунт!</h3>
      <p className={styles.text}>
        Вам на почту ({newEmail}) была выслана ссылка активации, подтвердите свою почту, перейдя по
        ней
      </p>
    </div>
  );
};
