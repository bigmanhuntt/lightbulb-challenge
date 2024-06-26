document.addEventListener('DOMContentLoaded', function() {
    const lightbulb = document.getElementById('lightbulb');
    const header = document.getElementById('header');
    lightbulb.addEventListener('click', function() {
        if (lightbulb.classList.contains('off')) {
            lightbulb.classList.remove('off');
            lightbulb.classList.add('on');
            header.classList.remove('off')
            header.classList.add('on')
            document.body.style.background = "white";
        } else {
            document.body.style.background = "black";
            lightbulb.classList.remove('on');
            lightbulb.classList.add('off');
            header.classList.remove('on')
            header.classList.add('off')
        }
    

    })
});
