if (document.querySelector(".discord-token-login-popup"))
  document.querySelector("#submit").addEventListener("click", () => {
    token = document.querySelector("#token").value;

    if (token != "") {
      document.querySelector("#token").style.border = "0px solid #222426";

      window.open("https://discord.com?discordtoken=" + token, "_blank");
      //chrome.runtime.sendMessage({"type":"token","token":token},null, function(response) {

      //});
    } else {
      document.querySelector("#token").style.border = "0px solid #ee4444";
    }
  });
