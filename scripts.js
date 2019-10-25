function stars(value){
    clearStars();
    addStars(value);
}

function clearStars (){
    for (var i=0; i<=4; i++) {
        document.getElementById("star" +i).classList.remove("active");
    }
}

function addStars (value) {
    for (var i=0; i<=value; i++){
        document.getElementById("star" +i).classList.add("active");
    }
}

window.addEventListener('click', function(e){
    if(!document.getElementById("stars").contains(e.target)){
        clearStars();
    }
})


