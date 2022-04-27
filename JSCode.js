let btnAPI1 = document.getElementById("btnAPI1")
let btnAPI2 = document.getElementById("btnAPI2")
let btnAPI3 = document.getElementById("btnAPI3")

/********************* add Event Listeners ************************/
btnAPI1.onclick = function () { loadAPI1() }
btnAPI2.onclick = function () { loadAPI2() }
btnAPI3.onclick = function () { loadAPI3() }

/********************* Add function ************************/
function loadAPI1() {
    fetch("https://www.boredapi.com/api/activity")
        .then(Response => Response.json())
        .then(json => {
            console.log(json)
            let lblInfoAPI1 = document.getElementsByClassName("lblInfoAPI1")
            let txtInfoAPI1 = document.getElementsByClassName("txtInfoAPI1")
            let index = 0
            for (let key in json) {
                lblInfoAPI1[index].innerText = `${key}:`;
                txtInfoAPI1[index].value = json[key];
                index++;
            }
        })
    let apiBorders = document.getElementsByClassName("apiBorder")
    apiBorders[1].style.display = "none"
    apiBorders[2].style.display = "none"
    apiBorders[0].style.display = "block"

}
function loadAPI2() {
    fetch("https://fakestoreapi.com/products")
        .then(Response => Response.json())
        .then(json => {
            console.log(json)
            let tblAPI2 = document.getElementsByClassName("lblInfoAPI1")[0]
            let headTblAPI2 = document.getElementsByClassName("headTblAPI2")[0]
            let bodyTblAPI2 = document.getElementsByClassName("bodyTblAPI2")[0]
            let trAPI2
            let tdAPI2
            let imgAPI2

            debugger
            headTblAPI2.innerHTML=""
            bodyTblAPI2.innerHTML=""
            trAPI2=document.createElement("tr")
            trAPI2.style.border="solid 2px darkgray";
            for (let key in json[0]) {
                tdAPI2 = document.createElement("th");
                tdAPI2.style.border= "solid 2px darkgray";
                tdAPI2.style.padding="5px";

                tdAPI2.innerText = key;
                tdAPI2.style.columnWidth="80px"
                trAPI2.appendChild(tdAPI2)
            }
            headTblAPI2.appendChild(trAPI2)

            for (let index in json) {
                trAPI2 = document.createElement("tr")
                trAPI2.style.border="solid 1px darkgray";
                for (let key in json[index]) {
                    tdAPI2 = document.createElement("td");
                    tdAPI2.style.border= "solid 1px darkgray";
                    tdAPI2.style.padding="5px";
                    if(key!="image" && key!="rating"){
                        tdAPI2.innerText = json[index][key]
                    }
                    else if(key == "image"){
                        imgAPI2=document.createElement("img")
                        imgAPI2.src=json[index][key]
                        imgAPI2.style.width="70px"
                        imgAPI2.style.height="70px"
                        tdAPI2.appendChild(imgAPI2)
                    }
                    else if(key=="rating")
                    {
                        tdAPI2.innerText = json[index][key]["rate"]
                    }
                    
                    trAPI2.appendChild(tdAPI2)
                }
                bodyTblAPI2.appendChild(trAPI2)
            }


        })
        
    let apiBorders = document.getElementsByClassName("apiBorder")
    apiBorders[0].style.display = "none"
    apiBorders[2].style.display = "none"
    apiBorders[1].style.display = "block"

}
function loadAPI3() {
    fetch("http://roll.diceapi.com/json/d6")
        .then(Response => Response.json())
        .then(json => {
            let imgAPI3 = document.getElementsByClassName("imgAPI3")[0]
            imgAPI3.src = `pic/dice-n${json.dice[0].value}.jpg`
        })
    let apiBorders = document.getElementsByClassName("apiBorder")
    apiBorders[0].style.display = "none"
    apiBorders[1].style.display = "none"
    apiBorders[2].style.display = "block"

}
