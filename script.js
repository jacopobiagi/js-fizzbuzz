let container = document.querySelector(".container");
let content;

container.innerHTML = "";

for(let i=1; i<=100; i++){
    
    if(i%3 == 0 && i%5 == 0){
        container.innerHTML += '<div class="fizzBuzz col-1"><span>fizzBuzz</span></div>';
    }else if(i%5 == 0){
        container.innerHTML += '<div class="buzz col-1"><span>buzz</span></div>';
    }else if(i%3 == 0){
        container.innerHTML += '<div class="fizz col-1"><span>fizz</span></div>';
    }else{
        container.innerHTML += '<div class="square col-1"><span>'+i+'</span></div>';
    }
    console.log("ciao")
}