const button = document.getElementById("btn");
const randomColor =() =>{
    let val = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += val [Math.floor(Math.random() * 16)];
        
    }
    return color;
};

function changeRendomColor(){
    document.body.style.backgroundColor = randomColor();
}
button.addEventListener("click",changeRendomColor);