window.onload = () => {
    document.querySelector(".home-animacao").style.opacity = "1";
}

window.onscroll = () => {

    let docs =document.documentElement;
    if (docs.scrollTop > 270) {
        document.querySelector(".left-content").style.marginLeft = "0";
    }

    if (docs.scrollTop > 600) {
        document.querySelector(".right-content").style.marginLeft = "0";
    }

}