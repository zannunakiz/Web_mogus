const sortBtn = document.getElementById('sortBtn')

const mogus = () => {
    const inputvalue = [...document.getElementsByClassName('dropdown')].map((drop) => Number(drop.value))
    //const sortedvalue = inputvalue.sort((a,b)=> {return a-b}) =====> (this is simpler version)
    const sortedvalue = bubbleSort(inputvalue) 
    
    updateUI(sortedvalue)


}

const updateUI = (array = []) => {
    array.forEach((num,i) => {
        const outputvalue = document.getElementById(`num-${i}`)
        outputvalue.innerText = num;
    })
}




const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j= 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                const x = array[j]
                array[j] = array[j+1]
                array[j+1] = x
            }
        }
        
    }
    return array
}




sortBtn.addEventListener('click', mogus)









