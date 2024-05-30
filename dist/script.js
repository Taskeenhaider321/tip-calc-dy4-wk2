document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.getElementById("tipInput");
    const customInput = document.getElementById("input-custom");
    const peopleInput = document.getElementById("peopleInput");

    const tipAmountOutput = document.getElementById("tip-amount-output");
    const totalAmountOutput = document.getElementById("total-amount-output");
    const resetButton = document.getElementById("reset-output");

    function calculateTip(bill, tipPercentage, people) {
        const tipAmount = (bill * tipPercentage) / 100;
        const totalAmount = bill + tipAmount;
        const amountPerPerson = totalAmount / people;

        return {
            tipAmount: tipAmount.toFixed(2),
            totalAmount: totalAmount.toFixed(2),
            amountPerPerson: amountPerPerson.toFixed(2),
        };
    }

    function updateOutputs() {
        const bill = parseFloat(billInput.value) || 0;
        const tipPercentage = customInput.value ? parseFloat(customInput.value) : 0;
        const people = parseFloat(peopleInput.value) || 1;
        const { tipAmount, totalAmount, amountPerPerson } = calculateTip(
            bill,
            tipPercentage,
            people
        );

        tipAmountOutput.textContent = tipAmount;
        totalAmountOutput.textContent = amountPerPerson;
        totalAmount
    }

    function resetValues() {
        billInput.value = "";
        customInput.value = "";
        peopleInput.value = "";
        tipAmountOutput.textContent = "0.00";
        totalAmountOutput.textContent = "0.00";
    }

    function handlePercentageButtonClick(buttonValue) {
        const numericValue = parseFloat(buttonValue);
        customInput.value = numericValue;
        updateOutputs();
    }

    billInput.addEventListener("input", updateOutputs);
    customInput.addEventListener("input", updateOutputs);
    peopleInput.addEventListener("input", updateOutputs);
    resetButton.addEventListener("click", resetValues);

    const percentageButtons = document.querySelectorAll(".percentage-button");
    percentageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            handlePercentageButtonClick(button.textContent);
        });
    });
});




const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});
themeCheck();

gsap.from("#mainbox",{
    scale: -1,
    delay: 0.5,
    duration: 1.5,
})