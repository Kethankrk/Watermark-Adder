// const {ipcRenderer} = require("electron")
const dropZone = document.getElementById("drop-zone")

dropZone.addEventListener("dragover", (event)=>{
    event.preventDefault()
})


dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
  
    const files = event.dataTransfer.files;
  
    console.log(files)
  });