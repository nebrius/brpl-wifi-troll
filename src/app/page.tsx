"use client";

import { Connect } from "@/components/Connect";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onYesClick = () => {
    router.push("/emergency");
  };

  const onNoClick = () => {
    router.push("/ten-principles");
  };

  return (
    <div className={styles.page}>
      <p>Welcome to the Black Rock Public Library WiFi login page!</p>
      <p>
        Before you begin, you must agree to our Terms of Service. To determine
        the correct terms of service for you to agree to, we must ask you a few
        questions.
      </p>
      <div>
        Question one: is this an emergency?
        <div className={styles.emergencyButtonContainer}>
          <Connect onClick={onYesClick}>Yes</Connect>
          <Connect onClick={onNoClick}>No</Connect>
        </div>
      </div>
    </div>
  );
}
