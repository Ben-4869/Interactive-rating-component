// Variables

let rateState = document.querySelector(".rate-state");
let thankyouState = document.querySelector(".thankyou-state");

let btn = [];
let rating = 0;

let btnSubmit = document.querySelector("#submit-btn");
let selectedRating = document.querySelector(".selected-rating");

for (let i = 1; i < 6; i++) {
    btn[i] = document.querySelector(`#rate-${i}`);
    btn[i].addEventListener("click", () => {
        rating = i;
    });
}

btnSubmit.addEventListener("click", () => {
    selectedRating.textContent = `You selected ${rating} out of 5`;
    rateState.style.display = "none";
    thankyouState.style.display = "flex";
});
