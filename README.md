# Virtual Agent Implementation

Click paths for the ServiceNow **Virtual Agent Implementation** course (Tokyo and later). Each stage is the navigator breadcrumb, then the fields you fill. Role is **admin** or **virtual_agent_admin** unless noted.

The chat client here is the Virtual Agent surface. It is not Agent Client Collector.

## 01 · Install and verify plugins

`All › Conversational Interfaces › Home`

1. If the home page says Virtual Agent is not installed, select **Get Virtual Agent plugin**, then **Start install**.
2. On the Applications page, Glide Virtual Agent (`com.glide.cs.chatbot`) is selected. Choose **Install/Update All**, then **Install**.
3. Back on Home, select **Get ITSM plugin** (or HR) and **Opt-in** on the Store app. Repeat for Conversational Analytics if you will report later.

Same plugin if the Home tile is missing:

`All › System Definition › Plugins`

1. Search **Glide Virtual Agent**. Select **Install**, then **Activate**. You need a Virtual Agent subscription. In a domain-separated instance, activate from the global domain.
2. Confirm it landed: `All › Collaboration › Virtual Agent › Designer`. Setup topics are active. Prebuilt ITSM topics stay inactive until you publish them.

Also expect the web client (`com.glide.cs.sn-va-web-client-app`), Designer (`com.snc.conversation_builder`), branding (`com.glide.cs.branding`), and platform topics. Do not brand until Designer opens.

## 02 · Brand the chat client

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

## 03 · Enable the portal web client

`All › Conversational Interfaces › Home › Add your bot to a portal › Add to portal`

Same table without the tile:

`All › Service Portal › Agent Chat`

1. Open the base **Service Portal Agent Chat Config**, or select **New**.
2. **Name** — a unique name. Course labs often require a specific name such as `VA`.
3. **Portals** — select the lock, then the search icon, and choose **Service Portal** (or Employee Center). Empty means every portal.
4. **Order** — lowest number wins when two configs target the same portal. Only one config runs per portal.
5. **Active** — selected. Inactive means the launcher never appears.
6. Select **Submit** or **Update**.
7. Open the portal (`/sp`) while logged in as a requester. The chat control should be on the page. Start a conversation and confirm the branding from the previous step.

## 04 · iOS and Android

There is no separate Virtual Agent install per phone. Requesters use **Now Mobile** (Apple App Store and Google Play) against this instance. Branding you saved in Conversational Interfaces is what mobile uses. You do not recolor the bot inside Mobile App Builder.

`All › System Mobile › Mobile App Builder`

1. Plugins already required: Glide Virtual Agent, plus the mobile app plugins for Now Mobile.
2. Create a function of type **Chat launcher**. Set context to **Global**.
3. Add that function as a quick action on the Now Mobile homepage (top corner, or the center item on the bottom bar in later releases).
4. Save, then force-close and reopen Now Mobile on the device so it picks up the applet.

If the instance uses assistants instead of the older launcher:

`All › Conversational Interfaces › Assistants › your assistant › Display experience › Mobile`

Select the mobile chat function, save, and refresh the app.

## 05 · Live agent handoff

Three layers have to agree. A topic node alone does not route anyone.

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

`All › Advanced Work Assignment › Queues`

1. Open the chat queue. The work-item condition must match how interactions are created. They are created in **Work in Progress**. A condition that only matches **New** means agents never see the chat.
2. On `sys_cs_live_agent_setup.list`, set **ITSM Fulfiller UI** and **Global Fulfiller UI** to **Agent Workspace**, not Connect. Save.
3. Test twice: a topic that finishes in the bot, and a transfer that lands in Agent Workspace with the prior messages still on the interaction.

## 06 · Pre-built messaging apps

`All › System Applications › All Available Applications › All`

1. Install the store app for the channel you will actually use: **Conversational Integration with Microsoft Teams** or **Slack**. Opt in. Do not start with the custom chat adapter (`com.glide.cs.custom.adapter`). That is a build, not this course’s path.

`All › Conversational Interfaces › Settings › Integrations`

2. Open the provider (Teams or Slack). Complete the tenant or workspace link the page asks for, and set the bot name and icon for that channel. Those are channel fields. They do not replace the branding record.
3. Save. In the external app, send a phrase you know maps to a **published** topic. If the portal topic works and Teams does not, the topic is fine and the provider link is not.

## 07 · Plan, build, test, publish

`All › Collaboration › Virtual Agent › Designer`

1. **Plan** before the canvas. Pick one job from incidents, catalog items, or repeated agent work. Write the branches on paper: start, choices, empty search, handoff, end.
2. **New** topic, or open an inactive prebuilt topic. Set name, description, and category. Keep keywords or NLU intents on that one intent only.
3. **Build** between Start and End. Use Text, Link, Card, and the record controls. Avoid custom HTML so portal, Now Mobile, and Teams render the same nodes. Script only when no control does the lookup.
4. **Test** with the Designer preview: happy path, a nonsense utterance, an empty lookup, and the handover node.
5. **Publish**. Until you publish, the topic stays off the requester’s topic list. Save is not publish.

Greeting and promoted topics are not on the topic canvas:

`All › Conversational Interfaces › Settings › Virtual Agent › Custom Greetings and Setup › Default chat experience`

6. Set the Greeting topic, optionally the Search Fallback topic, and the Promoted Topics tab. Save. Re-open the portal and confirm the greeting and the new topic both appear.

### Languages

`Designer › Manage languages`

1. Turn on only the languages you will test. Request or enter translations for the topic text.
2. The plugin behind dynamic translation is `com.glide.cs.dynamic.translation.virtual_agent`. Re-run the preview in each language. A longer translated button label is a real defect, not a wording nit.

### Move the topic to another instance

`All › System Update Sets › Local Update Sets`

1. Set your update set to **In progress** before you change the topic, or the topic will not be in the set.
2. **Complete** the set, then on the target instance use **Retrieved Update Sets › Import › Preview › Commit**.
3. The topic can arrive while the portal config, branding key, queue, and Teams link stay behind. Repeat the portal, branding, and publish checks on the target. Then open the portal there.

## 08 · Notifications and analytics

### Notifications

`All › System Definition › Plugins`

1. Confirm **Virtual Agent Notification** (`com.glide.cs.notification`) is active. Actionable notifications are `com.glide.cs.actionable.notification`.
2. For Teams or Slack, enable the channel’s notification option on the same integration record you connected above. A handoff that only speaks inside the open portal window goes silent on the phone.
3. Trigger a transfer as a requester and confirm a notification actually arrives.

### Conversational Analytics

`All › Conversational Interfaces › Home`

1. Install the **Conversational Analytics** store app (`sn_ci_analytics`) if the dashboard tile is absent.
2. Open the dashboard. Read four numbers before you edit anything: topics that run, topics that finish, topics that transfer, topics with no traffic.
3. Rewrite or retire from that list. Then publish again and check the same widgets after real use, not after your own test chats only.

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
