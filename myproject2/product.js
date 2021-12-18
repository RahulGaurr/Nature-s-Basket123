var data = JSON.parse(localStorage.getItem("allproduct")) || [
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/70726a6d-f35e-480c-ba42-c95e808e3ec1_425x425.jpg",
        product_n:"Apple red- Delisious",
        price:"500",
        button:"Add to cart",
     
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f341c972-bc85-4b0d-8309-6bdaa4fd0cad_425x425.JPG",
        product_n:"Grapes Red globle -Imported",
        price:"800",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/620b0bb1-440e-4d83-896a-35bc6f274c3c_425x425.jpg",
        product_n:"Apple fujji",
        price:"300",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a473f647-d419-42d6-bceb-6859d017acbe_425x425.jpg",
        product_n:"Avocado-Imported",
        price:"450",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/83e591f2-ace2-4b45-8916-9a532bfea930_425x425.jpg",
        product_n:"blueberry - Exotic",
        price:"700",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c875dc7-3a4b-43c9-8660-e235d52aa2f1_425x425.jpg",
        product_n:"Fabbox mix Nut chaat - 140G",
        price:"500",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c875dc7-3a4b-43c9-8660-e235d52aa2f1_425x425.jpg",
        product_n:"Natures preimium Mixrd der Fruits",
        price:"900",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/Images/no-images425x425.jpg",
        product_n:"Mango Raw",
        price:"300",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8ddeaf63-7d49-4498-bfd8-2dc80e3df458_425x425.JPG",
        product_n:"Nectarine - Imported",
        price:"700",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d85cf7ec-4eb3-4f45-a7da-b94bb315b9d2_425x425.jpg",
        product_n:"Dragen Fruits",
        price:"1500",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e052813e-041b-44ee-b255-b7356c6af4ac_425x425.JPG",
        product_n:"Green Peas",
        price:"500",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2a8cb901-3d5e-4c7b-a23d-55f36ff3c09b_425x425.jpg",
        product_n:"Tomato -Organic",
        price:"300",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b69c4a59-e516-4139-bbf3-6fab3282c28d_425x425.jpg",
        product_n:"Potato- Organic",
        price:"600",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0bc08d1f-7c0a-41ab-a37e-6430c69f932e_425x425.jpg",
        product_n:"Orange",
        price:"800",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/63b69966-4855-4b1f-80a2-74796c8a5e09_425x425.JPG",
        product_n:"Broccoli _ Exotic",
        price:"900",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fb35012c-ed68-4553-af94-b44c35ed8586_425x425.jpg",
        product_n:"Apple NEw Zeland Rose ",
        price:"700",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7fb83bef-4c1c-4f81-96e6-44c4d3eac077_425x425.jpg",
        product_n:"Custard Apple",
        price:"200",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d450a015-e560-4a40-9876-9db2f6813566_425x425.JPG",
        product_n:"Apple Green",
        price:"5500",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/01632bcf-4d0b-4c39-95a9-4682fd01e45a_425x425.jpg",
        product_n:"Apple Royal Gala - New Zeland",
        price:"880",
        button:"Add to cart",
  
    },
    {
        image_url:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7eaf8d72-349b-4cba-8967-fbc83c072895_425x425.JPG",
        product_n:"Pears Beauty Imported",
        price:"450",
        button:"Add to cart",
  
    },


];
function SearchByPrice() {
    var selected = document.getElementById("Sort_by_price").value;
    console.log("selected: ", selected);
    if(selected == "high") {
        data = data.sort(function (a, b){
            return b.price - a.price;
        });
    }
    else if(selected == "low") {
        data = data.sort(function (a, b){
            return a.price - b.price;
        });
    }
    
    console.log(data);
    displayItem(data);
}

var body = document.querySelector("body");
var startdiv = document.createElement("div");
startdiv.setAttribute("id", "startdiv");
body.append(startdiv);
var h2 = document.createElement("h2");
h2.textContent=" All Products";
startdiv.append(h2);
var para = document.createElement("p");
para.textContent="Showing 1-16 out of 100";
startdiv.append(para);

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "container");
body.append(mainDiv);

displayItem(data);
function displayItem(data){
    document.querySelector("#container").innerHTML="";
    data.map(function(item){
    var box = document.createElement("div");
    box.setAttribute("class", "box");

    box.addEventListener("click",function(){
        // addToCart1(item)
        localStorage.setItem("cartItem",JSON.stringify(item))
        window.location.href="mains_products.html"
        //console.log(item)
    })

    mainDiv.append(box);
    var image = document.createElement("img");
    image.setAttribute("src", item.image_url);
    box.append(image);
    var innerbox = document.createElement("div");
   innerbox.setAttribute("class", "innerbox");
    box.append(innerbox);
    var product_name = document.createElement("p");
    product_name.setAttribute("id", "product_name");
    product_name.textContent=item.product_n;
    innerbox.append(product_name);
    var product_price = document.createElement("h3");
    product_price.setAttribute("id", "product_price");
    var Discount = Math.floor((item.price * 20) / (100));
    product_price.textContent=(item.price - Discount);
     var button=document.createElement("button")
     button.textContent="Add to cart"
    var span = document.createElement("span");
    span.setAttribute("class", "orignal_price");
    //var s =item.price-100;
    // var afterdis = +(item.price) + 100;
    span.textContent=item.price;
    product_price.append(span)

    var span2 = document.createElement("span");
    span2.setAttribute("id", "percentage_off");
    span2.textContent="20% off";
    product_price.append(span2)



    innerbox.append(product_price);
    var discount = document.createElement("p");
    discount.setAttribute("id", "discount");

    var ita = document.createElement("i");
    ita.setAttribute("class", "fa fa-tags percent");
    discount.append(ita)

    var poff = document.createElement("span");
    poff.textContent=item.discount
    discount.append(poff)

    //discount.textContent=data[i].discount;
    innerbox.append(discount);



    var delivery = document.createElement("p");
    delivery.setAttribute("id", "delivery");
    delivery.textContent="Delivery ₹80";
    innerbox.append(delivery,button);


        
    })
}

//for(var i=0; i<data.length;i++){
    // var a = document.createElement("a");
    // a.setAttribute("href", "cart1.html");
    // mainDiv.append(a);


    

    // document.querySelectorAll(".box").addEventListener("click",proFun)
//}
// function proFun(){
//     console.log('move to cart')
//     window.location.href="cart1.html"
// }