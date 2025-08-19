"use client";

import { Connect } from "@/components/Connect";
import { getPreviousPerson } from "@/state";
import { useState } from "react";
import styles from "./styles.module.css";

export default function LoginSuccessPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const onclick = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const steps = [
    {
      content: (
        <>
          <p>
            You know that you entered the wrong information every time, right? I
            mean, that&apos;s a lot of incorrect guesses.
          </p>
          <p>
            Sigh, I suppose I should give you an A for effort and let you in.
          </p>
        </>
      ),
      button: "Connect",
    },
    {
      content: (
        <p>
          I mean, I&apos;m not supposed to. I actually could get in trouble for
          this. But you won&apos;t tell anyone, right?
        </p>
      ),
      button: "Connect!",
    },
    {
      content: (
        <p>
          You seem like a standup person. I want to trust you. The previous
          person {getPreviousPerson()} seemed trustworthy too. But they blabbed.
        </p>
      ),
      button: "Connect already!!",
    },
    {
      content: (
        <p>It&apos;s OK though, they&apos;ll never access the WiFi again.</p>
      ),
      button: (
        <div>
          <div>Seriously, what is</div>
          <div>
            wrong with <em>you!</em>
          </div>
        </div>
      ),
    },
    {
      content: <p>I made sure of that.</p>,
      button: "FFS!!!",
    },
    {
      content: (
        <>
          <p>
            And so now, I welcome you to the Black Rock Public Library Wifi!
          </p>
          <p>The best place not on the internet!</p>
          <p>
            If you would like to connect to the internet, please find a
            satellite internet connection, bring it to us, and we&apos;ll use it
            to connect this WiFi to the internet.
          </p>
          <p>Enjoy!</p>
        </>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>{steps[currentStep].content}</div>
      <div className={styles.cta}>
        {currentStep < steps.length - 1 && (
          <Connect onClick={onclick}>{steps[currentStep].button}</Connect>
        )}
      </div>
    </div>
  );
}
