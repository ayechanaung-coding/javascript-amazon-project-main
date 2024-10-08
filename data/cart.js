export let carts=JSON.parse(localStorage.getItem('carts'));

if(!carts){

    carts=[{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 5,
        deliveryOptionId:'3'
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
         deliveryOptionId:'2'
      }];
}

function saveToStorage(){
    localStorage.setItem('carts',JSON.stringify(carts));
}

export function addToCart(productId){
    let matchingItem;
        
        carts.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity+=1;
        }else{
            carts.push({
                productId:productId,
                quantity:1,
                deliveryOptionId:'1'
            });
        }
        saveToStorage();
}

export function removeFromCart(productId){
    const newCart=[];
    carts.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    carts=newCart;
    
    saveToStorage();
}

export function updateDeliveryOptions(productId,deliveryOptionId){
    let matchingItem;
    carts.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }
    })
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    carts.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    console.log(carts);
    matchingItem.quantity = newQuantity;
  
    saveToStorage();
  }

