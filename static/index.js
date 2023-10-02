datasets.forEach(data => {
  const teamItem = document.createElement("div");
  teamItem.className = "col-xl-3 col-sm-6 mb-5";
  teamItem.innerHTML = `
      <div class="bg-white rounded shadow-sm py-5 px-4">
          <img src="${data.image_url}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">${data.fullname}</h5>
          <span class="small text-uppercase text-muted">${data.vice}</span>
          <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
      </div>
  `;
  document.querySelector("#members_info").appendChild(teamItem);
});