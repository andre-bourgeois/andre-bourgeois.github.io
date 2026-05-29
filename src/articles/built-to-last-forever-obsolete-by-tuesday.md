---
title: Built to Last Forever, Obsolete by Tuesday
subtitle: How Shrinking Technology Lifecycles are Reshaping the Future of Retrofit
date: 2026-04-02
tags: [Digital Buildings, Innovation Strategy, Internet of Things, Industry Transformation]
excerpt: Modern buildings will outlast their technology many times over. The ones that age well will be designed for the retrofits to come, not just for the day they open. 
---

What's the lifespan of a building? If we consider ancient structures, our answer might be millennia. The Knap of Howar on Papa Westray Island in Scotland, a Neolithic farm of two adjacent thick-walled stone buildings, was constructed nearly 6,000 years ago and is among the oldest preserved stone houses in northern Europe. Some of the earliest bricks in Iraq's Ziggurat of Ur were set more than 4,000 years ago, and after restoration in the 1980s the Neo-Sumerian structure remains one of the best preserved of its kind.

We can't be sure modern buildings will last anything like that long, but it's expected that 80% of today's buildings will still be in use by 2050. That timeframe feels manageable until you notice how different many of these buildings are from their ancestors. Instead of static physical structures, they're brimming with hardware and software that evolve on timescales far shorter than stone, timber and glass. Nature doesn't push patches for improved lumber, your ferroconcrete has never needed a firmware update, and the structural steel in modern skyscrapers hasn't fundamentally changed since the 1880s.

## Buildings are Technology Products

Today's buildings bear little resemblance even to those designed 50 years ago. They have more in common with computers than with their ancestors. They've become technology products, hybrid platforms supporting dense webs of physical and digital interaction. Like technology products, they're evolving faster than the industry can keep up; unlike technology products, you can't just replace them with the latest innovations. You can't run out and buy a new building like a smartphone, and planned obsolescence doesn't work at this scale. The widening gap between physical structure, complexity of technology, and pace of innovation pulls buildings further from where they need to be, but it’s also where the opportunity sits.

## A Four-Trillion Dollar Problem

By 2050, the market for building retrofits is forecast to grow from around $500 billion to nearly $4 trillion, an eightfold increase if McKinsey's calculations are to be believed. Much of that growth will come from upgrading the 80% of today's buildings that will still be operational, and a significant portion of those upgrades will be digital, not structural.
Driving the growth is a set of overlapping waves shaped by shrinking technology lifecycles. Building systems used to run on replacement cycles measured in decades, but as buildings become technology products, those cycles compress and the way we maintain and retrofit buildings has to change with them.
Fast technology outpaces slow. Expensive upgrades get sidelined while cheaper ones go in first. The stack evolves piece by piece, until the building bears little resemblance to what was originally built.

## How Can Buildings Keep Up?

You can't redesign a building every time new technology hits the market. So the question that underpins the whole retrofit problem is how a building meant to last for centuries is supposed to carry technology that turns over in years.

The building-computer comparison is useful mainly because of where it fails. Computers last because you can change the parts that date without disturbing the parts that don't. A new graphics card doesn't mean rewiring the housing, and a system update doesn't mean a new processor. That separation is deliberate, designed into the machine from the start. Buildings have the same kind of layering available to them, but most don't make good use of it.

## Buildings Have Layers

Stewart Brand made this point about architecture in How Buildings Learn, back in 1994. A building is a set of layers running on different clocks: the structure may last centuries, the cladding decades, the services such as wiring and pipework perhaps a decade, the fittings a few years. Today, firmware might need a security update every few months. Trouble starts when a fast layer is tied too tightly to a slow one; if swapping a controller means breaking into a wall meant to stand for a hundred years.

Software people reached the same conclusion and built their industry around it. An operating system stays stable, barely changing, while the applications above it evolve constantly. What makes that work is the boundary between them, the agreed interface that lets one side move while the other stays put. A building that's easy to retrofit is one organised around boundaries like these, with the fast-moving technology kept within reach.

## A Digital Building Has Digital Layers

This same logic runs inside the technology itself. A sensor fitted today might still be in a ceiling void in 2040. The controller it reports to will likely have been replaced once by then.. The analytics layer running over the data could be swapped out yearly, and the security patches beneath everything should be landing every few weeks. A digital building isn't a single product. It's several products stacked on top of each other, all ageing at different rates.

The retrofit problem inside the stack is keeping those layers loose enough that any one of them can change without forcing the others to change with it. That comes down to three things.

