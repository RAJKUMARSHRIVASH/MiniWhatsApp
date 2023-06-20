
let chats = document.querySelectorAll(".allContacts li");
let msglist = document.querySelector(".msglist");
let msgform = document.querySelector(".msgform");
let demo = document.querySelector(".demo");

for(let i = 0; i<chats.length; i++){
    chats[i].addEventListener("click",()=>{
        demo.classList.add("inactive");
        msgform.classList.add("active");
        msglist.classList.add("active");

    })
}