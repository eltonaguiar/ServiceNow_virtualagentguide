import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-k8iDQh7g.js
var import_jsx_runtime = require_jsx_runtime();
var stages = [
	{
		id: "install",
		n: "01",
		label: "Install"
	},
	{
		id: "brand",
		n: "02",
		label: "Brand"
	},
	{
		id: "handoff",
		n: "03",
		label: "Handoff"
	},
	{
		id: "channels",
		n: "04",
		label: "Channels"
	},
	{
		id: "topics",
		n: "05",
		label: "Topics"
	},
	{
		id: "operate",
		n: "06",
		label: "Operate"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold tracking-wide text-teal uppercase",
						children: "Study brief · setup through operations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl",
						children: "Virtual Agent Implementation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-snug text-ink",
						children: "A Virtual Agent is useful only when people can reach it, the conversations finish real work, and someone watches what happens after go-live. This brief condenses that path."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Sections",
				className: "no-print mt-6 flex flex-wrap gap-2",
				children: [stages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${stage.id}`,
					className: "rounded-full border border-line bg-card px-3 py-2 text-sm font-semibold text-ink hover:border-teal hover:text-teal",
					children: [
						stage.n,
						" ",
						stage.label
					]
				}, stage.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => window.print(),
					className: "rounded-full bg-teal px-3 py-2 text-sm font-semibold text-card",
					children: "Print brief"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: "First half"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Install Virtual Agent, put it on Service Portal, iOS, and Android, brand the chat client, turn on live-agent handoff, and connect pre-built enterprise messaging apps."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-teal-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: "Second half"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink",
						children: "Plan, design, build, test, and publish topics. Localize them, move them between instances, then use notifications and Conversational Analytics to improve what is live."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				"aria-labelledby": "outcomes",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "outcomes",
					className: "font-display text-2xl text-ink",
					children: "What you should be able to do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 list-decimal space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Install and configure Virtual Agent on Service Portal, iOS, and Android, including client branding and live-agent handoff." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plan, build, test, and publish topics, and localize conversations for more than one language." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Deploy topics between instances, and connect Virtual Agent to third-party messaging apps with pre-built integrations." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Read Virtual Agent notifications and Conversational Analytics so you can monitor and report on topic performance." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "install",
				n: "01",
				title: "Install and verify the clients",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Start on the Conversational Interfaces home page. If Virtual Agent is not active, install it (Glide Virtual Agent). Hands-on work in the course begins by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "verifying the plugins" }),
						" — do not brand or publish until the pieces you need are actually on."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Then make the bot available on each supported surface:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Service Portal" }), " — enable the portal web client so chat is a real entry point, not only a configured record."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Apple iOS" }),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Google Android" }),
							" — the ServiceNow mobile clients, so the same assistant is available off the desktop portal."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Where the line of business already has them, install prebuilt conversation content (ITSM, HR, and similar store apps). That gives you topics to adapt instead of a blank designer." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "brand",
				n: "02",
				title: "Brand the client and open it",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The client is the chat window the requester sees. Configure name, icon, colors, logo, and greeting so the bot looks like the organization, then ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "enable the portal web client" }),
					" and open it as a user. Branding that nobody can launch does not count as implemented."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { children: "This client is the Virtual Agent chat surface (portal, mobile, and later messaging). It is not Agent Client Collector, the ITOM agent used for discovery and monitoring." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "handoff",
				n: "03",
				title: "Enable live agent handoff",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Virtual Agent should finish routine requests and transfer the rest. Turn on handoff so a conversation can move to a person with context still attached: what the user already said, and which topic they were in. Routing lands in the live chat setup your instance uses, often through Advanced Work Assignment queues." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Test both exits. A topic that only works when the bot succeeds, and a transfer that drops the user into an empty queue, are both incomplete." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "channels",
				n: "04",
				title: "Connect pre-built messaging apps",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The same topics should run where people already work. Use the supported, pre-built integrations — commonly Microsoft Teams and Slack, plus any other store integration the instance is licensed for — rather than a custom chat adapter." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Install the integration, connect the channel, and confirm a topic that already works on the portal also runs there. Channel branding (bot name and icon) is part of that connection, not a separate product." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "topics",
				n: "05",
				title: "Plan, build, test, and publish topics",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-2 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Plan." }), " Choose topics from real demand: high-volume incidents, catalog requests, knowledge questions, and repetitive agent work. Decide what “better” means (fewer transfers, finished requests) before you draw a flow."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Design." }), " Map how the user starts, where the flow branches, which platform data personalizes the reply, what happens when a search is empty, when to hand off, and how feedback is captured. Close dead ends on the map."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Build." }), " In Virtual Agent Designer, keep each topic to one job. Prefer standard text, links, and cards over custom HTML so the topic still renders on portal, mobile, and messaging clients. Script only where the nodes are not enough."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Test." }), " Run the happy path and the failures: bad input, no results, and the live-agent branch."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Publish." }), " Unpublished topics do not serve users. Publish after the test pass, not before."] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				"aria-labelledby": "move",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "move",
					className: "font-display text-2xl text-ink",
					children: "Languages and moving topics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-ink",
							children: "Localize"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Turn on the languages you will actually support and translate the conversation text. Re-test each language. A flow that is clear in one locale can break when labels get longer or a choice no longer matches the utterance."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-ink",
							children: "Deploy between instances"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Build and test in a lower environment, then move the topics to the next instance. After the move, check plugins, the client, and channel connections again. Topic records can travel while instance-specific setup stays behind."
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "operate",
				n: "06",
				title: "Notifications, then the numbers",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Notifications" }), " keep the requester informed when a conversation continues outside the open chat — a handoff, an async action, or a channel that is not the portal. Silence after a transfer is an implementation gap."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Conversational Analytics" }), " is how you report on what shipped. Use the dashboard and widgets to see which topics run, which finish, which transfer to a person, and which nobody uses. That is the input for the next edit: rewrite, retire, or add."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Launch is not the end. People have to be able to find the bot, and the topics should change when the data says they are failing." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-line bg-amber-soft p-4",
				"aria-labelledby": "check",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "check",
						className: "font-display text-2xl text-ink",
						children: "Field checklist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-amber",
						children: "These match the course hands-on anchors: verify plugins, brand the client, enable the portal web client — then carry the topic through publish and measurement. A knowledge check closes the course."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2",
						children: checklist.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-8 border-t border-line pt-4 text-sm text-muted",
				children: "Condensed from the Virtual Agent Implementation course path and the usual implementer sequence: prepare the clients, design the conversations, publish only what you tested, and operate from analytics."
			})
		]
	});
}
function Section({ id, n, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "mt-8 scroll-mt-6 border-t border-line pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-wide text-teal",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-3",
				children
			})
		]
	});
}
function Callout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "border-l-4 border-teal bg-teal-soft px-4 py-3 text-ink",
		children
	});
}
var checklist = [
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
	"Conversational Analytics reviewed after go-live"
];
//#endregion
export { Home as component };
