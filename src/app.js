var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

function addChocolates(chocolates,color,count) {
  if (count<=0) {
    return "Number cannot be zero/negative"
  }

  for (let i = 0; i < count; i++) {
    chocolates.unshift(color)
  }
}

//Progression 2: Remove z chocolates from the top the dispenser

function removeChocolates(chocolates,number) {
  
  if (number>chocolates.length) {
    return "Insufficient chocolates in the dispenser"
  }
  if (number<=0) {
    return "Number cannot be zero/negative"
  }

  let remArr = chocolates.splice(0,number)

  return remArr
}

//Progression 3: Dispense z chocolates

function dispenseChocolates(chocolates,number){

  if (number>chocolates.length) {
    return "Insufficient chocolates in the dispenser"
  }
  if (number<=0) {
    return "Number cannot be zero/negative"
  }

  let disArr = chocolates.splice(chocolates.length-number,number)
  disArr.reverse()

  return disArr

}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates,number,color){

  if (number>chocolates.length) {
    return "Insufficient chocolates in the dispenser"
  }
  if (number<=0) {
    return "Number cannot be zero/negative"
  }

  let resColor = chocolates.filter((currColor)=>{
    return currColor == color
  })

  return dispenseChocolates(resColor,number)

}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates){
  let refArr = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink']
  let result = []
  refArr.forEach(currColor => {
    let count = 0
    chocolates.forEach(currChoco =>{
      if (currColor==currChoco) {
        count++
      }
    })
    count>0?result.push(count):null
  });
  return result
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
  countMap ={}
  chocolates.forEach((currChoco)=>{
    countMap[currChoco]=(countMap[currChoco]||0)+1
  })

  let sortColor = Object.keys(countMap).sort().sort((a,b)=> countMap[b] - countMap[a])

  let sortedChocolates = []
  sortColor.forEach((currColor)=>{
    for(let i = 0; i < countMap[currColor]; i++) {
      sortedChocolates.push(currColor)
      
    }
  })

  return sortedChocolates
}

//Progression 7: Change z chocolates of x color to y color

function changeChocolateColor(chocolates,number,color,finalColor) {
  if (number<=0) {
    return "Number cannot be zero/negative"
  }
  if (color == finalColor) {
    return "Can't replace the same chocolates"
  }

  let result = chocolates.map((currChoco)=>{
    if (currChoco==color && number>0) {
      currChoco = finalColor
      number--
      return currChoco
    } else {
      return currChoco
    }
  })

  return result
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color,finalColor){
  if (color == finalColor) {
    return "Can't replace the same chocolates"
  }

  let modifiedChocolates = chocolates.map((currChoco)=>{
    return currChoco==color?finalColor:currChoco
  })

  let count = modifiedChocolates.filter((currChoco)=>{
    return currChoco == finalColor
  }).length

  return [count, modifiedChocolates]
}

//Challenge 1: Remove one chocolate of x color from the top

function removeChocolateOfColor(chocolates,color){
  let index = chocolates.indexOf(color)
  chocolates.splice(index,1)
  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(chocolates){
  countMap ={}
  chocolates.forEach((currChoco)=>{
    countMap[currChoco]=(countMap[currChoco]||0)+1
  })

  let countEachChocolate = Object.values(countMap)

  let total = 0 
  countEachChocolate.forEach((count)=>{
    if (count>=3) {
      total += Math.floor(count/3)
    }
  })
  return total
}