userInfo=[]

function addUser(){
    const userName=window.prompt("Enter User Name: ");
    userInfo.push({userName});
    alert("User Added Successfully");
}

function clearUser(){
    userInfo.length=0;
    alert("All Users Cleared, Check console for more details");
    console.log("After Clearing")
    console.log(userInfo);
}



const btn=document.getElementById("btn");
btn.addEventListener("click", addUser);

const btn1=document.getElementById("btn1");
btn1.addEventListener("click", ()=>{
    console.log(userInfo);
});

const btn2=document.getElementById("btn2");
btn2.addEventListener("click", clearUser);