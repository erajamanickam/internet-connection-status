    let internet = document.getElementById("internet");
    if(navigator.onLine){
        internet.textContent = "We are Online!";
        internet.innerHTML = "<i class='uil uil-wifi'></i> You're online now"
        internet.style.color = "green";
    }
    window.addEventListener("online",function(){
        internet.textContent = "we are online";
        internet.style.color = "green";
    })
    window.addEventListener("offline",function(){
        internet.textContent = "You're Offline now"
        internet.style.color = "red";
    });
