

//  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=k.g.f&key=[YOUR_API_KEY]

const API= "AIzaSyCnRYVZ5moiKu7qUQyAJ0nF3KLtKhcVpx8";


const searchVideos= async () => {
    try{
        const q = document.getElementById("query").value;

    const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`);
    
    const data =await res.json();

    append(data.items)

    }catch(err){
        console.log(err)
    }
}; 
const append =(videos) =>{

    let show_videos =document.getElementById("show_videos");
  

      show_videos.innerHTML=null;




    videos.forEach(({ id: { videoId }, snippet: { title }}) => { 

         let div = document.createElement("div");

         let iframe= document.createElement("iframe")

         iframe.src = `https://www.youtube.com/embed/${videoId}`

         iframe.width ="100%";
          iframe.height ="100%";
          iframe.allow ="fullscreen";

          let name= document.createElement("h5");

          name.innerText=title;

          div.append(iframe,name);

          let data={
              title,
              videoId,
          };
          div.onclick =() => {
            showVideo(videoId,title);
          } 
          show_videos.append(div);
    })
}
let arr = []
const showVideo =(video,title) => {
   // console.log(video)
   let obj = {video,title}
   arr.push(obj)
   
    localStorage.setItem("video",JSON.stringify(arr));
     window.location.href ="video.html";

};







