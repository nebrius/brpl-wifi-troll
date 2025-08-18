"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [seconds, setSeconds] = useState(15);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        router.push("/loginSuccess");
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [router, seconds]);

  const handleSubmit = () => {
    alert("Incorrect credentials");
  };

  return (
    <>
      <p>Please enter your library card number and PIN to access the WiFi</p>
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
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
