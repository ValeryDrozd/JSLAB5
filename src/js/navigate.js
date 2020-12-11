import { routes } from '../js/getpage'
import { generatePromo,generateItems,getCart,generateProduct,valid,generateOrderList,generateOrder,generatePromoPage  } from '../js/functions.js';

export async function router(){
    let link = window.location.hash;
    let buttonList = document.querySelectorAll('header button');
    for(let i=0;i<buttonList.length;i++){
        buttonList[i].style.backgroundColor = 'darkorange';
    }
    document.getElementById('amount').innerText = await getCart()['number'];
    switch(link){
        case '#sushi':
            document.getElementById('sushiBtn').style.backgroundColor = '#F9E79F';
            document.getElementById('content').innerHTML = routes['sushi'];
            document.getElementById('goodsField').innerHTML = await generateItems('sushi');
            break;
        case '#pizza':
            document.getElementById('pizzaBtn').style.backgroundColor = '#F9E79F';
            document.getElementById('content').innerHTML = routes['pizza'];
            document.getElementById('goodsField').innerHTML = await generateItems('pizza');
            break;
        case '#drinks':
            document.getElementById('drinkBtn').style.backgroundColor = '#F9E79F';
            document.getElementById('content').innerHTML = routes['drinks'];
            document.getElementById('goodsField').innerHTML = await generateItems('drinks');
            break;
        case('#cart'):
            document.getElementById('cartBtn').style.backgroundColor = '#F9E79F';
            document.getElementById('content').innerHTML = routes['cart'];
            document.getElementById('orderList').innerHTML = await generateOrderList();
            break;
        case ('#order'):
            if(getCart()['number']>0){
                document.getElementById('orderBtn').style.backgroundColor = '#F9E79F';
                document.getElementById('content').innerHTML = routes['order'];
                break;
            }else
            link = '#all';
        case '#all':
            document.getElementById('allBtn').style.backgroundColor = '#F9E79F';
            document.getElementById('content').innerHTML = routes['all'];
            document.getElementById('PizzaField').innerHTML = await generateItems('pizza');
            document.getElementById('SushiField').innerHTML = await generateItems('sushi');
            document.getElementById('DrinksField').innerHTML = await generateItems('drinks');
            break;
        case link:
            let t = await valid(link);
            if(t==true){
                let group = link.substr(link.indexOf('#')+1,link.indexOf('/')-1);
                if(group=='products'){
                    document.getElementById('content').innerHTML = routes['item'];
                    await generateProduct(link);
                    break;
                }
                if(group=='promos'){
                    document.getElementById('content').innerHTML = routes['promo'];
                    await generatePromoPage(link);
                    break;
                }
                if(group=='order'){
                    document.getElementById('content').innerHTML = routes['clientorder'];
                    await generateOrder(link.substr(link.indexOf('/')+1));
                    break;
                }
            }
            window.location.hash = "";
        default:
            document.getElementById('mainBtn').style.backgroundColor = '#F9E79F';
            document.getElementById('content').innerHTML = routes['main'];
            let ls = await generateItems('recommended');
            document.getElementById('goodsField').innerHTML = ls;
            await generatePromo();
            document.getElementById("prevbutton").style.display = 'inline-block';
            document.getElementById("nextbutton").style.display = 'inline-block';
            break;
    }
    
}
