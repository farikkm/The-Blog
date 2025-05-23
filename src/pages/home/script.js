const closeBtn = document.querySelector(".closeBtn");
const burgerBtn = document.getElementById("burgerBtn");
const modal = document.getElementById("modal");

burgerBtn.addEventListener('click', () => {
    console.log(burgerBtn);
    burgerBtn.classList.toggle('active');
    modal.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    burgerBtn.classList.remove('active');
});
