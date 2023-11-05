const product = [
    {
        id: 0,
        image: 'img1/light-system.jpg',
        title: 'Light system',
        price: 10000,
    },
    {
        id: 1,
         image: 'img1/sound_system.jpg',
        title: 'Sound system',
        price: 15000,
    },
    {
        id: 2,
         image: 'img1/neon_bands.jpg',
        title: 'Neon bands',
        price: 2000,
    },
    {
        id: 3,
         image: 'img1/flyer.jpg',
        title: 'Flyers',
        price: 3500,
    },
    {
        id: 4,
         image: 'img1/bouncers.jpg',
        title: 'Bouncers',
        price: 1000,
    },
    {
        id: 5,
         image: 'img1/videographer.jpg',
        title: 'Videographers',
        price: 10000,
    },
    {
        id: 6,
         image: 'img1/photography.jpg',
        title: 'Photographers',
        price: 10000,
    },
    {
        id: 7,
         image: 'img1/barricades.jpg',
        title: 'Barricades',
        price: 9000,
    },
    {
        id: 8,
         image: 'img1/gg-1.jpg',
        title: 'Crackers',
        price: 5000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs "+total+".00";
            return(
                `<div class='cart-item'>
                 <div class='row-img'>
                    <img class='rowimg' src=${image}>
                 </div>
                 <p style='font-size: 12px;'>${title}</p>
                 <h2 style='font-size: 15px;'>Rs ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}