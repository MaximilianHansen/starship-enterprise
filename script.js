let button = document.getElementById("button0");


let bonchkin = () => {
    let a = document.getElementById("fname").value;
    if( a === "Deanna")
    {
       alert("DEFFFINITLY A BONCHKIN");
    }
    else{
        alert("Not a bonchkin")
    }
};



button.addEventListener("click", bonchkin);

