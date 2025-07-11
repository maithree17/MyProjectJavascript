let userscore = 0;
let compscore = 0;

const msg = document.querySelector(".msg-container");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
function showwinnner(userwin,userchoice,compchoice){
    if(userwin){
        console.log("You win!");
        msg.innerText="You win! Your's "+userchoice+" beats "+compchoice;
        msg.style.backgroundColor="lightgreen";
        userscore++;
        userScore.innerText=userscore;
    }
    else{
        console.log("computer win!");
        msg.innerText="You lost! computer's "+compchoice+" beats "+userchoice;
        msg.style.backgroundColor="red";
        compscore++;
        computerScore.innerText=compscore;

    }
}
function getcomputerchoice(){
    const options=["rock","paper","scissor"];
    const randomnumber=Math.floor(Math.random()*3);
    return options[randomnumber];
}

function playgame(userchoice){
    const compchoice=getcomputerchoice();
    console.log("user choice: "+userchoice);
    console.log("computer choice: "+compchoice);
    if(userchoice===compchoice){
        console.log("It's a draw!");
        msg.innerText="It's a draw!";
        msg.style.backgroundColor="yellow";
        return;
   }
   else{
    let userwin=true;
    if(userchoice==="rock")
    {
        userwin= compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper")
    {
        userwin= compchoice==="scissors"?false:true;
    }
    else if(userchoice==="scissor")
    {
        userwin= compchoice==="rock"?false:true;
    }
    showwinnner(userwin,userchoice,compchoice);
   }

}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    });
});