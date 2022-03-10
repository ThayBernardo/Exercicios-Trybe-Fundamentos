function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  function encode(string1) {
    let newValue = '';
  
    for(let i = 0; i < string1.length; i += 1){
      if(string1[i] === 'a'){
        newValue += '1'
      }else if(string1[i] === 'e'){
        newValue += '2'
      }else if(string1[i] === 'i'){
        newValue += '3'
      }else if(string1[i] === 'o'){
        newValue += '4'
      }else if(string1[i] === 'u'){
        newValue += '5'
      }else{
        newValue += string1[i]
      }
    } return newValue
  }

  function decode(string2) {
    let newValue2 = '';
  
    for(let i = 0; i < string2.length; i += 1){
      if(string2[i] === '1'){
        newValue2 += 'a'
      }else if(string2[i] === '2'){
        newValue2 += 'e'
      }else if(string2[i] === '3'){
        newValue2 += 'i'
      }else if(string2[i] === '4'){
        newValue2 += 'o'
      }else if(string2[i] === '5'){
        newValue2 += 'u'
      }else{
        newValue2 += string2[i]
      }
    } return newValue2
    // seu código aqui
  }


  const techList = (array, name) => {
    let newArray = [];
    array.sort()
  
    if(array.length === 0){
      return 'Vazio!'
    }
    for(let i = 0; i < array.length; i  += 1){
      newArray.push({
        tech: array[i],
        name: name
      })
    }
    return newArray
    // seu código aqui
  }
  
module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList};
