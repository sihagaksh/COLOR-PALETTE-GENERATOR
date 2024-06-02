let btn = document.getElementById('palettebtn1');
//on clicking btn index2.html will open
btn.onclick = function(){
    window.open('palette.html', '_self')
}
let one = document.getElementsByClassName('one')
let two = document.getElementsByClassName('two')
let three = document.getElementsByClassName('three')
let four = document.getElementsByClassName('four')
let five = document.getElementsByClassName('five')

let colour = []
for(let i=0;i<5;i++){
let code = "#"
for (let i = 0; i < 6; i++) {
    data=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let random = Math.floor(Math.random() * data.length);
    code += data[random];  
}
colour.push(code)
}
one[0].style.backgroundColor = colour[0]
two[0].style.backgroundColor = colour[1]
three[0].style.backgroundColor = colour[2]
four[0].style.backgroundColor = colour[3]
five[0].style.backgroundColor = colour[4]
//spacebar takes to top of the page slowly
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
  });