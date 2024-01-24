// 1. HTML design
// 2. Download image and store in local folder.
// 3. Image set.
// 4. Onmouse over function display image.


//Common  function
function onImageCommonFunction(ImageName) {
    let imagePath = 'image/' + ImageName + '.jpg'; // image/Image1.jpg

    document.getElementById('mainImage').src = imagePath;
}

// Different function
// function onImage1() {
//     document.getElementById('mainImage').src = 'image/Image1.jpg';
// }

// function onImage2() {
//     document.getElementById('mainImage').src = 'image/SecondImage.jpg'
// }

// function onImage3() {
//     document.getElementById('mainImage').src = 'image/Image3.jpg'
// }

// function onImage4() {
//     document.getElementById('mainImage').src = 'image/Image4.jpg'
// }

// function onImage5() {
//     document.getElementById('mainImage').src = 'image/Image5.jpg'
// }