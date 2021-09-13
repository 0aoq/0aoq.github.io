let discord_copy = document.querySelector("#discord_copy")
let span = document.querySelector("#discord_copy span")

discord_copy.addEventListener("click", () => {
    navigator.clipboard.writeText("0aoq#0001")
    span.innerText = "Discord: (Copied!)"
    setTimeout(() => { span.innerText = "Discord: 0aoq#0001" }, 1000)
})

// Redirect to various projects

const id = window.location.search.slice(1)
if (id) {
    window.location = "https://0aoq.github.io/0aoq/projects/" + id
}