// const images = document.querySelectorAll('images')



// images.forEach(image => {
//     image.addEventListener('mouseover', handleAddImage)
     
// });


correction Exo 5

const images = document.querySelectorAll("#container > img");

console.log(images);

images.forEach((image) => {
    image.addEventListener("mouseenter", handleMouseEnter);
});

function handleMouseEnter(event){
    const imgTag = event.target;

    imgTag.src = imgTag.src.replace('.jpg', '_2.jpg');

    imgTag.removeEventListener("mouseenter", handleMouseEnter);
}