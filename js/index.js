// Load & Fetch All Phones Data------------------>
const loadPhoneData = () => {
  const inputField = document.getElementById("input-field");
  const mainDiv2 = document.getElementById("see-details");
  mainDiv2.innerHTML = "";
  const inputText = inputField.value;
  inputField.value = "";
  if (inputText == "" || !isNaN(inputText)) {
    alert("Enter Phone Name");
  } else {
    toggleSpinner("block");
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayPhones(data));
  }
};

// Add Toggle Spinner--------------->
const toggleSpinner = (displayStyle) => {
  document.getElementById("spinner").style.display = displayStyle;
};

// Display All Phones in UI-------------------->
const displayPhones = (phones) => {
  if (phones.status === false) {
    alert("Phone Result Not Found");
    toggleSpinner("none");
  } else {
    const allPhones = phones.data.slice(0, 20);
    const mainDiv = document.getElementById("main");
    mainDiv.innerHTML = "";
    allPhones.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("col-lg-4");
      div.classList.add("col-12");
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
      toggleSpinner("none");
    });
  }
};
// Load & Fetch See Details phone Data-------------->
const loadSingleData = (phoneId) => {
  toggleSpinner("block");
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySinglePhone(data.data));
};
// Display Single phone Details in UI----------------->
const displaySinglePhone = (singlePhone) => {
  const mainDiv2 = document.getElementById("see-details");
  mainDiv2.innerHTML = "";
  const singleDiv = document.createElement("div");
  singleDiv.innerHTML = `
  <div class="card" style="width: 18rem;">
           <img src="${singlePhone.image} " class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">Name : ${singlePhone.name} </h5>
          <h6 class="card-title">Release Date : ${
            singlePhone.releaseDate ? singlePhone.releaseDate : "Comming Soon"
          }   </h6>
          <h6 class="card-title">Brand : ${singlePhone.brand} </h6>
          <p>
          <h6>MainFeatures:</h6>
          <li>ChipSet: ${singlePhone.mainFeatures.chipSet}</li>
          <li>Memory: ${singlePhone.mainFeatures.memory}</li>
          <br>
          <h6>Sensors:</h6>
       
        ${
          singlePhone.mainFeatures.sensors[0]
            ? singlePhone.mainFeatures.sensors[0]
            : "Not Found"
        }
        <br>
        ${
          singlePhone.mainFeatures.sensors[1]
            ? singlePhone.mainFeatures.sensors[1]
            : "Not Found"
        }
        <br>
        ${
          singlePhone.mainFeatures.sensors[2]
            ? singlePhone.mainFeatures.sensors[2]
            : "Not Found"
        }<br>
        ${
          singlePhone.mainFeatures.sensors[3]
            ? singlePhone.mainFeatures.sensors[3]
            : "Not Found"
        }<br>
        ${
          singlePhone.mainFeatures.sensors[4]
            ? singlePhone.mainFeatures.sensors[4]
            : "Not Found"
        }<br>
        ${
          singlePhone.mainFeatures.sensors[5]
            ? singlePhone.mainFeatures.sensors[5]
            : "Not Found"
        }<br>
        ${
          singlePhone.mainFeatures.sensors[6]
            ? singlePhone.mainFeatures.sensors[6]
            : "Not Found"
        }<br><br>
        
       <h6>Others: </h6>
       <li>Bluetooth: ${
         singlePhone?.others?.Bluetooth
           ? singlePhone?.others?.Bluetooth
           : "no others value"
       }</li> 
       <li>GPS: ${
         singlePhone?.others?.GPS ? singlePhone?.others?.GPS : "no others value"
       }  </li> 
       <li>NFC: ${
         singlePhone?.others?.NFC ? singlePhone?.others?.NFC : "no others value"
       }</li> 
       <li>Radio: ${
         singlePhone?.others?.Radio
           ? singlePhone?.others?.Radio
           : "no others value"
       }</li>
       <li>USB: ${
         singlePhone?.others?.USB ? singlePhone?.others?.USB : "no others value"
       }</li> 
       <li>WLAN: ${
         singlePhone?.others?.WLAN
           ? singlePhone?.others?.WLAN
           : "no others value"
       }</li> 
        </p>
      </div>
    </div>
  `;
  mainDiv2.appendChild(singleDiv);
  toggleSpinner("none");
};
