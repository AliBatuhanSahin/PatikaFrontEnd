let nameInput = prompt("Lütfen İsminizi Giriniz: ")

let nameArea = document.querySelector("#myName")

nameArea.innerHTML = nameInput;

function showTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[now.getDay()];

    document.querySelector("#myClock").innerHTML = "Saat: " + h + ":" + m + ":" + s + " " + day;

  setTimeout(showTime, 1000);
  }

  showTime()

