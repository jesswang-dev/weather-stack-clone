const questionList = document.querySelectorAll(".pricing_FAQ li");

for (let i = 0; i < questionList.length; i++) {
  questionList[i].addEventListener("click", () => {
    if(questionList[i].classList.length === 0) {
        questionList[i].classList.add("open");
    } else {
        questionList[i].classList.remove("open");
    }
  });
}

const monthlyBtn = document.querySelector("#monthly");
const monthlyData = document.querySelectorAll(".monthly_data");
const yearlyBtn = document.querySelector("#yearly");
const yearlyData = document.querySelectorAll(".yearly_data");
// console.log(monthlyData, yearlyData)
monthlyBtn.addEventListener("click", (e) => {
    for(let i = 0; i < monthlyData.length; i++) {
        monthlyData[i].style.display = "block"
        yearlyData[i].style.display = "none";
    }
})

yearlyBtn.addEventListener("click", (e) => {
  for (let i = 0; i < yearlyData.length; i++) {
    monthlyData[i].style.display = "none";
    yearlyData[i].style.display = "block";
  }
});


