const colorPicker = document.getElementById("colorPicker");

chrome.storage.local.get("backgroundColor", (data) => {
    if (data.backgroundColor) {
        colorPicker.value = data.backgroundColor;
    }
});

colorPicker.addEventListener("input", (event) => {
    const selectedColor = event.target.value;
    console.log("Background Color Set");
    chrome.storage.local.set({ backgroundColor: selectedColor });
});

document.getElementById("clearStorageBtn").addEventListener("click", function() {
    const defaultColor = "#121212";

    console.log("Extension Reset");
    
    chrome.storage.local.clear(() => {
        alert("Extension Cleared! Reload Pages!");
        colorPicker.value = defaultColor;
    });
});
