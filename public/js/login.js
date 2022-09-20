let pass_field = document.querySelector("#pass-key")
let showBtn = document.querySelector(".show")
let stuff = document.querySelector('header')
let stuff2 = document.querySelector('body')

// document.body.addEventListener('click', () => {
//     showBtn.src = ""
// })
stuff.style.color = 'black'
// stuff2.style.backgroundColor = 'black'
pass_field.addEventListener('click', () => {
    showBtn.src = "../public/uploads/hide.png"
    header.style.color = '#000'
    showBtn.addEventListener('click', () =>{
        if(pass_field.type === "password"){
            pass_field.type = "text";
            showBtn.src = "../public/uploads/show.png"
        } else{
            pass_field.type = 'password'
            showBtn.src = "../public/uploads/hide.png"
        }
    })
})

