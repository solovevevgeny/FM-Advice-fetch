window.addEventListener('load', function () {

    async function fetchAdvice(url) {
        await fetch(url)
        .then(res => res.json())
        .then(data => {
          let cardTitleDiv = document.querySelector('.card__title');
          let cardTextDiv = document.querySelector('.card__text');

          cardTitleDiv.innerHTML += data.slip.id;
          cardTextDiv.innerHTML = data.slip.advice;

        });
      }

      fetchAdvice('https://api.adviceslip.com/advice');
});
