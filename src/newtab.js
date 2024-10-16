chrome.storage.local.get("backgroundColor", (data) => {
    if (data.backgroundColor) {
        document.body.style.backgroundColor = data.backgroundColor;
    } else {
        const help = document.getElementById("introhelp");
        document.body.style.backgroundColor = "#121212";
      
        document.getElementById("introh1").innerHTML = "Welcome to the Minimal New Tab Page!";
        document.getElementById("intro").innerHTML = "This extension is for a very minimal and simple solid color NTP.";
        document.getElementById("introp").innerHTML = "<b>You have no background color selected. Please choose a color by clicking on the <img src='icon.png' style='width: 25px;height: 25px;'> extension icon up there ⬆⬆⬆!</b>";
        document.getElementById("introhelp").innerHTML = "For more instructions, click here!";
      
        help.addEventListener("click", () => {
            alert("Skill issue. Figure it out.");
    });
    }
});
