// function changeText(){
//    const tag = document.getElementById('header');
//    const text = tag.innerText = 'AIZEN';
//    console.log(text);
    // const tag = document.getElementsByClassName('MIKEY')[2].innerText = 'AIZEN';
//     const tag = document.getElementsByClassName('MIKEY')[0,4].innerHTML= 'AIZEN';
// }

// const button = document.getElementById('change-text');
// button.addEventListener('click', function(){alert("first!");});
// button.addEventListener('click', function(){alert("second!");});
// button.addEventListener('click', function(){alert("third!");});


const p = document.createElement('p');
p.innerText = 'Hello World!';
document.body.appendChild(p);




const arr =['Apple', 'Banana', 'Cherry'];
const arrImage = [ "apple.png", "banana.png", "cherry.png"]

for(let i=0; i< arr.length; i++){
    let element1 = document.createElement('div');
    element1.className = 'fruit';
    element1.innerHTML = `<p>${arr[i]}</p> <br> <img src="${arrImage[i]}" alt="${arr[i]}">`;
    document.body.appendChild(element1);
}