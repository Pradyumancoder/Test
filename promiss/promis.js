 






     let arr = [];
     function orderFood(){
         event.preventDefault();
          let form = document.getElementById("food");
         
         form.burger.checked? arr.push({
             name : "Burger",
             img : "http://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a3sq1ywjy8ccttawtdqx"
         }):null;
         form.Franki.checked? arr.push({
             name : "Frankie",
             img : "http://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/upwaw7es0lwzcclzgt1q"
         }):null;
         form.Momos.checked? arr.push({
             name : "Momos",
             img : "http://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vvyi8jpdketykccrnn23"
         }):null;
         form.Pizza.checked? arr.push({
             name : "Pizza",
             img : "http://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nfkjqjm6syfm41byffu1"
         }):null;
         
         createPromise(arr)
         //console.log(arr)
         
     }
         
     
     
      function createPromise(order){
          //console.log(order)
          order.forEach(async function(ele,ind){
              let promise = new Promise(function(resolve,reject){
                 let time = Math.random() * 10 * 1000;
                  setTimeout(function(){
                     //  resolve("promise res")
                     appendData(ele,ind)
                  },time)
              })
            
          })
      }
     
      function appendData(data,ind){
        console.log(data)
        let main_container = document.getElementById("container");
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.img;
        let p1 = document.createElement("p");
        p1.innerText =  `Your ${data.name} is ready`
        let p2 = document.createElement("p");
        p2.innerText = `Order No:- ${ind+1}`
        //console.log(ind+1)
        box.append(p2,img,p1);
        main_container.append(box)
        document.getElementById("food").value = null;
     
      } 