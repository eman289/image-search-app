/// <reference types="../@types/jquery" />
$(function () {
  let searchInput = "";
  let page = 1;
  let data = [];

  async function searchImgs() {
    const accessKey = "KmAl00U7hxyRuHW5mBmMh-rbbRK0hPp-lZwfBJ6xrMk";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${accessKey}`;
    const searchApi = await fetch(url);
    const apiResponse = await searchApi.json();

    if (!apiResponse.error) {
      if (page === 1) {
        data = apiResponse.results;
      } else {
        data = data.concat(apiResponse.results);
      }
      displayImgs();
    }
  }

  function displayImgs() {
    let searchResults = "";
    if (data.length === 0) {
      searchResults = "<p class='text-center fw-bold'>No results found.</p>";
    } else {
      for (let i = 0; i < data.length; i++) {
        searchResults += `
          <div class="col-md-6 col-lg-4">
            <div class="card searchImg">
            <div id="cardImg">
               <img
                src="${data[i].urls.small}"
                class="card-img-top"
                alt="${data[i].alt_description}"
                /></div>
               <div class="card-body">
                <a
                  href="${data[i].links.html}"
                  class="card-text"
                  target="_blank"
                  rel="noopener"
                  >${data[i].alt_description}</a
                >
               </div>
             </div>
          </div>`;
      }
    }
    $("#inputResults").html(searchResults);

    if (data.length > 0) {
      $("#showMoreBtn").removeClass("d-none");
    } else {
      $("#showMoreBtn").addClass("d-none");
    }
  }

  function performSearch() {
    searchInput = $("#searchInput").val();
    searchImgs();
  }

  $("#searchInput").on("keyup", function (event) {
    if (event.key === "Enter") {
      page = 1;
      performSearch();
    }
  });

  $("#searchBtn").on("click", function () {
    page = 1;
    performSearch();
  });

  $("#showMoreBtn").on("click", function () {
    page++;
    if (searchInput == $("#searchInput").val()) {
      performSearch();
    } else {
      searchImgs();
    }
  });

  $(".fixedCard").on("click", function () {
    const cardTitle = $(this).find(".cardTitle").text();
    searchInput = cardTitle;
    searchImgs();
  });

  $("#inputResults").on("click", ".searchImg", function () {
    const imgLink = $(this).find(".card-text").attr("href");
    window.open(imgLink, "_blank");
  });
});
