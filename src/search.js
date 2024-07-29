// 검색

export let searchFunc = function () {
  const query = document.getElementById("inputBox").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((item) => {
    const inCardTitle = item.querySelector("#inCardTitle").textContent.toLowerCase();
    let filteredImg = item.querySelector("#img");
    let pTagInCard = item.querySelector(".pIncard");

    if (inCardTitle.includes(query)) {
      item.style.display = "block";
      filteredImg.style.left = "9px";
      pTagInCard.style.left = "23px";
    } else {
      item.style.display = "none";
    }
  });
};
