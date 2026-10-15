import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const stages = [
  { id: "install", n: "01", label: "Install" },
  { id: "brand", n: "02", label: "Brand" },
  { id: "handoff", n: "03", label: "Handoff" },
  { id: "channels", n: "04", label: "Channels" },
  { id: "topics", n: "05", label: "Topics" },
  { id: "operate", n: "06", label: "Operate" },
];

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
      <header className="border-b border-line pb-6">
        <p className="text-sm font-semibold tracking-wide text-teal uppercase">
          Study brief · setup through operations
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
          Virtual Agent Implementation
        </h1>
        <p className="mt-4 text-lg leading-snug text-ink">
          A Virtual Agent is useful only when people can reach it, the
          conversations finish real work, and someone watches what happens
          after go-live. This brief condenses that path.
        </p>
      </header>

      <nav aria-label="Sections" className="no-print mt-6 flex flex-wrap gap-2">
        {stages.map((stage) => (
          <a
            key={stage.id}
            href={`#${stage.id}`}
            className="rounded-full border border-line bg-card px-3 py-2 text-sm font-semibold text-ink hover:border-teal hover:text-teal"
          >
            {stage.n} {stage.label}
          </a>
        ))}
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-teal px-3 py-2 text-sm font-semibold text-card"
        >
          Print brief
        </button>
      </nav>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-card p-4">
          <h2 className="font-display text-xl text-ink">First half</h2>
          <p className="mt-2 text-muted">
            Install Virtual Agent, put it on Service Portal, iOS, and Android,
            brand the chat client, turn on live-agent handoff, and connect
            pre-built enterprise messaging apps.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-teal-soft p-4">
          <h2 className="font-display text-xl text-ink">Second half</h2>
          <p className="mt-2 text-ink">
            Plan, design, build, test, and publish topics. Localize them,
            move them between instances, then use notifications and
            Conversational Analytics to improve what is live.
          </p>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="outcomes">
        <h2 id="outcomes" className="font-display text-2xl text-ink">
          What you should be able to do
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            Install and configure Virtual Agent on Service Portal, iOS, and
            Android, including client branding and live-agent handoff.
          </li>
          <li>
            Plan, build, test, and publish topics, and localize conversations
            for more than one language.
          </li>
          <li>
            Deploy topics between instances, and connect Virtual Agent to
            third-party messaging apps with pre-built integrations.
          </li>
          <li>
            Read Virtual Agent notifications and Conversational Analytics so
            you can monitor and report on topic performance.
          </li>
        </ol>
      </section>

      <Section
        id="install"
        n="01"
        title="Install and verify the clients"
      >
        <p>
          Start on the Conversational Interfaces home page. If Virtual Agent is
          not active, install it (Glide Virtual Agent). Hands-on work in the
          course begins by <strong>verifying the plugins</strong> — do not
          brand or publish until the pieces you need are actually on.
        </p>
        <p>Then make the bot available on each supported surface:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Service Portal</strong> — enable the portal web client so
            chat is a real entry point, not only a configured record.
          </li>
          <li>
            <strong>Apple iOS</strong> and <strong>Google Android</strong> —
            the ServiceNow mobile clients, so the same assistant is available
            off the desktop portal.
          </li>
        </ul>
        <p>
          Where the line of business already has them, install prebuilt
          conversation content (ITSM, HR, and similar store apps). That gives
          you topics to adapt instead of a blank designer.
        </p>
      </Section>

      <Section id="brand" n="02" title="Brand the client and open it">
        <p>
          The client is the chat window the requester sees. Configure name,
          icon, colors, logo, and greeting so the bot looks like the
          organization, then <strong>enable the portal web client</strong> and
          open it as a user. Branding that nobody can launch does not count as
          implemented.
        </p>
        <Callout>
          This client is the Virtual Agent chat surface (portal, mobile, and
          later messaging). It is not Agent Client Collector, the ITOM agent
          used for discovery and monitoring.
        </Callout>
      </Section>

      <Section id="handoff" n="03" title="Enable live agent handoff">
        <p>
          Virtual Agent should finish routine requests and transfer the rest.
          Turn on handoff so a conversation can move to a person with context
          still attached: what the user already said, and which topic they were
          in. Routing lands in the live chat setup your instance uses, often
          through Advanced Work Assignment queues.
        </p>
        <p>
          Test both exits. A topic that only works when the bot succeeds, and
          a transfer that drops the user into an empty queue, are both
          incomplete.
        </p>
      </Section>

      <Section
        id="channels"
        n="04"
        title="Connect pre-built messaging apps"
      >
        <p>
          The same topics should run where people already work. Use the
          supported, pre-built integrations — commonly Microsoft Teams and
          Slack, plus any other store integration the instance is licensed for
          — rather than a custom chat adapter.
        </p>
        <p>
          Install the integration, connect the channel, and confirm a topic
          that already works on the portal also runs there. Channel branding
          (bot name and icon) is part of that connection, not a separate
          product.
        </p>
      </Section>

      <Section
        id="topics"
        n="05"
        title="Plan, build, test, and publish topics"
      >
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Plan.</strong> Choose topics from real demand: high-volume
            incidents, catalog requests, knowledge questions, and repetitive
            agent work. Decide what “better” means (fewer transfers, finished
            requests) before you draw a flow.
          </li>
          <li>
            <strong>Design.</strong> Map how the user starts, where the flow
            branches, which platform data personalizes the reply, what happens
            when a search is empty, when to hand off, and how feedback is
            captured. Close dead ends on the map.
          </li>
          <li>
            <strong>Build.</strong> In Virtual Agent Designer, keep each topic
            to one job. Prefer standard text, links, and cards over custom HTML
            so the topic still renders on portal, mobile, and messaging
            clients. Script only where the nodes are not enough.
          </li>
          <li>
            <strong>Test.</strong> Run the happy path and the failures: bad
            input, no results, and the live-agent branch.
          </li>
          <li>
            <strong>Publish.</strong> Unpublished topics do not serve users.
            Publish after the test pass, not before.
          </li>
        </ol>
      </Section>

      <section className="mt-8" aria-labelledby="move">
        <h2 id="move" className="font-display text-2xl text-ink">
          Languages and moving topics
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-card p-4">
            <h3 className="font-semibold text-ink">Localize</h3>
            <p className="mt-2 text-muted">
              Turn on the languages you will actually support and translate
              the conversation text. Re-test each language. A flow that is
              clear in one locale can break when labels get longer or a choice
              no longer matches the utterance.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-card p-4">
            <h3 className="font-semibold text-ink">Deploy between instances</h3>
            <p className="mt-2 text-muted">
              Build and test in a lower environment, then move the topics to
              the next instance. After the move, check plugins, the client, and
              channel connections again. Topic records can travel while
              instance-specific setup stays behind.
            </p>
          </div>
        </div>
      </section>

      <Section id="operate" n="06" title="Notifications, then the numbers">
        <p>
          <strong>Notifications</strong> keep the requester informed when a
          conversation continues outside the open chat — a handoff, an async
          action, or a channel that is not the portal. Silence after a
          transfer is an implementation gap.
        </p>
        <p>
          <strong>Conversational Analytics</strong> is how you report on what
          shipped. Use the dashboard and widgets to see which topics run,
          which finish, which transfer to a person, and which nobody uses.
          That is the input for the next edit: rewrite, retire, or add.
        </p>
        <p>
          Launch is not the end. People have to be able to find the bot, and
          the topics should change when the data says they are failing.
        </p>
      </Section>

      <section className="mt-8 rounded-xl border border-line bg-amber-soft p-4" aria-labelledby="check">
        <h2 id="check" className="font-display text-2xl text-ink">
          Field checklist
        </h2>
        <p className="mt-1 text-sm text-amber">
          These match the course hands-on anchors: verify plugins, brand the
          client, enable the portal web client — then carry the topic through
          publish and measurement. A knowledge check closes the course.
        </p>
        <ul className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2">
          {checklist.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-8 border-t border-line pt-4 text-sm text-muted">
        Condensed from the Virtual Agent Implementation course path and the
        usual implementer sequence: prepare the clients, design the
        conversations, publish only what you tested, and operate from analytics.
      </footer>
    </main>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-8 scroll-mt-6 border-t border-line pt-6">
      <p className="text-sm font-semibold tracking-wide text-teal">{n}</p>
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-4 border-teal bg-teal-soft px-4 py-3 text-ink">
      {children}
    </p>
  );
}

const checklist = [
  "Plugins verified before configuration",
  "Service Portal, iOS, and Android clients in place",
  "Chat client branded",
  "Portal web client enabled and opened by a test user",
  "Live agent handoff tested, including context",
  "At least one pre-built messaging integration connected",
  "Topics chosen from real demand",
  "Flows designed, built, tested, then published",
  "Each supported language retested",
  "Topics moved to the target instance and rechecked",
  "Notifications configured",
  "Conversational Analytics reviewed after go-live",
];
