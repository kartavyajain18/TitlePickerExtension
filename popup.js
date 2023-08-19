const btn = document.querySelector(".pickTitle");
const titleValue = document.querySelector(".titleValue");

btn.addEventListener("click", async(tab)=>{
    await chrome.tabs.query(
        {active: true, currentWindow :true},
        function (tab) {
            var value = tab[0].title;
            console.log(value);
            titleValue.innerHTML = value;
        }
    );
})