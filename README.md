# Virtual Agent Implementation

A Virtual Agent is useful only when people can reach it, the conversations finish real work, and someone watches what happens after go-live. This brief condenses that path: setup through ongoing operation.

Study notes for the ServiceNow **Virtual Agent Implementation** course. The chat client here is the Virtual Agent surface (portal, mobile, messaging). It is not Agent Client Collector, the ITOM agent used for discovery and monitoring.

## Course map

| Half | What it covers |
| --- | --- |
| First half | Install Virtual Agent, put it on Service Portal, iOS, and Android, brand the chat client, turn on live-agent handoff, and connect pre-built enterprise messaging apps. |
| Second half | Plan, design, build, test, and publish topics. Localize them, move them between instances, then use notifications and Conversational Analytics to improve what is live. |

## What you should be able to do

1. Install and configure Virtual Agent on Service Portal, iOS, and Android, including client branding and live-agent handoff.
2. Plan, build, test, and publish topics, and localize conversations for more than one language.
3. Deploy topics between instances, and connect Virtual Agent to third-party messaging apps with pre-built integrations.
4. Read Virtual Agent notifications and Conversational Analytics so you can monitor and report on topic performance.

## 01 · Install and verify the clients

Start on the Conversational Interfaces home page. If Virtual Agent is not active, install it (Glide Virtual Agent). Hands-on work begins by **verifying the plugins**. Do not brand or publish until the pieces you need are actually on.

Then make the bot available on each supported surface:

- **Service Portal.** Enable the portal web client so chat is a real entry point, not only a configured record.
- **Apple iOS and Google Android.** The ServiceNow mobile clients, so the same assistant is available off the desktop portal.

Where the line of business already has them, install prebuilt conversation content (ITSM, HR, and similar store apps). That gives you topics to adapt instead of a blank designer.

## 02 · Brand the client and open it

The client is the chat window the requester sees. Configure name, icon, colors, logo, and greeting so the bot looks like the organization, then **enable the portal web client** and open it as a user. Branding that nobody can launch does not count as implemented.

> This client is the Virtual Agent chat surface (portal, mobile, and later messaging). It is not Agent Client Collector.

## 03 · Enable live agent handoff

Virtual Agent should finish routine requests and transfer the rest. Turn on handoff so a conversation can move to a person with context still attached: what the user already said, and which topic they were in. Routing lands in the live chat setup your instance uses, often through Advanced Work Assignment queues.

Test both exits. A topic that only works when the bot succeeds, and a transfer that drops the user into an empty queue, are both incomplete.

## 04 · Connect pre-built messaging apps

The same topics should run where people already work. Use the supported, pre-built integrations — commonly Microsoft Teams and Slack, plus any other store integration the instance is licensed for — rather than a custom chat adapter.

Install the integration, connect the channel, and confirm a topic that already works on the portal also runs there. Channel branding (bot name and icon) is part of that connection, not a separate product.

## 05 · Plan, build, test, and publish topics

1. **Plan.** Choose topics from real demand: high-volume incidents, catalog requests, knowledge questions, and repetitive agent work. Decide what “better” means (fewer transfers, finished requests) before you draw a flow.
2. **Design.** Map how the user starts, where the flow branches, which platform data personalizes the reply, what happens when a search is empty, when to hand off, and how feedback is captured. Close dead ends on the map.
3. **Build.** In Virtual Agent Designer, keep each topic to one job. Prefer standard text, links, and cards over custom HTML so the topic still renders on portal, mobile, and messaging clients. Script only where the nodes are not enough.
4. **Test.** Run the happy path and the failures: bad input, no results, and the live-agent branch.
5. **Publish.** Unpublished topics do not serve users. Publish after the test pass, not before.

## Languages and moving topics

**Localize.** Turn on the languages you will actually support and translate the conversation text. Re-test each language. A flow that is clear in one locale can break when labels get longer or a choice no longer matches the utterance.

**Deploy between instances.** Build and test in a lower environment, then move the topics to the next instance. After the move, check plugins, the client, and channel connections again. Topic records can travel while instance-specific setup stays behind.

## 06 · Notifications, then the numbers

**Notifications** keep the requester informed when a conversation continues outside the open chat — a handoff, an async action, or a channel that is not the portal. Silence after a transfer is an implementation gap.

**Conversational Analytics** is how you report on what shipped. Use the dashboard and widgets to see which topics run, which finish, which transfer to a person, and which nobody uses. That is the input for the next edit: rewrite, retire, or add.

Launch is not the end. People have to be able to find the bot, and the topics should change when the data says they are failing.

## Field checklist

These match the course hands-on anchors: verify plugins, brand the client, enable the portal web client — then carry the topic through publish and measurement. A knowledge check closes the course.

- [ ] Plugins verified before configuration
- [ ] Service Portal, iOS, and Android clients in place
- [ ] Chat client branded
- [ ] Portal web client enabled and opened by a test user
- [ ] Live agent handoff tested, including context
- [ ] At least one pre-built messaging integration connected
- [ ] Topics chosen from real demand
- [ ] Flows designed, built, tested, then published
- [ ] Each supported language retested
- [ ] Topics moved to the target instance and rechecked
- [ ] Notifications configured
- [ ] Conversational Analytics reviewed after go-live

---

Condensed from the Virtual Agent Implementation course path and the usual implementer sequence: prepare the clients, design the conversations, publish only what you tested, and operate from analytics.
