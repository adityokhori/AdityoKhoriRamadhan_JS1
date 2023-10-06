function randomNilai(){
    const randomNumber = ~~(Math.random()*1000)
    if(randomNumber > 500){
        console.log('woww lebih dari 500 karena berisi :', randomNumber)
    }else{
        console.log(randomNumber)
    }
}
randomNilai()

function barisKata(){ 
    for (let i=0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
barisKata('Hello','World','Ini Baris ke 3','Ini baris ke 4') 