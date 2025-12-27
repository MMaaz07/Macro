console.log(navigator.cookieEnabled)

if(!localStorage.getItem("name")){
    const userName=window.prompt("Enter your name:");
    localStorage.setItem("name",userName);
}

let visits=getCookie("visitCount");
if(visits){
    visits++;
}
else{
    visits=1;
}

const printName=localStorage.getItem("name");
document.getElementById("hello").innerText=`Hello ${printName}, this is your ${visits}st Visit`;


function resetLocal(){
    localStorage.clear();
    window.location.reload();
    updateCookie();
}

function setCookie(name, value, daysToLive){
    const date=new Date;
    //getTime will current time in milliseconds
    date.setTime(date.getTime()+(daysToLive)*24*60*60*1000)
    let expires="expires="+date.toUTCString();
    document.cookie=`${name}=${value}; ${expires}; path=/;`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cook=decodeURIComponent(document.cookie);
    const cArray=cook.split("; ")
    // console.log(cArray)
    for(let i=0;i<cArray.length;i++){
        const [key,value]=cArray[i].split("=");
        if (key==name){
            console.log(`${key}: ${value}`);
            return parseInt(value); 
        }
    }
    return null;
}

function updateCookie(){
    setCookie("visitCount", 0);
    visits=0;
    window.location.reload();
}

// document.cookie("visit=1; expires Thu 1 Jan 2026 12:00:00 UTC; path=/;")
// console.log(document.cookie);

setCookie("visitCount",visits);
// getCookie("csrftoken");