const product = [
    {
        id: 0,
        image: 'img1/Semiya_upma.jpg',
        title: 'Semiya Upma',
        price: 76,
    },
    {
        id: 1,
        image: 'img1/semiya_payasam.jpg',
        title: 'Semiya Payasam',
        price: 49,
    },
    {
        id: 2,
        image: 'img1/sabudana_upma.jpg',
        title: 'Sabudana Upma',
        price: 67,
    },
    {
        id: 3,
        image: 'img1/sabudana_idli.jpg',
        title: 'Sabudana Idli',
        price: 83,
    },
    {
        id: 4,
        image: 'img1/rava_idli.jpg',
        title: 'Rava idli',
        price: 74,
    },
    {
        id: 5,
        image: 'img1/rava_dosa.jpg',
        title: 'Rava Dosa',
        price: 93,
    },
    {
        id: 6,
        image: 'img1/puliogare.jpg',
        title: 'Puliogare',
        price: 47,
    },
    {
        id: 7,
        image: 'img1/poori_saagu.jpg',
        title: 'Poori Saagu',
        price: 97,
    },
    {
        id: 8,
        image: 'img1/pesarattu.jpg',
        title: 'Pesarattu',
        price: 34,
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