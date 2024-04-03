let boxes=document.querySelectorAll(".box");
let ans="true";

let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count=0;
boxes.forEach((box)=>{
  box.addEventListener("click",function(){
    if(ans=="true"){
        box.innerText="O";
        ans="false";
    }else{
        box.innerText="X";
        ans="true";
    }
    box.disabled=true;
    let win=winner();
    count++;
    checkcount(count);
  })
});


const checkcount=(c)=>{
    if(c===9){
        let a=document.querySelector(".msgbox");
    a.innerText = `IT is a Draw`;
    }
}


const passans=(n)=>{
    let a=document.querySelector(".msgbox");
    a.innerText = `Congratulations, Winner is ${n}`;
    disableBoxes();
}


const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};


const winner = ()=> {
    for(let pattern of winpatterns){
        let ans1=boxes[pattern[0]].innerText;
        let ans2=boxes[pattern[1]].innerText;
        let ans3=boxes[pattern[2]].innerText;

        if(ans1!=="" && ans2!=="" && ans3!==""){
            if(ans1===ans2 && ans2===ans3){
                passans(ans1);
                return true;
            }
        }
    }
              return false;
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};


let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
btn1.addEventListener("click",function(){
    ans="true";
    count=0;
    enableBoxes();
});
btn2.addEventListener("click",function(){
    ans="true";
    count=0;
    enableBoxes();
});