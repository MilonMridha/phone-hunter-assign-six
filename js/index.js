// Load & Fetch All Phones Data------------------>
const loadPhoneData = () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  inputField.value = "";
  if (inputText == "" || !isNaN(inputText)) {
    alert("Enter Phone Name");
  } else {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayPhones(data.data.slice(0, 20)));
  }
};
// Display All Phones in UI-------------------->
const displayPhones = (phones) => {
  const mainDiv = document.getElementById("main");
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("mt-4");
  });
};
