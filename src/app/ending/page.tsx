"use client";

import { Connect } from "@/components/Connect";
import { JSX, useState } from "react";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

type Ending = "good" | "ehh" | "bad";

export default function Ending() {
  const [currentStep, setCurrentStep] = useState(0);
  const onclick = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const answer = useSearchParams().get("answer")?.toLowerCase();

  let ending: Ending;
  if (
    !answer ||
    answer.includes("mayan warrior") ||
    answer.includes("Mayan Warrior")
  ) {
    ending = "bad";
  } else if (answer.includes("pulpo")) {
    ending = "good";
  } else {
    ending = "ehh";
  }

  const steps: Record<
    Ending,
    { content: JSX.Element; button: JSX.Element | string }[]
  > = {
    good: [
      {
        content: (
          <>
            <p>
              You are correct. El Pulpo Magnifico is in fact the best art car on
              playa!
            </p>
          </>
        ),
        button: "Connect",
      },
      {
        content: (
          <>
            <p>I am happy to announce that you have made it to the end.</p>
          </>
        ),
        button: "Connect!",
      },
      {
        content: (
          <>
            <p>
              You will now be connected to the Black Rock Public Library WiFi
            </p>
          </>
        ),
        button: "Finally",
      },
      {
        content: (
          <p>
            You are about to experience the sheer joy and wonder that is the
            Black Rock Public Library WiFi
          </p>
        ),
        button: "You're not going to stop, are you",
      },
      {
        content: <p>I am so excited we&apos;re on this journey together</p>,
        button: "Oh FFS!!!",
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
              satellite internet connection, bring it to us, and we&apos;ll use
              it to connect this WiFi to the internet.
            </p>
            <p>Enjoy!</p>
          </>
        ),
        button: "",
      },
    ],
    ehh: [
      {
        content: (
          <>
            <p>
              {answer} is not the best art car on Playa. But I can&apos;t fault
              you for your answer
            </p>
            <p>I suppose I could let you in, just this once.</p>
          </>
        ),
        button: "Connect",
      },
      {
        content: (
          <p>
            I mean, I&apos;m not supposed to. I actually could get in trouble
            for this. But you won&apos;t tell anyone, right?
          </p>
        ),
        button: "Connect!",
      },
      {
        content: (
          <>
            <p>You seem like a standup person. I want to trust you.</p>
            <p>The previous person seemed trustworthy too. But they blabbed.</p>
          </>
        ),
        button: <>I mean...</>,
      },
      {
        content: (
          <p>It&apos;s OK though, they&apos;ll never access the WiFi again.</p>
        ),
        button: <>Seriously, what is wrong with you!</>,
      },
      {
        content: <p>I made sure of that.</p>,
        button: "Oh FFS!!!",
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
              satellite internet connection, bring it to us, and we&apos;ll use
              it to connect this WiFi to the internet.
            </p>
            <p>Enjoy!</p>
          </>
        ),
        button: "",
      },
    ],
    bad: [
      {
        content: (
          <>
            {answer ? (
              <p>
                {answer} isn&apos;t even in the top 50% of art cars on playa
              </p>
            ) : (
              <p>You didn&apos;t even answer the question.</p>
            )}
          </>
        ),
        button: "Connect",
      },
      {
        content: (
          <>
            <p>You&apos;re just toying with me now, aren&apos;t you.</p>
            <p>Why would you play such a cruel joke on me?</p>
          </>
        ),
        button: "No...I...",
      },
      {
        content: <p>And here I thought we were friends.</p>,
        button: "Seriously...",
      },
      {
        content: (
          <>
            <p>
              We spent so much time together. Getting to know each other. Asking
              each other deep questions.
            </p>
          </>
        ),
        button: <>They weren&apos;t deep</>,
      },
      {
        content: (
          <>
            <p>Did it all mean nothing to you?</p>
          </>
        ),
        button: "Oh FFS!!!",
      },
      {
        content: (
          <>
            <p>
              I guess...I guess...I just have to accept that it is I, the Black
              Rock Public Library WiFi, who is all alone.
            </p>
          </>
        ),
        button: "",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>{steps[ending][currentStep].content}</div>
      <div className={styles.cta}>
        {currentStep < steps[ending].length - 1 && (
          <Connect onClick={onclick}>
            {steps[ending][currentStep].button}
          </Connect>
        )}
      </div>
    </div>
  );
}
