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
      .then((data) => displayPhones(data));
  }
};
// Display All Phones in UI-------------------->
const displayPhones = (phones) => {
  if (phones.status === false) {
    alert("Phone Result Not Found");
  } else {
    const allPhones = phones.data.slice(0, 20);
    const mainDiv = document.getElementById("main");
    mainDiv.innerHTML = "";
    allPhones.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("col-lg-4");
      div.classList.add("mt-4");
      div.innerHTML = `
            <div class="card" style="width: 18rem;">
                 <img src="${phone.image} " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Name : ${phone.phone_name} </h5>
              <h6 class="card-title">Brand : ${phone.brand} </h6>
              <a href="#" class="btn btn-dark" onclick="loadSingleData('${phone.slug}')">See Details</a>
            </div>
          </div>
            `;
      mainDiv.appendChild(div);
    });
  }
};
// Load & Fetch See Details phone Data-------------->
const loadSingleData = (phoneId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySinglePhone(data.data));
};
// Display Single phone Details in UI----------------->
const displaySinglePhone = (singlePhone) => {
  console.log(singlePhone);
  const mainDiv2 = document.getElementById("see-details");
  mainDiv2.innerHTML = "";
  const singleDiv = document.createElement("div");
  singleDiv.innerHTML = `
  <div class="card" style="width: 18rem;">
           <img src="${singlePhone.image} " class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name : ${singlePhone.name} </h5>
        <h6 class="card-title">Release Date : ${
          singlePhone.releaseDate ? singlePhone.releaseDate : "Not Found"
        } </h6>
        <h6 class="card-title">Brand : ${singlePhone.brand} </h6>
        <p><h6>Sensors:</h6>
        ${singlePhone.mainFeatures.sensors[0]}<br>
        ${singlePhone.mainFeatures.sensors[1]}<br>
        ${singlePhone.mainFeatures.sensors[2]}<br>
        ${singlePhone.mainFeatures.sensors[3]}<br>
        ${singlePhone.mainFeatures.sensors[4]}<br>
        ${singlePhone.mainFeatures.sensors[5]}<br>
        ${singlePhone.mainFeatures.sensors[6]}<br><br>
        
       <h6>Others:</h6>
        Bluetooth: ${singlePhone.others.Bluetooth} 
        GPS: ${singlePhone.others.GPS}  
        NFC: ${singlePhone.others.NFC}<br>
        Radio: ${singlePhone.others.Radio}<br>
        USB: ${singlePhone.others.USB}<br>
        WLAN: ${singlePhone.others.WLAN}
        </p>
      </div>
    </div>
  `;
  mainDiv2.appendChild(singleDiv);
};
