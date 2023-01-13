
const day = new Date()
const year = day.getFullYear();
const xMas = new Date(`12/25/${year}`)



function howLong(){
  let timeDiff = xMas.getTime() - day.getTime() 
  let dayDiff = timeDiff / (1000 * 3600 * 24)
  if (dayDiff > Math.floor(dayDiff)){
    return Math.floor(dayDiff + 1)
  }
  return  Math.floor(dayDiff)
}

howLong()



const length = document.querySelector('#length')
length.innerText = `Christmas is in ${howLong()} days`