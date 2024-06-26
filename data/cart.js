export const carts=[];

export function addToCart(productId){
    let matchingItem;
        
        carts.forEach((cartItem)=>{
            if(productId==cartItem.productId){
                matchingItem=cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity+=1;
        }else{
            carts.push({
                productId:productId,
                quantity:1
            });
        }
}
