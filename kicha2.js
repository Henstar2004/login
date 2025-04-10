

document.getElementById("button").onclick=function()
{
    document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
   

    let div = document.getElementById("broken");
    div.style.backgroundColor = div.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
  

};
