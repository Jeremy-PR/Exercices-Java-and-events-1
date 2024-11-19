// const lastname = document.querySelector('#lastname');
// const firstname = document.querySelector('#firstname');
// const city = document.querySelector('#city');
// const btn = document.querySelector('#btn');

// btn.addEventListener("click",deleteData);

// function deleteData(){
//     lastname.value = "";
//     firstname.value = "";
//     city.value = "";
  
// }


// correction 

const raz = document.querySelector("#raz");

raz.addEventListener("click", handleClickRaz);

function handleClickRaz() {
  const inputs = document.querySelectorAll("input");

  
  inputs.forEach((input) => {
    input.value = "";
  });
}