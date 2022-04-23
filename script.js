let random = (min,max)=>{
    return Math.floor(Math.random() * (max + 1 - min) + min)
}


let son = +prompt('Nechta misol yechmoqchisiz ?')
for (let i = 0; i < son; i++) {
    let son1 = random(10,100)
    let son2 = random(1,10)
    if (son1 % son2 == 0) {
        let yourAnswer = prompt(`Misolni yeching ${son1} / ${son2}`)
    } else 
    if(son1 % 2 == 1 && son2 % 2 == 1){
        let yourAnswer = prompt(`Misolni yeching ${son1} * ${son2}`)
    }else 
    if(son1 == 10){
        let yourAnswer = prompt(`Misolni yeching ${son1} + ${son2}`)
    }else{
        let yourAnswer = prompt(`Misolni yeching ${son1} - ${son2}`)
    }
    
    

    
}