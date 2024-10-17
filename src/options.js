const colorPicker = document.getElementById("colorPicker");

chrome.storage.local.get("backgroundColor", (data) => {
    if (data.backgroundColor) {
        colorPicker.value = data.backgroundColor;
    }
});

colorPicker.addEventListener("input", (event) => {
    const selectedColor = event.target.value;
    chrome.storage.local.set({ backgroundColor: selectedColor });
});

document.getElementById("clearStorageBtn").addEventListener("click", function() {
    const defaultColor = "#121212";

    chrome.storage.local.clear(() => {
        alert("Extension Cleared! Reload Pages!");
        colorPicker.value = defaultColor;
    });
});
