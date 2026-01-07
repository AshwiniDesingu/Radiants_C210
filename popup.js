document.getElementById("send").onclick = () => {
  const query = document.getElementById("query").value;

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { userQuery: query });
  });
};
