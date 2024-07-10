const tickets = [
    { id: 456789, name: "emily", type: "regular", event: "party" },
    { id: 987654, name: "daniel", type: "vip", event: "conference" },
    { id: 321654, name: "sophie", type: "regular", event: "concert" },
    { id: 789456, name: "ben", type: "vip", event: "wedding" },
    { id: 123987, name: "olivia", type: "regular", event: "concert" },
    { id: 654321, name: "noah", type: "vip", event: "gala" },
    { id: 987123, name: "mia", type: "regular", event: "seminar" },
    { id: 456987, name: "ethan", type: "vip", event: "exhibition" },
    { id: 123456, name: "ava", type: "regular", event: "seminar" },
    { id: 789123, name: "liam", type: "vip", event: "wedding" }
  ]
  const weddingTickets = tickets.filter(tick=>tick.event==="wedding")

  console.log(weddingTickets);