// // Write your code below this line

// const decoder = string => {
//     string = string.toLowerCase()
//     let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let answer = ''
//     let num = +string[0]
  
//     for (i = 1; i < string.length; i++) {
//       let letterPosition = letters.indexOf(string[i])
//       if ((letterPosition + num) > 26) {
//         letterPosition -= 26
//       }
//       answer += letters[letterPosition + num]
//     }
   
//     return answer
//   }
  
//   console.log(decoder("2fcjjm"))

const decoder2 = string => {
  num = +string[0]
  cipher = ''
  for (i = 1; i<string.length; i++){
    code = string.charCodeAt(i)
    if (code <= 90 && (code + num) > 90){
      code -= 26
    }
    if (code <= 122 && (code + num) > 122){
      code -= 26
    }
    cipher += String.fromCodePoint(code + num)
  }
  return cipher
}
console.log(decoder2("2fcjjm"))

