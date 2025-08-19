"use client";

import { Connect } from "@/components/Connect";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [seconds, setSeconds] = useState(60);
  const router = useRouter();

  const [tries, setTries] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        router.push("/loginFailure");
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [router, seconds]);

  const handleSubmit = () => {
    setTries((tries) => tries + 1);
    alert("Incorrect credentials");
  };

  useEffect(() => {
    if (tries === 3) {
      router.push("/loginSuccess");
    }
  }, [router, tries]);

  return (
    <>
      <p>
        Please enter your personal information to access the WiFi. This
        information was supplied to you last Burn. You kept it in a safe place
        like you said you would, right?
      </p>
      <p>
        Library card number: <input type="text" />
      </p>
      <p>
        PIN: <input type="password" />
      </p>
      <p>
        You have {seconds} seconds to enter your credentials before your device
        is permanently banned from using the WiFi.
      </p>
      <Connect onClick={handleSubmit} type="submit">
        Connect
      </Connect>
    </>
  );
}
