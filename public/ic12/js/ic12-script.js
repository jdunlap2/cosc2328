// IC12 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

// -- element selection by id --

const statusBox = document.getElementById("status-box");
statusBox.textContent = "DOM is ready! Elements successfully selected.";
console.log("status box: ", statusBox);


// -- query selector --
const firstCard = document.querySelector(".card");
firstCard.querySelector("p").textContent = "this card was used by querySelector";

// -- classlist.add -- 
firstCard.classList.add("highlight");
statusBox.classList.add("active");

// -- querySelectorAll  +for each (with even index highlight)--

const listItems = document.querySelectorAll(".list-item");

listItems.forEach((item, index) => {
    if (index % 2 === 0) {
        item.classList.add("highlight");
    }
});

// -- classList.toggle + classList.remove -- 

const thirdCard = document.querySelector("#card-3");
thirdCard.classList.toggle("hidden");

const secondCard = document.querySelector("#card-2");
secondCard.classList.remove("card");

// -- textContent vs innerHTML saefty --

const secondCardParagraph = secondCard.querySelector("p");
secondCardParagraph.textContent = "safe update: even text like <script>alert('hack')</script> renders as plain characters, not real html.";