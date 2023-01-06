const shareIcon = document.querySelector('.share-icon');
const socials = document.querySelector('.socials');

shareIcon.addEventListener('click', getClicked);

function getClicked() {
  socials.classList.toggle('active');
}
