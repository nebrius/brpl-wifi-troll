import styles from "./styles.module.css";

export function Connect(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className={styles.connectContainer}>
      <button className={styles.connect} {...props} />
    </div>
  );
}