1. Open protocols at the device layer. BACnet for building controls, KNX for room-level systems, MQTT or Matter for newer connected devices. These do for hardware roughly what USB did for peripherals: any sensor that speaks the protocol can be read by any controller that listens for it, no matter who made either one.

2. A shared vocabulary for what the data means. A reading labelled "AHU3-RmTmp" tells a new application nothing on its own, unless the system somewhere knows that AHU3 is an air-handling unit and RmTmp is a return-air temperature. Project Haystack and Brick Schema are the two main standards that have grown up around this problem, providing a way to tag equipment and data points so any tool reading the building can make sense of it without being hand-configured first.

3. An independent data layer above the devices. The building's live data and its metadata should sit in a vendor-neutral platform, sometimes called a building operating system or a digital twin, and everything else (the BMS interface, the analytics tools, the tenant app, the energy optimiser) should read from and write to that platform through documented APIs. The data outlives any one tool or application, so it should be hosted in a way that outlives them too.

Of those three, the data layer does most of the work. It's the buffer between the part of the building that moves on hardware time and the part that moves on software time. Without it, every change to the analytics or the dashboard reaches back down into the devices, and device replacements ripple up into whatever applications were reading from them. With it, software can iterate at its own pace, hardware can be replaced on its own schedule, and the two halves stop dragging on each other.

## Bridging Your Current Building

Almost no one gets to design a smart building from a clean slate. The far more common starting point is a building running a fifteen-year-old BMS, a few generations of bolt-ons added by previous facilities teams, and a layer of dumb equipment that speaks no protocol at all. The data layer described above has to learn to read all of that, or it can't actually see most of the building it's meant to manage.

The workhorse in this exercise is the protocol gateway, a box that takes one language and re-emits it in another. Modbus, the industrial control protocol from 1979, is still everywhere in chillers, meters and motor drives, and gateways translate it into BACnet or MQTT so the modern data layer can consume it. Older BACnet/MS-TP networks get bridged to BACnet/IP the same way. Equipment that speaks no protocol at all gets reached through edge devices that lift its raw signals into the digital layer above. The pattern is wrap rather than rip out: an ageing BMS doesn't need to be torn down on day one, it just needs an API in front of it.

The tradeoff is that every gateway is another component someone has to maintain and eventually replace, and a long bridging exercise can leave a building with more interfaces than it has equipment. The point of bridging is to buy time. Once the cost of keeping a piece of legacy kit talking exceeds the cost of replacing it, the bridge has done its job and the underlying kit gets swapped on its own schedule rather than the retrofit's.

## The Catch with Software-Defined Buildings

Treating a building like a piece of software means signing up for software's release cadence, whether you have the operational muscle for it or not. A mechanical boiler from the 1990s still heats water today. A building automation server from the same era stopped receiving security patches long ago and is now either a vulnerability or a brick. Connected systems have already been used as a way into corporate networks, often through some forgotten device nobody got round to patching.

Each layer in the stack runs on its own release schedule, and those schedules rarely line up. The supervisory platform you bought three years ago no longer plays well with the AI fault-detection tool your operations team wants to plug in. The cloud dashboard the chiller controller reports into has changed owner twice since you signed the contract. A building ends up running at the pace of its slowest-moving software layer, and unless those layers can be replaced independently, that pace is forced onto everything above.

Someone has to own the patching, track which systems are still supported, and have an answer ready for the day a supplier walks away or gets acquired. Owners who write that work into the operating budget, in the same bracket as servicing the lifts, will get far more out of a smart building than the ones who treated the install as the finishing line.

## Designing for Change

You can't know what buildings will need in 2050, but you can be fairly confident they'll need to change. That's an eventuality we can design for. For digital buildings, that comes down to a small number of decisions made early, most of them about software and contracts rather than concrete.

At the device layer, the specification should require open protocols, so the sensors and controllers fitted this year aren't tied to one vendor's release schedule. Above that, the live data and its metadata should sit in an independent platform under the owner's control, with a documented schema describing what every piece of equipment is and what every data point means. The applications on top should reach that data through open protocols, not through a private channel only the supplier understands. The contract should set out who owns the data, where it physically lives, and what happens to it if the vendor relationship ends.

This is an old idea in architecture rather than a new one. "Long life, loose fit" was the phrase: make the permanent parts permanent, and give everything else room to move. In digital buildings, that means the devices and the data, the platforms and the algorithms, the contracts and the patches The Knap of Howar lasted six thousand years partly because nothing inside it ever needed upgrading. Our buildings don't get that exemption. The building can't be rebooted, but if the seams have been drawn in the right places, almost everything inside it can be. 