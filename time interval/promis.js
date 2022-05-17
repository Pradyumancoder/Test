
 let image_div=document.getElementById("images");
let i=0;
let st= JSON.parse(localStorage.getItem("imag"))


function orderfood(){

    let order=document.getElementById("food").value;
    let status="open";
    let mypromise=new promise(function(){
        let time=Math.random()*10*1000;
        setTimeout(function (){
            if(i===st.length){
                i=0;
                
                    }
                    img.src=st[i]
                    image_div.append(img)
                    i++;
                
                },2000)         
    })
    mypromise.then(function(res){
        console.log(`${res} is ready`)
    })
}