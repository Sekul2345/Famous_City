const button = document.querySelector('button');
let finaldiv=document.createElement('div')
finaldiv.id='output'
document.getElementById('wrapper').appendChild(finaldiv)
button.addEventListener('click',displayStats);
function displayStats(){
    const input =document.getElementById("input");
    const city=input.options[input.selectedIndex].value;
    let famous="",food="";
    switch(city){
        case 'Namakkal':
            famous=" 'Egg City' "
            food="'idlis and dosas to crispy vadas and spicy sambar'"
            break
        case "Coimbatore":
            famous="'goods and services'"
            food="'Kongunadu Biryani'"
            break
        case "Pollachi":
            famous=" 'Pozhil Vaichi'"
            food="'coconut oil'"
            break
        default:
            famous="'Iron'"
            food="'chicken'"


    }
    let text=`${city} is Famous for ${famous} and Famous food is ${food}`;
   
    document.getElementById("output").innerHTML=text
       
}