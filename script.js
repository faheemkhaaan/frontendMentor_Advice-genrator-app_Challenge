const adviceText = document.getElementById("advice");
const btn = document.querySelector(".icon");
const slipId = document.querySelector("#slip-id");

async function advice() {
    try {
        const getAdvice = await fetch("	https://api.adviceslip.com/advice");
        const data = await getAdvice.json();

        console.log(data);
        displayAdvice(data);
    } catch (error) {
        console.error("Error fetching:", error);
    }
}

function displayAdvice(getAdvicehere){
    const adviceDisplay = getAdvicehere.slip.advice;
    let id = getAdvicehere.slip.id;

    slipId.textContent = id
    adviceText.textContent = `"${adviceDisplay}"`;
}

btn.addEventListener("click", advice);