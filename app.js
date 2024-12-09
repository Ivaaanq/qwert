let select = document.querySelector('select')
let articles = document.querySelectorAll('article')

select.addEventListener('change', () => {
    for (const article of articles) {
        if (select.value == article.dataset.type || select.value == 'All'){
            article.style.display = 'grid'
        }else{
            article.style.display = 'none'
        }
    }
})