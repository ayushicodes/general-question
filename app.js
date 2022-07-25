const btn = document.querySelectorAll('.question-btn')

btn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let showText = e.currentTarget.parentElement.parentElement
        showText.classList.toggle("show-text")
    })
})