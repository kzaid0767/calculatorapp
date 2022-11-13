
document.addEventListener('click', handleClick)

const operations=['+','-','x','/']
const input = document.querySelector('#input')
let tempInputOne = ''
let tempArr = []
let toContinueArr=[]
let tempInputTwo
let tempInputThree = 0

function handleClick(e){
    const clickedValue = e.target.value
    if(clickedValue){
        if(operations.includes(clickedValue)){
            
            /*line below is for putting negative sign*/ 
            if(!tempInputOne && clickedValue==='-'){ 
                handleConcat(clickedValue)
            } else{
                handleOperation(clickedValue)
            }
        } else if(clickedValue==='reset'){
            handleReset(clickedValue)
        } else if(clickedValue==='del'){
            handleDel(clickedValue)
        } else if(clickedValue==='=') {
            handleEqual()
        } else handleConcat(clickedValue)
    }
}
function furtherCalcuations(){
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

function handleReset(){
    tempInputOne = ''
    input.value = ''
    tempArr=[]

}

function handleDel(){
    tempInputOne = tempInputOne.substring(0, tempInputOne.length-1)
    console.log(tempInputOne)
    setScreenVal(tempInputOne )
    
}

function setScreenVal(val){

    if(!val){
        input.value = 'Invalid inputs, try again'
    } else {
        input.value = val
    }
}

function handleEqual(){

    if(toContinueArr.length===2){
        moreArithmetic(toContinueArr)
    }

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
