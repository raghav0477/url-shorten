
const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector(".result")
const items = document.querySelector(".items")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = input.value;

  shortenUrl(url);
});


async function shortenUrl(url) {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    const html =` <div>${data.result.short_link}</div>`
    items.insertAdjacentHTML('afterbegin', html);
    const newUrl = document.createElement("div")
    newUrl.classList.add("item");
    
    // const newUrl = document.createElement("div");
    // newUrl.classList.add("item");
    // newUrl.innerHTML = `
    //  <p> ${data.result.short_link}</p>
    //  <button class="newUrl-btn" >Copy</button>
    //  `;
    // result.prepend(newUrl);
    // const copyBtn = result.querySelector(".newUrl-btn");
    // copyBtn.addEventListener("click", () => {
    //   navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
    // });
    input.value = "";
  } catch (err) {
    console.log(err);
  }
}
function myfunction() {
  var copyText = document.getElementById("result"); 
  console.log(copyText); 
  // console.log('first')
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  // alert("Copied the text: " + copyText.value);
}