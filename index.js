const title = document.querySelector("#title");

const baseColor = '#FFCCCC';
const otherColor = '#00FFFF';


function handleClick(){
    const currentColor = title.style.color;

    if (currentColor === baseColor){
       title.style.color = otherColor;
    }
    else{
       title.style.color = baseColor;
    }
}

function init () {
    title.style.color = baseColor;
    title.addEventListener("click", handleClick);
}

init();