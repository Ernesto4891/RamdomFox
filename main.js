const ramdomButton=document.querySelector('#ramdomButton')

const container=document.querySelector('.container')

const bodyContainer=document.querySelector('.bodyContainer')


const obtenerFox = async (img)=> {
    
    const response = await fetch(`https://randomfox.ca/images/${img}.jpg`)
    
    console.log(response.url)

    card=document.createElement('div')
    
    container.classList.add('cards')
    
    container.innerHTML= `

    <div class= "cards">
    
    <img src=${response.url} alt=${response.img}>

     </div>`

card.append(card)
    
}

const imgRamdom =() => {
    
    return obtenerFox (Math.floor(Math.random()*120+1)) 
    
}

imgRamdom()

ramdomButton.addEventListener('click',imgRamdom)


      

        
 
