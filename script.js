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
    const data = await res.json();
    const html = ` <div>${data.result.short_link}</div>`;
    items.insertAdjacentHTML("afterbegin", html);
    // result.appendChild(html);
    const newUrl = document.createElement("div");
    newUrl.classList.add("item");
    
    // var div = document.createElement('div');
    // div.innerHTML = "my <b>new</b> skill - <large>DOM maniuplation!</large>";
    // div.setAttribute('class', 'myclass'); 
    const butn = document.createElement("button")
    butn.addEventListener ("click", function() {
      // alert("did something");
      navigator.clipboard.writeText(butn.previousElementSibling.textContent);
    });
    butn.classList.add('newUrl-btn');
    // <button class="newUrl-btn" onclick="myfunction()">Copy</button>
    // result.appendChild(div)
    // result.appendChild(butn)
    items.appendChild(butn);

    // document.body.appendChild(div);


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


// var div = document.createElement('div');
// div.innerHTML = "my <b>new</b> skill - <large>DOM maniuplation!</large>";
// div.style.color = 'red';
// div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
// // document.body.appendChild(div)
//     result.appendChild(div)

