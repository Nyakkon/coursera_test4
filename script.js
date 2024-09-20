function upDate(previewPic) {

    console.log('Event Triggered');
    console.log('Alt:', previewPic.alt);
    console.log('Source:', previewPic.src);

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;


    console.log('Updated background image and text.');
}

function undo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";

    console.log('Restored original state.');
}
