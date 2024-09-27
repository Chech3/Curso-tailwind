const boton = document.getElementById("btn")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")

function cambio() {
    
    const boxes = [box1, box2, box3, box4];
    
  
    const shuffledBoxes = boxes.sort(() => Math.random() - 0.5);
    // console.log(Math.floor(Math.random() * 4) + 1 ) 
    
    shuffledBoxes.forEach((box, index) => {
        box.className = `order-${index + 1} ${box.className.replace(/order-\d/, '')}`; 
    });
}

boton.addEventListener('click', cambio);