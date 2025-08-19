"use client";

import { Connect } from "@/components/Connect";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [seconds, setSeconds] = useState(15);
  const router = useRouter();
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        router.push(`/ending?answer=${encodeURIComponent(value)}`);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [router, seconds, value]);

  const handleSubmit = () => {
    router.push(`/ending?answer=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <p>What is the best art car on Playa?</p>
      <p>
        <input
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          type="text"
        />
      </p>
      <p>
        You have {seconds} seconds before your device is permanently banned from
        using the WiFi.
      </p>
      <Connect onClick={handleSubmit} type="submit">
        Connect
      </Connect>
    </>
  );
}
