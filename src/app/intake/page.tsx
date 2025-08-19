"use client";

import { Connect } from "@/components/Connect";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IntakePage() {
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/login");
  };

  const [artValue, setArtValue] = useState("");

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p>
        Before we can grant you access to the WiFi, we need to collect some
        information to determine if you are eligible.
      </p>
      <div className={styles.formRow}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="playa-name">Playa Name:</label>
        <input type="text" id="playa-name" name="playa-name" />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="crush2">
          Last person who had a crush on you who&apos;s heart you broke:
        </label>
        <input type="text" id="crush2" name="crush2" />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="art">
          Which art piece in Deep Playa is your favorite and why? Please answer
          in 250 characters or more.
        </label>
        <textarea
          id="art"
          name="art"
          minLength={250}
          value={artValue}
          onChange={(e) => setArtValue(e.currentTarget.value)}
        />
        {artValue.length < 250 ? (
          <span style={{ color: "red" }}>
            {250 - artValue.length} characters remaining
          </span>
        ) : artValue.length > 2000 ? (
          "What is wrong with you?"
        ) : artValue.length > 1000 ? (
          "Seriosuly, please stop"
        ) : artValue.length > 500 ? (
          "OK you can stop now"
        ) : (
          "You did it!"
        )}
      </div>
      <div className={styles.formRow}>
        <label>Why are you like this?</label>
        <div>
          <input type="radio" id="like-this-2" name="like-this" value="2" />
          <label htmlFor="like-this-2">
            My therapist says I developed an avoidant-dismissive attachment
            style due to my childhood experiences which causes me to push people
            away and freak out when anyone tries to get close to me and
            that&apos;s why I&apos;m alone
          </label>
        </div>
        <div>
          <input type="radio" id="like-this-3" name="like-this" value="3" />
          <label htmlFor="like-this-3">
            My therapist says I developed an anxious-preoccupied attachment
            style due to my childhood experiences which causes me to pull people
            too close and freak out when they try and exhibit any autonomy and
            that&apos;s why I&apos;m alone
          </label>
        </div>
        <div>
          <input type="radio" id="like-this-4" name="like-this" value="4" />
          <label htmlFor="like-this-4">
            Cause I&apos;m awesome! Most people I met are so banal and boring
            and everyone is caught up in the bullshit of their lives and refuses
            to see that if they just followed my example then they would be
            happy and content and that&apos;s why I&apos;m alone
          </label>
        </div>
        <div>
          <input type="radio" id="like-this-5" name="like-this" value="5" />
          <label htmlFor="like-this-5">I did too many mushrooms</label>
        </div>
      </div>
      <div className={styles.formRow}>
        <label>Yes or no?</label>
        <div>
          <input type="radio" id="like-this-5" name="like-this" value="5" />
          <label htmlFor="like-this-5">Yes</label>
        </div>
        <div>
          <input type="radio" id="like-this-5" name="like-this" value="5" />
          <label htmlFor="like-this-5">No</label>
        </div>
      </div>
      <div className={styles.formRow}>
        <Connect type="submit" disabled={artValue.length < 1000}>
          Connect
        </Connect>
      </div>
    </form>
  );
}
