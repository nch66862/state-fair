const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
}

eventHub.addEventListener("gameTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person player"></div>`
})
