const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// question 1
console.log("question1");

let cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();
// question 2
console.log("question2");
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
console.log("question3");

heading.style.fontSize = "2em";

// question 4
console.log("question4");

heading.classList.add("subheading");

// question 5
console.log("question5");

let paragraphs = document.querySelectorAll("p");
let i = "1";

for (let p of paragraphs) {
  p.style.color = "red";

  console.log("changed color of " + i++ + " paragraph(s)");
}

// question 6
console.log("question6");

let resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// question 7
console.log("question7");

function qSevenLoop(list) {
  for (let item of list) {
    console.log("%c" + item.name, "color: green");
  }
}

qSevenLoop(cats);

// question 8
console.log("question8");

let catReturn = "";

function createCats(cats) {
  for (let cat of cats) {
    if (isNaN(cat.age)) {       // also accepts strings that are numbers
      cat.age = "Age unknown";
    }
    catReturn += `
        <div>
        <h5>${cat.name}</h5>
        <p>${cat.age}</p>

        </div>`;
  }
  return catReturn;
}
document.querySelector("div.cat-container").innerHTML = createCats(cats);
