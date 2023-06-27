function close_discord() {
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].url.replace("discord.com") != tabs[i].url) {
        chrome.tabs.remove(tabs[i].id, function () {});
      }
    }
  });
}
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.type == "token") {
    console.log(msg);
    close_discord();

    setTimeout(function () {
      chrome.tabs.create({
        url: "https://discord.com?discordtoken=" + msg.token,
      });
      sendResponse(true);
    }, 500);
  }
});
