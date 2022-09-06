// Write your code below this line

const decoder = string => {
    string = string.toLowerCase()
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let answer = ''
    let num = +string[0]
  
    for (i = 1; i < string.length; i++) {
      let letterPosition = letters.indexOf(string[i])
      if ((letterPosition + num) > 26) {
        letterPosition -= 26
      }
      answer += letters[letterPosition + num]
    }
   
    return answer
  }
  
  console.log(decoder("2fcjjm"))