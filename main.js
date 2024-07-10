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
    { id: 789123, name: "liam", type: "vip", event: "wedding" },

  ]

const ticketsDiv = document.querySelector(".tickets")

function renderOnDOM(tickets){
  ticketsDiv.innerHTML = ""   // clear the div before adding cards/tickets
  tickets.forEach(ticket=>{
      let cardDiv = document.createElement("div")
      cardDiv.classList.add("card")
      cardDiv.classList.add(ticket.event) // note -- 
      cardDiv.innerHTML = `
        <h3>${ticket.name.toUpperCase()} - <span class="id">${ticket.id}</span> </h3>
        <p> 
            <span class="type" >${ticket.type}</span> 
            <span class="event">${ticket.event}</span>  
        </p>
      `
      // finally add the div to container
      ticketsDiv.append(cardDiv)
  })
}
renderOnDOM(tickets)


  const filterButtons = document.querySelectorAll(".filter-btn")
  console.log(filterButtons); //an array like structure(nodelist), containing all buttons of class filter-btn

  for(let index = 0; index<filterButtons.length; index++){
      filterButtons[index].addEventListener("click", (event=>{
        console.log( event.target ); // tell which of the five buttons has been clicked
        console.log( event.target.getAttribute("id") ); // get us the value of the id attribute
        let filteredList = tickets.filter(ticket=>ticket.event === event.target.getAttribute("id") )
        console.log(filteredList);  // filtered array 
        if(event.target.getAttribute("id")==="all"){
          renderOnDOM(tickets)
        }else{
          renderOnDOM(filteredList)
        }
      })
      )
  }


  // adding tickets

  const newTicketForm = document.querySelector("form")

  newTicketForm.addEventListener("submit", (event)=>{
    event.preventDefault() // prevent the default behaviour of submiting a form -- sending a http request
    const newTicket = {
      id: document.getElementById("id").value, 
      name: document.getElementById("user").value, 
      type: document.getElementById("type").value, 
      event: document.getElementById("event").value
    }

    tickets.unshift(newTicket)  // add new ticket to original tickets array
    renderOnDOM(tickets) // rerender all tickets 
    newTicketForm.reset() // clear the form
  })

  
  // TASK - Build a rock-paper-scissors game on the browser!!! user competing with the computer(picking random choices-rock or paper or scissors)