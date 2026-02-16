 const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".erroe-lebel");
const progressValue = document.querySelector(".progress-value");
const progressText = progressValue.querySelector("p");

let completedCount = 0;

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {

    const allGoalsAdded = Array.from(inputFields).every(input => {
      return input.value.trim() !== "";
    });

    if (!allGoalsAdded) {
      errorLabel.style.display = "block";
      return;
    }

    errorLabel.style.display = "none";

    const parent = checkbox.parentElement;

    if (parent.classList.contains("completed")) {
      parent.classList.remove("completed");
      completedCount--;
    } else {
      parent.classList.add("completed");
      completedCount++;
    }

    const progressPercent = (completedCount / inputFields.length) * 100;
    progressValue.style.width = `${progressPercent}%`;
    progressText.textContent = `${completedCount}/${inputFields.length} Completed`;
  });
});

inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    errorLabel.style.display = "none";
  });
});
