let completed = 0;
let total = 0;
document.querySelector("button").addEventListener("click", () => {
  let task = document.querySelector("input");
  // // console.log(task.value);
  // completed++;
  // document.querySelector(".total").textContent=completed;
 if(task.value){
  addTask(task.value);
 }
});
function addTask(task) {
    document.querySelector("input").value="";
  let box = document.createElement("div");
  let radio = document.createElement("input");
  let work = document.createElement("span");
  let del = document.createElement("span");
  document.querySelector(".tasks").appendChild(box);
  work.textContent = task;
  box.appendChild(radio);
  box.appendChild(work);
  box.appendChild(del);
  radio.setAttribute("type", "radio");
  del.innerText = "🧹";
  // box.appendChild(del);
  del.classList.add("clear");
  box.classList.add("box");
  total++;
  document.querySelector(".total").innerText = total;
  applyingFunctionality(del);
   radioButtonClicking(radio);
}
function applyingFunctionality(del){
      del.addEventListener("click", (event) => {
        if(event.target.parentElement.firstElementChild.checked){
         completed--; 
         document.querySelector(".com").textContent = completed;  
        }
    event.target.parentElement.remove();
    total--;
    document.querySelector(".total").innerText = total;
  });
}
function radioButtonClicking(radio){
  radio.addEventListener("change", () => {
    if (radio.checked) {
      completed++;
      document.querySelector(".com").textContent = completed;
    }
  });
}

