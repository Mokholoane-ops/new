const items = [];

function addContact() {
  const nameInput = document.querySelector("#name");
  const phoneNumberInput = document.querySelector("#phoneNumber");
  items.push({
    name: nameInput.value,
    phoneNumber: phoneNumberInput.value,
  });
  nameInput.value = "";
  phoneNumberInput.value = "";

  const ul = document.querySelector("ul");
  ul.textContent = "";
  for (const item of items) {
    const html = `
        <li>
            
            <div>
            <img src= 'profile.png' />
                <h3>${item.name}</h3>
                <p>${item.phoneNumber}</p>
            </div>
        </li>
    `;
    ul.insertAdjacentHTML("beforeend", html);
  }
}
