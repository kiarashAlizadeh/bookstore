const carousel = document.querySelector('.carousel');
let i = 0,
  intervalId;
const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 90}deg`;
  }, 3000);
};

intervalFn();

