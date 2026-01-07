chrome.runtime.onMessage.addListener((request) => {
  const query = request.userQuery.toLowerCase();
  const words = query.split(" ");

  let matched = false;

  document.querySelectorAll("button, a, input").forEach(el => {
    const text = (el.innerText + " " + el.placeholder).toLowerCase();

    words.forEach(word => {
      if (text.includes(word)) {
        highlight(el, word);
        matched = true;
      }
    });
  });

  if (!matched) {
    alert("AI: I could not find that on this page.");
  }
});

function highlight(element, label) {
  element.style.border = "3px solid red";
  element.scrollIntoView({ behavior: "smooth", block: "center" });

  const tip = document.createElement("div");
  tip.innerText = "AI Guide → Click here (" + label + ")";
  tip.style.position = "absolute";
  tip.style.background = "red";
  tip.style.color = "white";
  tip.style.padding = "5px";
  tip.style.zIndex = "9999";

  const rect = element.getBoundingClientRect();
  tip.style.top = rect.top + window.scrollY - 30 + "px";
  tip.style.left = rect.left + "px";

  document.body.appendChild(tip);

  setTimeout(() => tip.remove(), 5000);
}
