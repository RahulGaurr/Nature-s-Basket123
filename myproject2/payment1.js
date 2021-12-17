var total=JSON.parse(localStorage.getItem("total"))
document.getElementById("amount").value=`Rs-${total}.00`

document.getElementById("btn1").textContent=`Pay ${total}`
document.getElementById("btn2").textContent=`Pay ${total}`
document.getElementById("btn3").textContent=`Pay ${total}`

function popup(){
swal("Cancle Payment?", {
buttons: ["No", "Yes"],



});

window.location.href="cart.html"
}

function select(){
 document.querySelector(".card").style="visibility:visible";

};


function pay(){


a = document.querySelector(".cardNumber").value;
if(a.length < 16){
 alert("Your card Number is Not Valid.");





}else{
swal("Payment Succesful", "You will get your Delivery Date on your mobile Number");

// var cartbag=[];
// JSON.stringify(localStorage.setItem("cartBag",cartbag));
// console.log(cartbag)
}


}



