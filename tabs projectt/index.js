const tabs = document.querySelector(".tabs");

const btns = document.querySelectorAll(".btn")

const articles = document.querySelectorAll(".content")

tabs.addEventListener("click", (event)=> {
    const id = event.target.dataset.id

    if (id) {
        btns.forEach((button)=> {
            button.classList.remove("live")
        })
        event.target.classList.add("live")
        articles.forEach((art)=>{
            art.classList.remove("live")
        })
        const element = document.getElementById(id)
        element.classList.add("live")
    }
})

