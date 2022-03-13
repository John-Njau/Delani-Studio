// jQuery
//  toggle
$().ready(function () {
    $("#design").click(function () {
        $("#designImage").toggle();
        $("#designText").toggle();
    });
    $("#development").click(function () {
        $("#developmentImage").toggle();
        $("#developmentText").toggle();
    });
    $("#projectMgt").click(function () {
        $("#projectMgtImage").toggle();
        $("#projectMgtText").toggle();
    });
});

// overlay
$().ready(function () {
    $(".overlay").mouseenter(function () {
        $(".overlayText").addClass("overlayEffects");
    });
});


// Javascript
// form
document.getElementById("submitBtn").addEventListener('click', submitForm)

function submitForm() {
    var name = document.forms['contactForm']['name'].value;
    var email = document.forms['contactForm']['email'].value;
    var message = document.forms['contactForm']['message'].value;
    var special=/^[^*|\":<>[\]{}`\\()';@&$]+$/;

    var userArray = [];

    if (name === "" && name == special) {
        alert("Please enter Your name");
        name.focus()
    }
    else if (email === "") {
        alert('Enter Your Email')
    }
    else if (message === '') {
        alert("Message too short.")
    }

    else {
        alert(`${name}, we have received your message. Thank you for reaching us. Our Agents will respond to you Asap.`)
    }

    userArray.push(name)
    console.log(userArray);
};
