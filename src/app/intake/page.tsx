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

  const [nameValue, setNameValue] = useState("");
  const [playaNameValue, setPlayaNameValue] = useState("");
  const [crushValue, setCrushValue] = useState("");
  const [artValue, setArtValue] = useState("");
  const [likeThisValue, setLikeThisValue] = useState("");
  const [yesNoValue, setYesNoValue] = useState("");

  const isFormValid =
    nameValue.length > 0 &&
    playaNameValue.length > 0 &&
    crushValue.length > 0 &&
    artValue.length >= 250 &&
    likeThisValue.length > 0 &&
    yesNoValue.length > 0;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p>
        Before we can grant you access to the WiFi, we need to collect some
        information to determine if you are eligible. All fields are required.
      </p>
      <div className={styles.formRow}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="playa-name">Playa Name:</label>
        <input
          type="text"
          id="playa-name"
          name="playa-name"
          value={playaNameValue}
          onChange={(e) => setPlayaNameValue(e.target.value)}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="crush">
          Last person who had a crush on you who&apos;s heart you broke:
        </label>
        <input
          type="text"
          id="crush"
          name="crush"
          value={crushValue}
          onChange={(e) => setCrushValue(e.target.value)}
        />
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
      <fieldset id="like-this" className={styles.formRow}>
        <legend>Why are you like this?</legend>
        <div>
          <input
            type="radio"
            id="like-this-1"
            name="like-this"
            value="1"
            checked={likeThisValue === "1"}
            onChange={(e) => setLikeThisValue(e.target.value)}
          />
          <label htmlFor="like-this-1">
            My therapist says I developed an avoidant-dismissive attachment
            style due to my childhood experiences which causes me to push people
            away and freak out when anyone tries to get close to me and
            that&apos;s why I&apos;m alone
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="like-this-2"
            name="like-this"
            value="2"
            checked={likeThisValue === "2"}
            onChange={(e) => setLikeThisValue(e.target.value)}
          />
          <label htmlFor="like-this-2">
            My therapist says I developed an anxious-preoccupied attachment
            style due to my childhood experiences which causes me to pull people
            too close and freak out when they try and exhibit any autonomy and
            that&apos;s why I&apos;m alone
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="like-this-3"
            name="like-this"
            value="3"
            checked={likeThisValue === "3"}
            onChange={(e) => setLikeThisValue(e.target.value)}
          />
          <label htmlFor="like-this-3">
            Cause I&apos;m awesome! Most people I met are so banal and boring
            and everyone is caught up in the bullshit of their lives and refuses
            to see that if they just followed my example then they would be
            happy and content and that&apos;s why I&apos;m alone
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="like-this-4"
            name="like-this"
            value="4"
            checked={likeThisValue === "4"}
            onChange={(e) => setLikeThisValue(e.target.value)}
          />
          <label htmlFor="like-this-4">I did too many mushrooms</label>
        </div>
      </fieldset>
      <fieldset id="yes-no" className={styles.formRow}>
        <legend>Yes or no?</legend>
        <div>
          <input
            type="radio"
            id="yes"
            name="yes-no"
            value="yes"
            checked={yesNoValue === "yes"}
            onChange={(e) => setYesNoValue(e.target.value)}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input
            type="radio"
            id="no"
            name="yes-no"
            value="no"
            checked={yesNoValue === "no"}
            onChange={(e) => setYesNoValue(e.target.value)}
          />
          <label htmlFor="no">No</label>
        </div>
      </fieldset>
      <div className={styles.formRow}>
        <Connect type="submit" disabled={!isFormValid}>
          Connect
        </Connect>
      </div>
    </form>
  );
}
