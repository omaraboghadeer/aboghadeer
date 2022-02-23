import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.js";
import "./game/game.js";
import "./styles/game.css";
import "./styles/styles.scss";

import $ from "jquery";
import { render } from "react-dom";
import Projects from "./components/projects-list/Projects";
import toastr from "toastr"
import MySkills from "./components/my-skills/MySkills.jsx";



/**
 * Window on scroll 
*/
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_link");

window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 77) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(current)) {
            link.classList.add("active");
        }
    });
};
/**
 * END:: Window on scroll 
*/


$('.nav_link').on('click', function (e) {
    // e.preventDefault();
    var curLink = $(this);
    var scrollPoint = $(curLink.attr('href')).position().top - 60;

    $('html, body').animate({
        scrollTop: scrollPoint
    }, 700);
});

/**
 * Sidebar 
*/
var openSidebar = $('#openSidebar');
openSidebar.on('click', function () {
    $('body').addClass('overflow-hidden');
    $('.overlay').toggleClass('show');
    $('.links_sidebar').toggleClass('show');
})

var closeSidebar = $('.close');
closeSidebar.on('click', function () {
    $('.overlay').removeClass('show');
    $('.links_sidebar').removeClass('show');
    $('body, .wrapper').removeClass('overflow-hidden');
});

/**
 * END:: Sidebar 
*/


/**
 * Form "Sending Message"
*/
const sendMsg = $('.msgForm');
sendMsg.on('submit', function (e) {
    e.preventDefault();
    let payload = {
        from: $(this)[0].elements['email'].value,
        subject: $(this)[0].elements['subject'].value,
        text: $(this)[0].elements['message'].value + "<br><br> " + $(this)[0].elements['name'].value
    };
    
    // $.ajax({
    //     type: $(this).attr('method'),
    //     url: 'http://localhost:3001/send',
    //     data: JSON.stringify(payload),
    //     processData: false,
    //     dataType: "json",
    //     contentType: "text/plain",

    //     beforeSend: () => {
    //         console.log('==== beforeSend ====');
    //     },
    //     success: (response) => {
    //         console.log(response);
    //     }
    // });


    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "0c516fbf3d9b41",
        Password : "88749b9e62d9b3",
        To : 'omar@aboghadeer.com',
        From : payload.from,
        Subject : payload.subject,
        Body : payload.text
    }).then(
        message => {
            if (message == 'OK') {
                toastr.success('Mail has been sent Successfully!', 'Success');
                sendMsg[0].reset();
            } else {
                toastr.error(message, 'Error')
            }
        }
    )

    
});
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
/**
 * END:: Form "Sending Message"
*/



// Top Button
$('.top__btn').on('click', () => {
    $("html, body").animate({scrollTop: 0}, 1000);
})


// RENDER REACT COMPONENTS
// 1- PROJECTS
render(<Projects />, document.getElementById('myProjects'));
render(<MySkills />, document.getElementById('mySkills'));