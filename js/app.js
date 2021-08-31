var elements = document.querySelectorAll('.spoiler')

var createSpoilerButtton = function (element){
    // on crée la span .spoiler-content
    var span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML
    // on crée la button
    var button = document.createElement('button')
    button.textContent = 'afficher le spoiler'

    // on ajoute les elements au DOM

    element.innerHTML = ''
    element.appendChild(button)
    element.appendChild(span)
    // on met l'ecouteur au click
    button.addEventListener('click', function(){
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    })

}
 for(var i=0; i<elements.length;i++){
     createSpoilerButtton(elements[i])
 }