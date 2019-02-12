
document.addEventListener('DOMContentLoaded', function () {

  // The following code is based off a toggle menu by @Bradcomp
  // source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
  (function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
    menu.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  })();

  /* Smooth scroll */
  // Scroll to specific values
  // scrollTo is the same
  window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  });

  // Scroll certain amounts from current position
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });

  /* Modal code */


  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  const successModal = document.querySelector('.signup-confirm-modal');
  const failureModal = document.querySelector('.signup-failed-modal');

  /* Form submission */

  const signUpForm = document.querySelector('#sign-up form');
  signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const url = "https://docs.google.com/forms/d/e/1FAIpQLScahJXQs_QO8n6c7EhGndY9skZvgl23r-QbwIqGs61wdYlcsw/formResponse?entry.109977745="+email+"&submit=Submit";
    const options = {
      method: 'GET',
      mode: 'no-cors'
    };

    fetch(url,options)
    .then(function(response) {
      //Clear input
      event.target.email.value = "";
      successModal.classList.add('is-active');
    })
    .catch(function(error) {
      console.log(error);
      failureModal.classList.add('is-active');
    });

  });


    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;
      let url = "https://docs.google.com/forms/d/e/1FAIpQLSenKqGfzAAzGzWTYuhk34XdxhUVmBDmABmQusA0rzwpB6_XTA/formResponse?";
      url += "entry.484486239="+name;
      url += "&entry.1465602530="+email;
      url += "&entry.400053469="+message;
      url += "&submit=Submit";
      const options = {
        method: 'GET',
        mode: 'no-cors'
      };

      fetch(url,options)
      .then(function(response) {
        //Clear input
        event.target.email.value = "";
        event.target.name.value = "";
        event.target.message.value = "";
        successModal.classList.add('is-active');
      })
      .catch(function(error) {
        console.log(error);
        failureModal.classList.add('is-active');
      });

    });


});
