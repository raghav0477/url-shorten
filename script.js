const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector(".result");
const items = document.querySelector(".items");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = input.value;

  shortenUrl(url);
});

async function shortenUrl(url) {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    console.log(url)
    const data = await res.json();
    const item = document.createElement("div");
    item.classList.add("items");
    result.appendChild(item);
    // document.getElementById()
    // item.appendChild(subitem);
    const html = `<div class="main-url">${url}</div> <div class = "shorten-url">${data.result.short_link}</div>`;
    item.insertAdjacentHTML("afterbegin", html);
    // result.appendChild(html);
    const newUrl = document.createElement("div");
    newUrl.classList.add("item");

    const butn = document.createElement("button")
    butn.innerHTML = "Copy It!";
    butn.addEventListener ("click", function() {
      navigator.clipboard.writeText(butn.previousElementSibling.textContent);
    });
    butn.classList.add('newUrl-btn');
    item.appendChild(butn);
    input.value = "";
  } catch (err) {
    console.log(err);
  }
}



