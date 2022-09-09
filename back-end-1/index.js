
const newFriend = document.getElementById('friendInput')
const friendBtn = document.getElementById('otherButton')

let friend = newFriend.value

const addFriend = () => {
    console.log('doing it')
    axios.post('/localhost:4000/api/users', friend)
    .then((res) => {
        friends.push(newFriend.value)
    })
    newFriend.value = ''
    .catch((err) => console.log(err))
}

friendBtn.addEventListener('sumbit', addFriend)

