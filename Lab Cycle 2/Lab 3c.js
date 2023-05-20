// Random Image Generator:

let CarImg = new Array(10);

CarImg[0] = "img1.jpg";
CarImg[1] = "img2.jpg";
CarImg[2] = "img3.jpg";
CarImg[3] = "img4.jpg";
CarImg[4] = "img5.jpg";
CarImg[5] = "img6.jpg";
CarImg[6] = "img7.jpg";
CarImg[7] = "img8.jpg";
CarImg[8] = "img9.jpg";

function genImg()
{
    let number = Math.floor(Math.random()*(CarImg.length - 1));

    document.getElementById("ImgOutput").innerHTML = '<img src="'+CarImg[number]+'" alt="Car Image '+number+'">';
}