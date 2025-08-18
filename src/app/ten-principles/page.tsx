"use client";

import { Connect } from "@/components/Connect";
import { useRouter } from "next/navigation";

export default function TenPrinciplesPage() {
  const router = useRouter();
  const onclick = () => {
    router.push("/intake");
  };

  return (
    <>
      <h1>Black Rock Public Library WiFi Terms of Service</h1>
      <p>
        By connecting to this WiFi, you hereby agree to our WiFi terms of
        service. These terms are binding for all eternity, even in the event of
        death, dismemberment, or getting run over by an art car cause you were
        so high you thought it needed a hug. It didn&apos;t.
      </p>

      <ol className="principle-list">
        <li>
          <strong>Radical Inclusion:</strong> Anyone may use this WiFi. Yes,
          even influencers who are ruining Burning man for everyone else and
          should be banned from the human race. We welcome and respect all
          bandwidth hogs, crypto miners, and people who stream 4K videos during
          peak hours and ruin WiFi for everyone else. No prerequisites exist for
          participation except a functioning device and the audacity to believe
          you deserve free WiFi.
        </li>

        <li>
          <strong>Gifting:</strong> The value of free WiFi is innate and
          unconditional, which is why you shouldn&apos;t complain when it&apos;s
          slower than dial-up from 1995. Gifting does not contemplate a return,
          so don&apos;t expect technical support, customer service, or any
          acknowledgment of your existence.
        </li>

        <li>
          <strong>Decommodification:</strong> Our WiFi seeks to create a social
          environment unmediated by commercial sponsorships, transactions, or
          advertising. This means you agree to ignore all the ads we&apos;ll
          inevitably inject into your browsing experience and pretend this
          isn&apos;t a cost-cutting measure disguised as philosophical
          enlightenment.
        </li>

        <li>
          <strong>Radical Self-reliance:</strong> You are encouraged to
          discover, exercise and rely on your inner resources. This means
          figuring out your own password reset, troubleshooting your connection
          issues, troubleshooting our connection issues, supplying an actual
          connection to the internet, and in general not bothering us. For
          anything. Ever.
        </li>

        <li>
          <strong>Radical Self-expression:</strong> Radical self-expression
          arises from the unique gifts of the individual. By using our WiFi, you
          agree that your unique gift to the world <em>must</em> be one of the
          following:
          <ul>
            <li>
              Posting angry rants on social media platforms about politics that
              exactly mimic the last 10,000 posts and contribute nothing new to
              the conversation and speed up the collapse of society
            </li>
            <li>
              Lying to the world and yourself on Instagram that you&apos;re
              having a great time when in fact you&apos;re miserable right now.
              And generally.
            </li>
            <li>
              Posting photos of your cat that isn&apos;t even on playa and, in
              fact, doesn&apos;t even exist
            </li>
            <li>
              Checking your dating profile to see if anyone matched with you
              that is actually a decent person for once. No one did.
            </li>
          </ul>
        </li>

        <li>
          <strong>Communal Effort:</strong> Our community values creative
          cooperation and collaboration. This means you&apos;ll share bandwidth
          with everyone else and pretend to enjoy the communal experience of
          collectively 2 hours to send a text to your loved one while someone
          else is streaming the latest episode of MILF Manor.
        </li>

        <li>
          <strong>Civic Responsibility:</strong> We value civil society and
          actively participate in the civic processes. By agreeing to these
          terms, you commit to respectfully ignoring all security warnings,
          clicking &quot;Accept All Cookies&quot; without reading, and
          maintaining the illusion that any of us actually read terms of
          service.
        </li>

        <li>
          <strong>Leaving No Trace:</strong> We are committed to leaving no
          physical trace of our activities. However, we make no promises about
          the digital traces, cookies, tracking pixels, and behavioral data
          we&apos;ll leave scattered across the WiFi like playa dust in your
          tent. You&apos;re welcome.
        </li>

        <li>
          <strong>Participation:</strong> We believe that transformative change
          occurs through the deep personal participation of every individual.
          Your participation in consuming our &quot;free&quot; WiFi transforms
          you into a data point in our analytics dashboard, which is frankly
          more transformative than most art installations.
        </li>

        <li>
          <strong>Immediacy:</strong> Immediate experience is the most important
          touchstone in our culture. The immediate experience of frustration
          when Netflix buffers during the climax of your show is a profound
          meditation on the nature of desire and technological dependency.
        </li>
      </ol>

      <p className="fine-print">
        By clicking &quot;Connect,&quot; you acknowledge that you&apos;ve read
        these principles with the same level of attention most people give to
        software license agreements, and that any resemblance to actual radical
        philosophy is purely coincidental. May your downloads be swift and your
        uploads...oh who are we kidding, you&apos;re going to be incapable of
        downloading a single byte.
      </p>
      <Connect onClick={onclick}>Connect</Connect>
    </>
  );
}
