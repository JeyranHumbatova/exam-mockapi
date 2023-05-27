document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      document.getElementById('navbar_top').classList.add('fixed-top');

      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');

      document.body.style.paddingTop = '0';
    }
  });
});


const box = document.querySelector('#boxes');
function getdata() {
  fetch('https://646a0cea03bb12ac2098a95e.mockapi.io/fetch')
    .then(res => res.json())
    .then(res =>
      box.innerHTML = '',
      res.forEach(el => {
        box.innerHTML += ` <div class="card ">
      <div class=" icon position-relative">
          <img src=" ${el.image}"  alt="...">
          <div class="overlay">
              <i class="lab la-facebook-f"></i><i class="lab la-twitter"></i><i
                  class="las la-camera"></i>
          </div>
      </div>
      <div class="card-body text-center p-5">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.job}</p>
      </div>
  </div>`
      })
    ).catch(err => console.log(err))
}

