---
title: Resident Agents
subtitle: If you own the building and the data, you should own the intelligence on top of it
date: 2026-06-04
tags: [Artificial Intelligence, Digital Buildings, Emerging Technology, Industry Transformation]
excerpt: Building occupiers have spent years fighting to own their data. Now AI agents are arriving, and a similar scene has been set. Here's how to get ahead of it.
---

Every time you use a Big Tech product, you're feeding data into some of the world's largest corporations. Every search, every email, every purchase is training the machine, informing ad targeting, and enriching platforms that you don't own and have no real control over. For most consumers, this is an acceptable trade for modern conveniences; for many businesses, this is becoming harder to justify.

This same tension has been at the forefront of my mind regarding the amount of data we're now feeding into enterprise-grade Large Language Models (LLMs) and commercially-available AI tools. It has also been a hot topic of conversation on London's construction scene regarding the level of ownership and control that building occupiers and occupants maintain over their asset's data.

Recently, these two worlds have begun to collide as AI agents and other AI tooling begin to feature prominently in conversations about how buildings should be operated. And with these conversations come the familiar questions: who owns the data, and who owns the intelligence?
Below, I propose my own answer to these questions in the form of Resident Agents - what I believe will become a foundational part of how the built environment adopts AI.

## AI Agents

LLMs, on their own, are both remarkably capable and remarkably limited. They can reason, summarise, and advise - but without the right infrastructure around them, they're sophisticated chatbots, entirely dependent on the humans around them to take action on their behalf.

Agentic AI is an evolution of this. A model augmented with tools and data access, able to observe its environment, reason about what it finds, and act. The de facto standard for enabling this extensibility is the Model Context Protocol (MCP) - a standardised interface that gives agents access to the data they need to make decisions and the tools they need to act on them.

In the context of a building - with its continuous streams of data from dozens of systems and thousands of devices - the real opportunity lies in having an agent that can see across all of it.

## The Vendor Agent Problem

Agents are already arriving in the buildings industry - some are being built by building occupiers, but most are being embedded into existing platforms by vendors. Your operational platform will have an agent. Your tenant experience application will have an agent. Your catering platform will have an agent. Superficially, this looks like progress, but in practice it creates two significant problems.

The first is fragmentation. Each vendor's agent will be scoped to that vendor's environment. If you want your operational platform agent to act on your BMS, or your tenant experience app agent to analyse data it doesn't have direct access to, you're immediately dealing with complex, poorly-defined agent-to-agent interactions across platforms with little control or visibility over the agents themselves. The more vendors you have, the more agents you have, and the more coordination overhead you accumulate.

The second is lock-in. Agent functionality becomes inseparable from the platform. If you want to switch vendors, you don't just lose the software - you lose the agent, its context, its history, and its learned behaviour. Building occupiers who have spent years trying to escape proprietary data silos will find themselves in a new version of the same trap, one layer up the stack.
These aren't new problems. Vendor lock-in and fragmented system architectures are issues the industry is grappling with today, and we have working solutions that can help solve these problems tomorrow by applying the same principles.

## Independent Data Layers

Independent Data Layers (IDLs) solve these issues by creating a vendor-agnostic data environment into which building occupiers can integrate their systems, creating a centralised place for data storage, normalisation, and control contained within their own domain.

The IDL decouples the systems that capture data from the systems that utilise it. It eliminates the building occupier's reliance on any single vendor for data storage and normalisation, while ensuring all integrations operate through a single, clean, occupier-governed environment.

So why don't we give the same power to their AI agents? This is the alternative to vendor agents, and it's what I'm calling a Resident Agent: a single agent, or a coordinated suite of agents, that the building occupier controls, and which is given access to data and tooling from other systems rather than being contained within them. Where vendor agents exist, the RA can interact with them directly, acting as the orchestration layer rather than being subordinate to any single platform.

## The Resident Agent

A Resident Agent is an AI agent deployed within a building's own technology environment. Not hosted by a third-party cloud platform, not bundled with a vendor's product suite, but owned and operated under the direct control of the building occupier.

Like an Independent Data Layer, the RA decouples the building occupier from their technology vendors. It is scoped to specific operational domains - energy management, HVAC optimisation, access control - and interacts with building systems through a structured, permission-governed interface. It has no broader access than its domain requires, cannot be directed by external platforms without explicit authorisation, and operates independently of any single vendor's products or services.

The intelligence lives in your environment. The data stays in your environment. The capability is yours.

### Deployment Strategies

There are two main approaches to deploying a Resident Agent, and the right choice depends on the scale and complexity of tasks it needs to handle.

The first is a single general-purpose agent, leveraging a large open-source model in the 400 to 700 billion parameter range, hosted on high-spec on-premises hardware and capable of handling a wide range of tasks across operational domains. One agent, one model, one environment to manage.

The second is a Resident Agent Suite: a coordinated team of smaller, specialised agents, each running a model in the 7 to 70 billion parameter range and trained for a specific domain. Because of their specialised training, these smaller models can often match the performance of much larger general-purpose models within their area of expertise, while running on considerably more constrained hardware. The trade-off is coordination complexity - each task needs to be routed to the right agent, which suggests a hierarchical structure with a central orchestration agent triaging and delegating to the appropriate specialist.

The practical flow looks something like this: a task arrives, the central agent interprets it and delegates to the relevant specialist, the specialist completes the task and returns the output, either back up the hierarchy for multi-step tasks or directly to the end user or system. It's not unlike how a well-run operations team works - a manager who knows what needs doing and a set of specialists who know how to do it.

### Model Choice

Commercial models introduce the same vendor dependency that Resident Agents are designed to avoid. Open-source models have closed the capability gap significantly and, with the right technical setup, are the only path to genuine sovereignty.

## The Case for Ownership

The direction of travel in enterprise technology is towards sovereignty. Ownership of data, ownership of infrastructure, ownership of the intelligence built on top of it. The buildings industry has been on this journey with data for several years. Resident Agents are the next logical step.

The alternative is a fragmented ecosystem of vendor agents, each locked to their platform, each holding a piece of your operational intelligence. Not because vendor agents won't work, but because depending on them means your building's intelligence lives somewhere you don't control, serves goals that aren't exclusively yours, and leaves when the contract ends.

A Resident Agent stays. It learns your building, operates in your environment, and answers to you. In a world where the intelligence layer is becoming as important as the data layer beneath it, that's not a luxury. It’s the whole point.