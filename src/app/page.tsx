import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p>Welcome to the Black Rock Public Library WiFi login page!</p>
      <p>
        Before you begin, you must agree to our Terms of Service. To determine
        the correct terms of service for you to agree to, we must ask you a few
        questions.
      </p>
      <p>
        Question one: is this an emergency?
        <Link className={styles.linkMargin} href="/emergency">
          Yes
        </Link>
        <Link className={styles.linkMargin} href="/login">
          No
        </Link>
      </p>
    </div>
  );
}
