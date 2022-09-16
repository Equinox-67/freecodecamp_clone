let search = document.querySelector(".search-wrapper")
search.addEventListener("click", function () {
  search.style.outline = "solid 3px blue"

  search.addEventListener("keydown", function (e) {
    console.log(e.key)
    console.log(e.key)
    if (e.key === "Escape") {
      search.style.outline = "none"
    }
  })
  
})
let signIn = document.querySelector(".login")
signIn.addEventListener("click", function () {
    window.open("./signin.html")
})

// search.addEventListener("mouseenter", function (e) {
//   // console.log(e.key)
//   console.log(e.key)
//   console.log("Yes we can")
// })


function reverseString(str) {
  let split = str.split("")
  split.reverse()
  let result = split.join("")
  return result;
}

console.log(reverseString("hello"));



// function reverseString (str) {
//   let store = []
//   for (let i = str.length - 1; i > -1; i--) {
//     store.push(str[i])
//   }
//   let result = store.join("")
//   return result
// }
// console.log(reverseString("my name is palindrum"))
// console.log(reverseString("nursesrun"))
// console.log(reverseString("madam"))
// console.log(reverseString("racecar"))


function reverseString (str) {
  let store = []
  let i = str.length - 1
  while (i > -1) {
    str[i]
    store.push(str[i])
    i--
  }
  let result = store.join("")
  return result
}
console.log(reverseString("my name is palindrum"))
console.log(reverseString("nursesrun"))
console.log(reverseString("madam"))
console.log(reverseString("racecar"))