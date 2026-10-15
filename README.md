# Virtual Agent Implementation

From plugin activation through continual monitoring. Each stage is the navigator path, the table or property that holds the setting, and the smallest thing that counts as done. Only **admin** can turn plugins and store apps on. After that, **virtual_agent_admin** builds the bot and **awa_admin** routes the live-agent handoff.

The configuration to-dos follow [Virtual Agent implementation checklist — a deeper dive](https://www.servicenow.com/community/virtual-agent-nlu-articles/virtual-agent-implementation-checklist-a-deeper-dive/ta-p/2306564) by **Victor Chen** (ServiceNow, published 24 July 2022, edited 24 March 2023). His workbook is in this repo as [VA checklist - deeper dive.xlsx](public/VA-checklist-deeper-dive.xlsx). The file properties list him as creator (25 July 2022). It has one sheet and three columns: the to-do, a docs link, and a Done checkbox. There are no extra rows beyond the list in section 11. This guide adds the navigator path. It is not a replacement for his write-up.

The chat client is the Virtual Agent surface. It is not Agent Client Collector.

## 00 · Bare minimum to stand a bot up

You do not design a custom conversation on day one. You need a starting point, one product choice, one portal, and at least one **published** topic. Unpublished topics are invisible.

### Choose the starting point

Not every organization starts the same way. Match the license before you touch a plugin.

**Full Virtual Agent license.** ITSM Pro, HRSD Pro, or Enterprise. The course company Cloud Dimensions is this case. Activate Glide Virtual Agent (`com.glide.cs.chatbot`) and follow the stages below.

**ITSM Standard, no full license.** Virtual Agent Lite is already on the instance (`com.glide.cs.chatbot.lite`). Do not install the full plugin. In Designer, review the prebuilt ITSM conversations, duplicate the ones you will use, and publish them.

Lite is a smaller product: NLU is limited, and there is no Conversational Analytics dashboard. It is still a working chat you can put on a portal, and it is the base you upgrade from when the full license arrives.

### Three roles, three jobs

The **admin** role is required to activate plugins and store applications. A Virtual Agent admin or an AWA admin cannot do that step. Once the plugins are active, those two roles do the rest of the implementation. They are not extra people standing next to the bot. They own two different halves of it.

- **admin** installs Glide Virtual Agent, the ITSM or HR conversations app, Agent Chat, Omni-Experience, Analytics, and Teams or Slack. On a domain-separated instance, do this from the global domain.
- **virtual_agent_admin** is the bot builder. Designer, greetings, branding, NLU, the portal chat experience, and publish. This role does not activate plugins. Give it to the person who will change topics after go-live, instead of leaving them on admin.
- **awa_admin** routes the live chat after the bot gives up. When the user asks for a person, or a topic hits **Handover to agent**, the conversation becomes an AWA work item. This role sets the chat service channel, the queues (a password topic can go to a different team than a hardware topic), and the assignment rules. It also sets presence (online, away, busy), skills, and how many chats an agent can hold, so the work item lands only on a qualified agent who is available in Agent Workspace. Path: `All › Advanced Work Assignment`. The person who answers needs **awa_agent**, not awa_admin.

One person who already has admin can do all three. The split matters when the bot builder is not the platform admin, and when the team that staffs live agents is not the team that writes topics.

1. **Confirm which bot you have.** `All › System Definition › Plugins`. If Glide Virtual Agent is missing and Lite is active, stay on the Lite path. Role: admin.
2. **Say what the bot is for.** ITSM, HR, or another line of business, and whether live agents are in scope. That answer is the plan. It is not a flowchart.
3. **Activate, only if you hold the full license.** Glide Virtual Agent (`com.glide.cs.chatbot`) and the matching store conversations (ITSM Virtual Agent Conversations). Lite already has its ITSM conversations. Do not install the full plugin on a Standard instance.
4. **Put it on one portal** and open `/sp` as a requester.
5. **Publish** the greeting plus one real topic (for example Check ticket status). Save is not publish.
6. **Watch it, if you have the full product.** After people use it, open Conversational Analytics. Lite has no such dashboard. Until you upgrade, your check is the three test places: Home, Designer, and the portal.

Skip mobile, Teams, custom branding, and extra languages until the portal conversation finishes a real request. Those are the same bot on more doors, not a second implementation.

## 01 · Conversational Interfaces Guided Setup

Guided Setup does not install a generic checklist. A short survey reads your entitlements and your answers, then builds the task list you actually see. Tasks sit in categories (plugins, chat clients, agent chat, and so on). Do them in the order shown.

`All › Guided Setup › Conversational Interfaces Guided Setup`

### Things to consider before you click through

Answer these on the setup page before you pick Quick or Manual. The page has three tabs: **General Setup**, **Virtual Agent Setup**, and **Agent Chat Setup**. General Setup decides who is in scope, who is allowed to configure it, where users will reach it, and how it should look. The other two tabs ask the same kind of questions for the bot and for live chat. A wrong answer here hides tasks you will need later.

- **What types of agents?** Live agents, Virtual Agent, or both. Virtual only drops the Agent Chat and AWA tasks. Live only drops topic design. Both keeps the handoff path in section 07.
- **Which roles?** System admin installs the plugins. Virtual Agent admin configures the bot. AWA admin configures the queues. Name the people before the task list appears, or the install stalls on a role nobody holds.
- **Which channels?** Web portals, ServiceNow Mobile, a supported messaging app (Slack, SMS with Twilio, Teams, Workplace), or a custom channel such as a proprietary chat app. Also decide who has admin access in that third-party app. Install only the channels you named. A custom channel is a build, not a store app.
- **Look and feel?** Corporate colors, logos and icons, support details such as email and hours, and the conversational lines: greeting, fallback, and closing. Colors and the logo are the branding record. The three lines are setup topics, not branding.

1. Select **Get Started**.
2. Open **Customize your setup** and select **Configure**.
3. Answer what kind of bot this is: ITSM, HR, ITBM, Field Service, and whether you also want **Workspace Agent Chat**. The task list drops work for products you did not select.
4. Choose **Quick setup** or **Manual setup**, then **Continue**.
5. Work the tasks top to bottom. Mark each one complete only after you have verified it (Designer opens, portal chat opens).

**Quick setup** is the minimum steps for a basic agent: plugins, one portal, branding optional, prebuilt topics. Use it when you want a working bot this week and you will not hand-build every topic.

**Manual setup** is the full list: every plugin, Virtual Agent, Agent Chat, Advanced Work Assignment, integrations, and notifications. Use it when you are implementing, not trialing. The course walks Manual so you see every task Quick would have hidden.

The first block (install and enable) is once per instance. Come back to the rest when you add a portal, a language, or a channel. On an upgrade, Guided Setup keeps tasks you already finished. Work done before this guided setup existed has to be selected by hand.

Home tiles are the same jobs without the survey: `All › Conversational Interfaces › Home`. Use Home when the guided list is already done and you are changing one thing.

## 02 · The plan is not the if-then

Yes, you need a plan of what the agent is allowed to do. That plan is a short list of jobs, not a script of every question.

**Plan — what the bot may do.** Write the jobs before you open Designer: reset a password, check an incident, order a laptop. Each job becomes one topic. Anything not on the list stays unpublished, so the bot cannot start it. The survey in Guided Setup is this plan in product form (ITSM, and live agent or not).

**Finding the topic is not if-then.** The user types a sentence. Virtual Agent matches **one intent per topic** (NLU) or the **Keywords** on Topic Properties. One match starts that topic. Several matches show a choice list. None runs the Fallback setup topic, or AI Search Fallback if you turned that on.

Property `com.glide.cs.max_number_display_topics` is how many matches to show. Default is 3. Keywords are the backup when NLU finds nothing, too many intents, or the language has no NLU model.

**If-then runs only after a topic has started.** Inside Designer, a **Decision** control branches on a value you already collected. Example: a Boolean “Add a comment?” If Yes, take the comment branch. If No, end. The Decision has no properties of its own. The condition sits on each branch (the first branch is labeled Always until you change it).

That if-then never chooses which topic to open. It only steers a conversation that has already begun. Prebuilt ITSM topics already contain these branches. You write new ones only when a published topic does not cover the job.

Setup topics are the frame around every job, not extra if-then: Greeting (Dynamic Greeting says the user’s name), Fallback, Anything Else, Closing, Survey, Live Agent Support. They are chosen on the chat experience, not discovered like a normal topic.

`All › Conversational Interfaces › Settings › Virtual Agent › Custom Greetings and Setup`

Survey odds: `com.glide.cs.survey.probability` (0.33 means the feedback topic appears in about a third of conversations). Topics live on `sys_cs_topic`. Both **Active** and **Published** must be true.

## 03 · Install and verify plugins

`All › Conversational Interfaces › Home`

1. If the home page says Virtual Agent is not installed, select **Get Virtual Agent plugin**, then **Start install**.
2. On the Applications page, Glide Virtual Agent (`com.glide.cs.chatbot`) is selected. Choose **Install/Update All**, then **Install**.
3. Back on Home, select **Get ITSM plugin** (or HR) and **Opt-in** on the Store app. Repeat for Conversational Analytics if you will report later.
4. Also install the store app **Omni-Experience Standard Feature Set**. Chen flags this next to the Virtual Agent plugins. It is the bundle behind the Conversational Interfaces admin console. Do not skip it because the Home page already looks finished.

Same plugin if the Home tile is missing:

`All › System Definition › Plugins`

1. Search **Glide Virtual Agent**. Select **Install**, then **Activate**. You need a Virtual Agent subscription. In a domain-separated instance, activate from the global domain.
2. Confirm it landed: `All › Collaboration › Virtual Agent › Designer`. Setup topics are active. Prebuilt ITSM topics stay inactive until you publish them.

Also expect the web client (`com.glide.cs.sn-va-web-client-app`), Designer (`com.snc.conversation_builder`), branding (`com.glide.cs.branding`), and platform topics. Do not brand until Designer opens.

## 04 · Brand the chat client

`All › Conversational Interfaces › Home › Edit your bot's look and feel › Set up branding`

Same form the long way:

`All › Conversational Interfaces › Settings › Display options › Branding › View All`

1. Select **New**, or open the branding record you will change. Records live on **Branding** (`sys_cs_branding_setup`).
2. Fill the chat fields:
   - **Name** — the label you will recognize later. The **branding key** is what portals and embedded clients actually reference.
   - **Header logo** — **Attach Image**. This is the logo in the chat header and, in a browser window, the tab icon. Replace it with **View image**. Remove it with the trash icon.
   - **Bot profile / avatar** — the picture beside bot messages. Use a square image (docs call out 144×144 for the premium-chat logo). Accepted types include jpg, png, gif, svg.
   - **Colors** — header, background, and the bot and user bubbles, where those fields are on the form. The console shows a subset. The table has more (agent bubble, bot bubble font). Add them with **Configure → Form Layout** if you need them.
   - **Menu items** — chat, phone, email, or your own. Save each menu item before leaving that section.
3. Select **Save** or **Update**. Copy the branding key.
4. Point a client at that key. A saved branding record does nothing until something references it.
   - **Portal:** on the Agent Chat configuration, set the branding, or pass `branding_key` from the configuration server script.
   - **Web client URL:** `$sn-va-web-client-app.do?sysparm_branding_key=your_key`
   - **Embedded page:** add `sysparm_branding_key=your_key` on the iframe `src`.
5. Open the portal as a requester. Confirm header logo, bot avatar, and colors before you call branding done.

## 05 · Enable the portal web client

`All › Conversational Interfaces › Home › Add your bot to a portal › Add to portal`

Same table without the tile:

`All › Service Portal › Agent Chat`

1. Open the base **Service Portal Agent Chat Config**, or select **New**.
2. **Name** — a unique name. Course labs often require a specific name such as `VA`.
3. **Portals** — select the lock, then the search icon, and choose **Service Portal** (or Employee Center). Empty means every portal.
4. **Order** — lowest number wins when two configs target the same portal. Only one config runs per portal.
5. **Active** — selected. Inactive means the launcher never appears.
6. Select **Submit** or **Update**. The record is on `sp_agent_chat_config`.
7. Open the portal (`/sp`) while logged in as a requester. The chat control should be on the page. Start a conversation and confirm the branding from the previous step.

## 06 · iOS and Android

There is no separate Virtual Agent install per phone. Requesters use **Now Mobile** (Apple App Store and Google Play) against this instance. Branding you saved in Conversational Interfaces is what mobile uses. You do not recolor the bot inside Mobile App Builder.

`All › System Mobile › Mobile App Builder`

1. Plugins already required: Glide Virtual Agent, plus the mobile app plugins for Now Mobile.
2. Create a function of type **Chat launcher**. Set context to **Global**.
3. Add that function as a quick action on the Now Mobile homepage (top corner, or the center item on the bottom bar in later releases).
4. Save, then force-close and reopen Now Mobile on the device so it picks up the applet.

If the instance uses assistants instead of the older launcher:

`All › Conversational Interfaces › Assistants › your assistant › Display experience › Mobile`

Select the mobile chat function, save, and refresh the app.

## 07 · Live agent handoff

Three layers have to agree. A topic node alone does not route anyone. The Virtual Agent admin publishes the handoff topic. The AWA admin makes a queue that can receive it. The platform admin is the one who activated Agent Chat.

### Turn Agent Chat on

`All › Conversational Interfaces › Home › Agent Chat`

1. Enable **Activate**. Set the transfer message (for example, “Please stand by while I connect you to a live agent.”). Save.
2. If the tile is missing, activate plugin **Agent Chat** (`com.glide.interaction.awa`) from **System Definition › Plugins**.

### Point the bot at a real handoff topic

`All › Conversational Interfaces › Settings › Virtual Agent › Custom Greetings and Setup`

1. Open the chat experience you use (often **Default chat experience**).
2. Set **Live Agent Context** to the base **Live Agent Support** topic. Save.
3. In Designer, confirm that topic is **Active** and **Published** (`sys_cs_topic.list`). On your own topics, drop in the **Handover to agent** control where the bot should give up.

### Give the work a queue

Role: **awa_admin**. The transfer is not finished when the bot says it is connecting you. AWA turns that chat into a work item and offers it only to an agent who is online, has the skill, and still has capacity.

`All › Advanced Work Assignment › Queues`

1. Confirm a **chat** service channel exists. A queue with no channel never receives the handoff.
2. Open the chat queue. Point specialized topics at the right team (passwords to identity, hardware to the desk). The work-item condition must match how interactions are created. They are created in **Work in Progress**. A condition that only matches **New** means agents never see the chat.
3. Set the assignment rule, agent skills, presence states (online, away, busy), and capacity. An agent at capacity, or marked away, must not receive the next transfer.
4. On `sys_cs_live_agent_setup.list`, set **ITSM Fulfiller UI** and **Global Fulfiller UI** to **Agent Workspace**, not Connect. Save.
5. Test twice: a topic that finishes in the bot, and a transfer that lands in Agent Workspace with the prior messages still on the interaction.

## 08 · Pre-built messaging apps

`All › System Applications › All Available Applications › All`

1. Install the store app for the channel you will actually use: **Conversational Integration with Microsoft Teams** or **Slack**. Opt in. Do not start with the custom chat adapter (`com.glide.cs.custom.adapter`). That is a build, not this course’s path.

`All › Conversational Interfaces › Settings › Integrations`

2. Open the provider (Teams or Slack). Complete the tenant or workspace link the page asks for, and set the bot name and icon for that channel. Those are channel fields. They do not replace the branding record.
3. Save. In the external app, send a phrase you know maps to a **published** topic. If the portal topic works and Teams does not, the topic is fine and the provider link is not.

## 09 · Build, test, publish, move

`All › Collaboration › Virtual Agent › Designer`

1. **Plan** before the canvas. Pick one job from incidents, catalog items, or repeated agent work. Write the branches on paper: start, choices, empty search, handoff, end.
2. **New** topic, or open an inactive prebuilt topic. Set name, description, and category. Keep keywords or NLU intents on that one intent only.
3. **Build** between Start and End. Use Text, Link, Card, and the record controls. Avoid custom HTML so portal, Now Mobile, and Teams render the same nodes. Script only when no control does the lookup.
4. **Test** with the Designer preview: happy path, a nonsense utterance, an empty lookup, and the handover node.
5. **Publish**. Until you publish, the topic stays off the requester’s topic list. Save is not publish.

Greeting and promoted topics are not on the topic canvas:

`All › Conversational Interfaces › Settings › Virtual Agent › Custom Greetings and Setup › Default chat experience`

6. On **Default chat experience**, set these by name. They ship with the ITSM conversations app:
   - **Greeting** — **Dynamic Greeting**. It addresses the user by name.
   - **Fallback** — **Search Fallback**.
   - If AI Search is on, use **AI Search - Fallback** instead, so a missed utterance returns search results rather than a dead end.
   - **Promoted Topics** — pin one topic people already ask for. It shows on the greeting.
7. Save. Re-open the portal and confirm the greeting uses the name, the promoted topic is visible, and a nonsense sentence hits search fallback rather than silence.

### Topic Recommendations, then NLU

`All › Conversational Interfaces › Virtual Agent › Topic Recommendations`

1. Install **Topic Recommendations** (`sn_topic_recommend`). It needs NLU Workbench and the ITSM Virtual Agent Conversations app. The page stays empty until you define a report.
2. Configure analysis on Incident, Request, live-agent transcripts, or Virtual Agent fallback utterances. Run it. You get a ranked list: topics Virtual Agent can already handle, and intents you would have to build.
3. For a match, **duplicate** the prebuilt topic. Do not publish the suggestion in place. Test the copy, then publish.

`All › Conversational Interfaces › Settings › Virtual Agent › NLU`

Turn NLU on for topic discovery. Map one intent to each topic. Setup-topic NLU is `com.glide.cs.nlu.topics`. Keywords stay as the backup.

### Where to test

Chen’s three places, in this order: the preview on **Conversational Interfaces Home**, the preview inside **Designer**, then the **portal** as a requester. Designer-only is not done.

### Languages

`Designer › Manage languages`

1. Turn on only the languages you will test. Request or enter translations for the topic text.
2. The plugin behind dynamic translation is `com.glide.cs.dynamic.translation.virtual_agent`. Re-run the preview in each language. A longer translated button label is a real defect, not a wording nit.

### Move the topic to another instance

`All › System Update Sets › Local Update Sets`

1. Set your update set to **In progress** before you change the topic, or the topic will not be in the set.
2. **Complete** the set, then on the target instance use **Retrieved Update Sets › Import › Preview › Commit**.
3. The topic can arrive while the portal config, branding key, queue, and Teams link stay behind. Repeat the portal, branding, and publish checks on the target. Then open the portal there.

## 10 · Notifications, then continual monitoring

### Notifications

`All › System Definition › Plugins`

1. Confirm **Virtual Agent Notification** (`com.glide.cs.notification`) is active. Actionable notifications are `com.glide.cs.actionable.notification`.
2. For Teams or Slack, enable the channel’s notification option on the same integration record you connected above. A handoff that only speaks inside the open portal window goes silent on the phone.
3. Trigger a transfer as a requester and confirm a notification actually arrives.

### Conversational Analytics

`All › Conversational Interfaces › Home`

1. Install the **Conversational Analytics** store app (`sn_ci_analytics`) if the dashboard tile is absent.
2. Open the dashboard. Read four numbers on a schedule, not once: topics that run, topics that finish, topics that transfer, topics with no traffic.
3. Rewrite or retire from that list, publish again, and read the same widgets after real use. Monitoring is that loop. A topic that only looks good in your test chats is not monitored.

## 11 · Deeper-dive checklist

Victor Chen’s to-dos, with the path under each one. The attached workbook is the same list, plus a docs link and a Done checkbox on each row. He assumes the earlier readiness work is already done: Knowledge Base in shape, Service Catalog ready for the bot to order from, and a change process for what you publish.

1. **Activate the Virtual Agent plugins.** `All › Conversational Interfaces › Home`. Glide Virtual Agent (`com.glide.cs.chatbot`), plus the **Omni-Experience Standard Feature Set** store app.
2. **Add the bot to the web portal.** `All › Conversational Interfaces › Home › Add to portal`, or `All › Service Portal › Agent Chat` (`sp_agent_chat_config`). Open `/sp` as a requester.
3. **Brand image and colors.** `All › Conversational Interfaces › Home › Set up branding`. Record on `sys_cs_branding_setup`. Apply the branding key or the portal still shows the default.
4. **Teams or Slack, including notifications.** `All › Conversational Interfaces › Settings › Integrations`. Install the store integration, connect the tenant, then turn notifications on for that channel.
5. **Conversational Analytics.** `All › Conversational Interfaces › Home`. Store app `sn_ci_analytics`. Open the dashboard and read it.
6. **ITSM or HRSD conversations.** ServiceNow Store, then opt in. `sn_itsm_va` or the HRSD conversations app. Topics stay inactive until you publish them.
7. **Topic Recommendations.** `All › Conversational Interfaces › Virtual Agent › Topic Recommendations` (`sn_topic_recommend`). Define a report, run it, duplicate a suggested topic, then test and publish the copy.
8. **Greetings and setup topics.** `All › Conversational Interfaces › Settings › Virtual Agent › Custom Greetings and Setup`. Dynamic Greeting, Search Fallback or AI Search - Fallback, and one Promoted topic.
9. **Agent Chat.** `All › Conversational Interfaces › Home › Agent Chat`. `com.glide.interaction.awa`, Live Agent Support published, an AWA queue, and the fulfiller UI on `sys_cs_live_agent_setup` set to Agent Workspace.
10. **NLU.** `All › Conversational Interfaces › Settings › Virtual Agent › NLU`. One intent per topic. Setup-topic model is `com.glide.cs.nlu.topics`. Keywords remain the backup.
11. **Create or duplicate a topic and publish.** `All › Collaboration › Virtual Agent › Designer`. `sys_cs_topic` needs Active and Published. Save is not publish.
12. **Mobile.** `All › System Mobile › Mobile App Builder`. Chat launcher, context Global, on the Now Mobile homepage. Or `Assistants › Display experience › Mobile`.
13. **Test in three places.** Home preview, then Designer preview, then the portal. Happy path, a nonsense utterance, an empty lookup, and the live-agent branch.
14. **Localize, if you need another language.** `Designer › Manage languages`, or Dynamic Translation (`com.glide.cs.dynamic.translation.virtual_agent`). Re-test each language.

## Done when

- [ ] Designer opens after Glide Virtual Agent is active
- [ ] Branding record saved and branding key applied
- [ ] Portal chat opens and shows that logo and avatar
- [ ] Now Mobile chat launcher opens the same bot
- [ ] Handoff reaches Agent Workspace with the transcript
- [ ] One published topic runs in Teams or Slack
- [ ] Topic was tested, then published, not only saved
- [ ] Each language you enabled was previewed
- [ ] Target instance recommitted the update set and rechecked the portal
- [ ] A transfer produced a notification
- [ ] Analytics shows finish vs transfer, not just your test user
