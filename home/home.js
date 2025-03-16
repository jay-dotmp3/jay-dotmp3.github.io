const links = {
    x:"https://x.com/jaydotmp3",
    gj:"https://gamejolt.com/@jaydotmp3",
    yt:"https://www.youtube.com/@jaydotmp3",
    p:"/portfolio/port.html"
}
   

function move_page(button){
    if (button.id != "p" && button.id != "abt"){
        window.open(links[button.id], '_blank');
    }
        else{
            window.open(links[button.id], '_self');
        }  
}