//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
var pElem = document.getElementsByClassName('navi');
console.log(pElem)

for(var i = 0; i<pElem.length; i++){
    pElem[i].addEventListener('click', showInfo)
}

function showInfo(){
    // console.log(this.innerHTML)
    var shownInfo = this.querySelectorAll('.inner')[0];
    if(shownInfo.style.display === 'block'){
        shownInfo.style.display = 'none';
    }else{
        shownInfo.style.display = 'block';
    }
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var pElemA = document.getElementsByClassName('name');
console.log(pElemA)

for(var i = 0; i<pElemA.length; i++){
    pElemA[i].addEventListener('click', showMenu)
}

function showMenu(){
    // console.log(this.innerHTML)
    var shownMenu = this.querySelectorAll('.menu')[0];
    if(shownMenu.style.display === 'block'){
        shownMenu.style.display = 'none';
    }else{
        shownMenu.style.display = 'block';
    }
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



