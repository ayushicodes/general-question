// const btn = document.querySelectorAll('.question-btn')

// btn.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         let showText = e.currentTarget.parentElement.parentElement
//         showText.classList.toggle("show-text")
//     })
// })

let questions = document.querySelectorAll(".question")

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", function () {
        questions.forEach(function (items) {
            if (items !== question) {
                items.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})