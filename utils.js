
function handleEqual(arr,tempOne,tempTwo,reset,setScreen){
    arr.push(tempOne)
    if(arr[1]==='+'){
        tempTwo=parseFloat(arr[0])+parseFloat(arr[2])
        reset()
        setScreen(tempTwo)
    }
    if(arr[1]==='-'){
        tempTwo=parseFloat(arr[0])-parseFloat(arr[2])
        reset()
        setScreen(tempTwo)
    }
    if(arr[1]==='x'){
        tempTwo=parseFloat(arr[0])*parseFloat(arr[2])
        reset()
        setScreen(tempTwo)
    }
    if(arr[1]==='/'){
        tempTwo=parseFloat(arr[0])/parseFloat(arr[2])
        reset()
        setScreen(tempTwo)
    }
}

// export { handleEqual}