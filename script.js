let item = [
    {
        name: 'Ironhack T-shirt',
        price: 8,
        image: 'Tshirt.jpg'
    },
    {
        name: 'Ironhack Hoodie',
        price: 20,
        image: 'hoodie.jpg'
    },

    {
        name: 'Ironhack Sticker',
        price: 2,
        image: 'sticker.png'
    },
    {
        name: 'Ironhack Mug',
        price: 10,
        image: 'mug.jpg'
    },
]


let cart = []

let list = document.querySelector('#items')

/* for(let i=0; i<4; i++) {
    console.log(item[i].name)
}*/

item.forEach((item,i)=>{
    list.innerHTML += `<li>
   <div>Name: ${item.name}</div> 
   <div>price: $${item.price}</div>
   <image src= "${item.image}" />
   <input type= "number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")' />
   <button> Buy Item </button>
   
   </li>`

})

function showCart(){
    let cartItems = document.querySelector('#cart')
    let grandTotal = 0;
    cartItems.innerHTML = ''
    cart.forEach((item,i)=>{
        grandTotal += item.price * item.quantity
        cartItems.innerHTML += `<li>
       <div>Name: ${item.name}</div> 
       <div>Quantity: ${item.quantity}</div>
       <image src= "${item.image}" />
       </li>`
    
    })

    document.querySelector('#grandTotal').innerHTML = '$' +grandTotal
}


function inputChange(i, name, price,image){
    console.log('I want to buy the ',i,' item named, ',name, ' that costs $' ,price )
    let listitem = document.querySelectorAll('li')[i]
    let input = listitem.querySelector('input')
    let button = listitem.querySelector('button')
    
    button.onclick = function(){
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        })
        console.log(cart)
        showCart()
    }
    

}



//document.querySelector('#two').style.backgroundColor = 'blue'