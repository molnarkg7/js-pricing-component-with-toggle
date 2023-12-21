const btn = document.querySelector(".toggle-bar");

function Toggle() {
  let monthlyPay = document.getElementsByTagName("h3");
  let annualyPay = document.getElementsByTagName("h4");

  for (i = 0; i < monthlyPay.length; i++) {
    for (j = 0; j < annualyPay.length; j++) {
      if (monthlyPay[i].style.display === "none") {
        monthlyPay[i].style.display = "block";
        annualyPay[i].style.display = "none";
        btn.style.justifyContent = "flex-end";
      } else {
        monthlyPay[i].style.display = "none";
        annualyPay[i].style.display = "block";
        btn.style.justifyContent = "flex-start";
      }
    }
  }
}

btn.addEventListener("click", Toggle);
