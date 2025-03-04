const links = {
    x:"https://x.com/jaydotmp3",
    gj:"https://gamejolt.com/@jaydotmp3",
    yt:"https://www.youtube.com/@jaydotmp3",
    p:"port.html"
}
   

function move_page(button){
    const id = button.id;
    if (button.id != "p"){
        window.open(links[button.id], '_blank');
    }
        else{
            window.open(links[button.id], '_self');
        }  
}