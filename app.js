const shareIcon = document.querySelector('.share-icon');
const socials = document.querySelector('.socials');

shareIcon.addEventListener('click', getClicked);

function getClicked() {
  socials.classList.toggle('active');

  // if (shareIcon.classList !== 'active') {
  // } else {
  //   socials.classList.remove('active');
  // }
}
