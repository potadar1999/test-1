let amar={
    propestion:"singer",
    lives:"Goa"
}

let akbar={
     propestion:"chef",
    lives:"Mumbai"
}

let anthony={
     propestion:"Magician",
    
    lives:"Kashmir"
}


function skill(skill){
    console.log("skill: " + propestion + " "+this.name)
}

amar.skill.call(akbar)
