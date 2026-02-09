// const checkBoxList = document.querySelectorAll(".custom-checkbox");
// const errorLabel = document.querySelector(".erroe-lebel");

// checkBoxList.forEach((checkbox) => {
//   checkbox.addEventListener("click", () => {
//     const goalContainer = checkbox.parentElement;
//     const input = goalContainer.querySelector(".goal-input");

//     if (input.value !== "") {
//       goalContainer.classList.toggle("completed");
//       errorLabel.style.display = "none";
//     } else {
//       errorLabel.style.display = "block";
//     }
//   });
// });


const checkBoxList = document.querySelectorAll(".custom-checkbox")
const inputFields = document.querySelectorAll(".goal-input")

checkBoxList.forEach((checkbox)=>{ 
      checkbox.addEventListener("click",(e)=>{
        const allFieldsFilled = {...inputFields}.every(function(input){
          return input.value
        })
        if(allFieldsFilled){ 
        checkbox.parentElement.classList.toggle("completed") 
        }
      })
})