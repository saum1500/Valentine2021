var times_yes_clicked = 0;
var times_no_clicked = 0;
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

function pressed_yes() {
    times_yes_clicked++;
    times_no_clicked = 0;
    
    document.getElementById('no-1').style.visibility = 'hidden';
    document.getElementById('no-2').style.visibility = "hidden";
    document.getElementById('no-3').style.visibility = "hidden";
    if (times_yes_clicked == 1) {
        //document.getElementsByClassName('gif').style.visibility = 'hidden'
        document.getElementById('yes-1').style.visibility = 'visible';
    } else if (times_yes_clicked == 2) {
        document.getElementById('yes-1').style.visibility = "hidden";
        document.getElementById('yes-2').style.visibility = 'visible';        
    } else if (times_yes_clicked >=3) {
        document.getElementById('yes-1').style.visibility = 'hidden';
        document.getElementById('yes-2').style.visibility = 'hidden';
        document.getElementById('yes-3').style.visibility = 'visible';
    }
}

function pressed_no() {
    times_no_clicked++;
    times_yes_clicked = 0;
    document.getElementById('yes-1').style.visibility = 'hidden';
    document.getElementById('yes-2').style.visibility = "hidden";
    document.getElementById('yes-3').style.visibility = "hidden";
    if (times_no_clicked == 1) {
        document.getElementById('no-1').style.visibility = 'visible';
    } else if (times_no_clicked == 2) {
        document.getElementById('no-1').style.visibility = "hidden";
        document.getElementById('no-2').style.visibility = 'visible';        
    } else if (times_no_clicked >=3) {
        document.getElementById('no-2').style.visibility = 'hidden';
        document.getElementById('no-3').style.visibility = 'visible';
    }
}

// $("#opt2").click(function() {
//     times_yes_clicked++;
//     times_no_clicked = 0;
//     if (times_yes_clicked == 1) {
//         //run second function
//     } else {
//         //run first function
//     }
// })