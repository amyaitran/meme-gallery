var gallery = document.querySelector("main")
var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'
];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener("click", clickEvent);

function clickEvent() {
  if (imageUrlInput.value !== '') {
    console.log(imageUrlInput.value);
    imageUrls.push(imageUrlInput.value);
  };
  imageUrlInput.value = '';
  updateGallery();
}

function updateGallery() {
  gallery.innerHTML = '';
  for (var x = 0; x < imageUrls.length; x++) {
    var imageElement = document.createElement('img');
    imageElement.className = "gallery-image";
    imageElement.src = imageUrls[x];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
