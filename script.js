function drag(event_) {
    event_.dataTransfer.setData("image", event_.target.id);
}
function drop(event_) {
    event_.preventDefault();
    var data_ = event_.dataTransfer.getData("image");
    var image_ = document.getElementById(data_);
    event_.target.appendChild(image_);
    var elem = document.getElementById('intro-message');
    elem.style.display = 'none';
    var elem = document.getElementById('arrow');
    elem.style.display = 'none';
    document.getElementById('letter-trial').style.visibility = 'visible';
    document.getElementById('wrapper_').style.visibility = 'visible';
}

function allowDrop(event_) {
    event_.preventDefault();
}
function showoptions() {
    document.getElementById('button').style.visibility = 'visible';
}