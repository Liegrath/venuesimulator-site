// Game systems shown on the home page. Numbers come from the game's design notes
// (venue-simulator repo, harita/sistemler/*.md); keep them in sync when the game changes.
export default [
  {
    id: "power",
    title: "Power grid",
    summary: "Nothing runs without electricity. Place generators, lay cable cell by cell and keep every network under its limit. Cables that touch merge into one grid; surface cable is cheap but wears out, underground cable is safe but slow to dig.",
    specs: [
      ["Portable generator", "10 kW · 20 L tank"],
      ["Container generator", "60 kW · 150 L tank"],
      ["Fuel use", "0.3 L per kWh"],
      ["Stage draw, level 1 → 3", "5 → 15 → 40 kW"],
      ["Overload", "breaker trips, stalls go dark"],
    ],
    links: ["incidents", "reputation", "staff"],
  },
  {
    id: "crowd",
    title: "Crowd",
    summary: "Every visitor is simulated on their own. They get off the bus, buy a ticket, find a spot, and as the evening goes on they get thirsty, hungry and need the toilet. They pick the best stall, join the queue and give up when their patience runs out.",
    specs: [
      ["Needs", "drink · food · toilet"],
      ["Walking", "real speed, flow-field pathing"],
      ["Feedback", "visitors think out loud"],
      ["Crowd engine", "tested at 100,000 people"],
    ],
    links: ["reputation", "money"],
  },
  {
    id: "staff",
    title: "Staff",
    summary: "Hire a crew and command them like units in a strategy game: drag to select, right-click to send, save control groups, paint the zone each person patrols. A bar with no bartender is a closed bar.",
    specs: [
      ["Bartender", "$60 per event"],
      ["Cleaner", "$50"],
      ["Security", "$80"],
      ["Technician", "$100"],
      ["Medic", "$120"],
    ],
    links: ["incidents", "money"],
  },
  {
    id: "incidents",
    title: "Incidents & radio",
    summary: "The show is where the game happens. Problems come in over the radio while the music plays, and each one has a specific fix. Leave it and it gets worse; the crowd remembers.",
    specs: [
      ["Fight", "send security"],
      ["Someone fainted", "send a medic"],
      ["Trash, dirty toilets", "send a cleaner"],
      ["Bar ran dry", "emergency order, 1 hour, expensive"],
      ["Short circuit, breakdown", "send a technician"],
    ],
    links: ["staff", "power", "reputation"],
  },
  {
    id: "events",
    title: "Booking & demand",
    summary: "Pick a date and an act, then set the ticket, beer and food prices. How many people show up depends on the act's fan base, how sensitive they are to your prices, the season and your reputation, all capped by what your stage can hold.",
    specs: [
      ["Demand", "fans × price × season × reputation"],
      ["Cap", "stage capacity 50 / 200 / 500"],
      ["Artist fee", "paid up front"],
      ["During the show", "change prices live"],
    ],
    links: ["money", "reputation"],
  },
  {
    id: "money",
    title: "Money & the bank",
    summary: "Every dollar is on the ledger. Buildings cost upkeep every night, artists want paying before they play, wages come out after the show. Drop below zero and construction freezes until you climb out. The village bank lends against your land and buildings, and its rate depends on your reputation.",
    specs: [
      ["Daily upkeep", "0.3% of building value"],
      ["Demolish", "50% refund"],
      ["Loan interest", "14% at 1★ → 4% at 5★"],
      ["Terms", "1, 2 or 5 years, weekly payments"],
      ["Limit", "3 open loans, 2% early-repayment fee"],
    ],
    links: ["reputation", "buildings"],
  },
  {
    id: "reputation",
    title: "Satisfaction & reputation",
    summary: "Queues, prices, noise from the generator, trash on the ground and unhandled incidents all move satisfaction. Every show ends with a report card, and the report card moves your reputation, one star per 200 points.",
    specs: [
      ["Stars", "1 to 5"],
      ["2★ unlocks", "local talent, level 3 buildings, big generator"],
      ["Each star", "more demand, cheaper loans"],
    ],
    links: ["events", "money"],
  },
  {
    id: "buildings",
    title: "Buildings & upgrades",
    summary: "Nine build categories, from stages and bars to infrastructure and decoration. Most buildings have three levels. Upgrading a stage makes it grow backwards and sideways while its front edge stays put, so plan your layout before you need the space.",
    specs: [
      ["Stage", "pallets → trailer → main stage"],
      ["Bar stock", "50 → 150 → 300"],
      ["Bar service", "1 → 2 → 2 fast counters"],
      ["Placement", "no building on surface cable"],
    ],
    links: ["power", "money"],
  },
];
