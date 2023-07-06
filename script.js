document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dark-gold-scarab-shoe.cyclic.app/hospitals')
    .then(resp => resp.json())
    .then(data => console.log(data))

        
    })