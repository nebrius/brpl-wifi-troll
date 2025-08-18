import Image from "next/image";
import styles from "./styles.module.css";

export default function EmergencyPage() {
  return (
    <>
      <div className={styles.stopContainer}>
        <div className={styles.stop}>
          <Image src="/stop.jpg" alt="Stop" fill />
        </div>
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
