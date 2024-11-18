const image1 = document.querySelector('#image1');


image1.addEventListener('mouseover', AddImage );
image1.addEventListener('mouseleave' , removeImage);

function AddImage() {
image1.src = "./images/image1_2.jpg"
}

function removeImage(){
image1.src = "./images/image1.jpg"
}