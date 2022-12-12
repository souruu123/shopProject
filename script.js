var shops = [
    {
      name: "fruits And vegitables",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "food grains oil & masala",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "Bakery cakes ",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "Beverages",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "snacks",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "Beauty",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "cleaning",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "kitchen",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "eggs,meals & fish",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
    {
      name: "baby care",
      Image:"./7237c9142759885.Y3JvcCwzMjcyLDI1NTksMCw4.png"
    },
  ];

  var htmlData=``
shops.forEach(sh=>{
htmlData+=`
<div class="col-4  style="padding:0px 10px; margin-tp:20px;" >
<br><br>
<div class="card" style="width: 18rem;" >
  <img class="card-img-top" src="${sh.Image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${sh.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
`
})
document.querySelector("#result").innerHTML=htmlData



var selectBox=document.querySelector("#id_select")

shops.forEach(sh=>{
  let option=document.createElement("option")
  option.text=sh.name
  option.value=sh.name
  selectBox.appendChild(option)
})





function displayShop(){
  let shopName=selectBox.value
let shop=shops.find(sh=>sh.name==shopName)
populateValue(shop)
}

function populateValue(sh) {
  let htmlData=`
  <div class="col-4"></div>
  <div class="col-4">
  <div class="card" style="width: 18rem;" >
  <img class="card-img-top" src="${sh.Image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${sh.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  </div>
  <div class="col-4"></div>
  `
  document.querySelector("#result").innerHTML=htmlData
}















