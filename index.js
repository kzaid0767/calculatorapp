document.addEventListener('click', handleClick)

const operations=['+','-','x','/']
const input = document.querySelector('#input')
let tempInputOne = ''
let tempInputTwo = 0
let tempInputThree = 0

function handleClick(e){
    const clickedValue = e.target.value

    if(operations.includes(clickedValue)){
        handleOperation(clickedValue)
    } else if(clickedValue==='reset'){
        handleReset(clickedValue)
    } else if(clickedValue==='del'){
        handleDel(clickedValue)
    } else if(clickedValue==='=') {
        handleEqual()
    } else handleConcat(clickedValue)
}

function handleConcat(val){
    tempInputOne += val
    setScreenVal(tempInputOne)
}

function handleOperation(val){
    if(val==='+'){
        console.log(tempInputOne)
        tempInputTwo = tempInputOne
        tempInputOne=''
        console.log(tempInputOne, tempInputTwo)
    }
}

function handleReset(val){
    tempInputOne = ''
    input.value = ''
    tempInputThree=0
}

function handleDel(val){
    console.log(val)
}

function handleEqual(){
    input.value = tempInputThree
}

function setScreenVal(val){
    input.value = val
}