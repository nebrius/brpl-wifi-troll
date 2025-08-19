import styles from "./styles.module.css";

export default function EmergencyPage() {
  return (
    <>
      <div className={styles.stopContainer}>
        <img className={styles.stop} src="/stop.jpg" alt="Stop" />
      </div>
      <p>Do not use this WiFi for emergency purposes!</p>
      <p>
        Find the nearest Black Rock Ranger, or go to Ranger Headquarters at 6:30
        and Esplanade. You can also ask a librarian for help.
      </p>
      <p>THIS WIFI WILL NOT HELP YOU!</p>
    </>
  );
}
