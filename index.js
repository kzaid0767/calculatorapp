document.addEventListener('click', handleClick)

const operations=['+','-','x','/']
const input = document.querySelector('#input')
let tempInputOne = ''
let tempArr = []
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
    if(val==='.'){
        if(!tempInputOne.includes('.')){
            tempInputOne += val
        }
    } else{
        tempInputOne += val
    }
    
    setScreenVal(tempInputOne)
}

function handleOperation(val){
    tempArr.push(tempInputOne)
    tempInputOne=''
    tempArr.push(val)
}

function handleReset(val){
    tempInputOne = ''
    input.value = ''
    tempArr=[]
    tempInputThree=0
}

function handleDel(val){
    tempInputOne = tempInputOne.substring(0, tempInputOne.length-1)
    setScreenVal(tempInputOne )
    
}

function handleEqual(){
    tempArr.push(tempInputOne)
    if(tempArr[1]==='+'){
        tempInputTwo=parseFloat(tempArr[0])+parseFloat(tempArr[2])
        handleReset()
        setScreenVal(tempInputTwo)
    }
    if(tempArr[1]==='-'){
        tempInputTwo=parseFloat(tempArr[0])-parseFloat(tempArr[2])
        handleReset()
        setScreenVal(tempInputTwo)
    }
    if(tempArr[1]==='x'){
        tempInputTwo=parseFloat(tempArr[0])*parseFloat(tempArr[2])
        handleReset()
        setScreenVal(tempInputTwo)
    }
    if(tempArr[1]==='/'){
        tempInputTwo=parseFloat(tempArr[0])/parseFloat(tempArr[2])
        handleReset()
        setScreenVal(tempInputTwo)
    }
    
}

function setScreenVal(val){
    input.value = val
}