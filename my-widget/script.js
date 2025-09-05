//This displays the todays date in the Uk
  const today = new Date();
  const dayName = today.toLocaleDateString("en-GB", {weekday: "long"}); // day
  const dayNumber = today.getDate(); // number of the month eg 22 of august only 22 will be displayed
  const monthName = today.toLocaleDateString("en-GB", {month: "long"}); // month

  document.getElementById("dayName").textContent = dayName;
  document.getElementById("dayNumber").textContent = dayNumber;
  document.getElementById("monthName").textContent = monthName;

  let totalTasks = 0;
  let tasksDone = 0;

function addTask () {
/**When the user types in their task in the input and clicks submit a new task will appear
 * this will appear clearly and neatly with the same amount of gaps to avoid it from looking messy
 * When a new task is added it will have a check and cross button on the right if they want to remove or mark a task complete
 * Text of the user's input will display on the left hand side
 */
  const userInput = document.getElementById("ftask")
    let newTasks = document.querySelector(".tasks");
    let taskList = document.createElement("div")
    taskList.classList.add("task");
    const containText = document.createElement("span");
    containText.textContent = userInput.value;
    taskList.appendChild(containText);
    userInput.value = '';
    // check button on task
    /**check button is displayed as check.png and when clicked
     * the task is removed and progress increases as a task is finished
     * updateProgress() is called to increase the progress bar's width
     */
    const check = document.createElement("button");
    check.type = "button";
    check.classList.add("check_button")
    check.innerHTML = '<img src = "check.png" alt = "check">';
    check.onclick = () => {tasksDone++; updateProgress();; taskList.remove()};

    // cross button on task
    /**cross button is displayed as cross.png and when clicked
     * the task is removed and progress looks like it increases as there are less tasks
     * updateProgress() is called to changethe progress bar's width
     */
    const cross = document.createElement("button");
    cross.type = "button";
    cross.classList.add("cross_button")
    cross.innerHTML = '<img src = "cross.png" alt = "cross">';
    cross.onclick = () => {
      if (tasksDone > totalTasks-1) {
        tasksDone = totalTasks-1;
      }
      totalTasks--; updateProgress();; taskList.remove();};

    const space = document.createElement("div");
    space.style.display = "flex";
    space.style.gap = "5px"

    space.appendChild(check);
    space.appendChild(cross);

    taskList.appendChild(space);
    newTasks.appendChild(taskList);
    
    totalTasks++;
    updateProgress();
  
}


function updateProgress() {
  let progressContainer = document.getElementById("progress_movement");
  if (totalTasks == 0) {
    progressContainer.style.width = "0%";
    tasksDone = 0; //when tasks are done total tasks are at 0 and the progreess will be set at 0
  }
  else {
    let newProgress = (tasksDone/totalTasks) * 100; // progress bar will increase when a task is completed and decrease if a new task is added
    progressContainer.style.width = newProgress + "%";
  }
}


