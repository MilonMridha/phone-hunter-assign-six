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
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
           <img src="${phone.image} " class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name : ${phone.phone_name} </h5>
        <h6 class="card-title">Brand : ${phone.brand} </h6>
        <a href="#" class="btn btn-dark">See Details</a>
      </div>
    </div>
      `;
    mainDiv.appendChild(div);
  });
};
