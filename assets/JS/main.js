var flag = 0;

// Toggle menu
function open_menu(layout) {
    if ($(window).width() <= 768) {
        if (layout == "add-menu") {
            $(".setting-menu").hide();
            $('.theme-menu').hide();
        }
        else if(layout == "theme-menu"){
            $(".setting-menu").hide();
            $(".add-menu").hide();
        }
        else {
            $(".add-menu").hide();
            $('.theme-menu').hide();
        }
    }
    $("." + layout).toggle(200);
}

// Change title value
function change_val() {
    var text = $('#title_name').val();
    console.log(text);
    $("#content-title").text(text);
}

// Nav toggle on click of hamburger icon
$('.nav-toggle').click(function () {
    if ($(window).width() >= 768) {
    if (flag == 0) {
        $('#site-nav').css("width", "250px");
        $('.nav-title').show();
        $('.add-menu').css("left", "250px");
        $('.theme-menu').css("left", "250px");
        $('.nav-icon').css("width", "30px");
        $('.nav-link').css({ "justify-content": "flex-start" });
        if ($(window).width() <= 768) {
            $('#site-nav').css("position", "absolute");
        }
        else {
         
        }
        flag = 1;
    }
    else {
        $('#site-nav').css("width", "60px");
        $('.nav-title').hide();
        $('.add-menu').css("left", "60px");
        $('.theme-menu').css("left", "60px");
        flag = 0;
    }
}
})

// Closing menu
$('.close-menu').click(function () {
    $('.add-menu').hide(200);
    $('.theme-menu').hide(200);
})

// Collapsible menu
$('.collapse-title').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if (flag == 0) {
        $this.next().slideUp(350);
        console.log("up");
        $this.children(".collapse-icon").removeClass("fa-minus");
        $this.children(".collapse-icon").addClass("fa-plus");
        flag = 1;
    }
    else {
        console.log("down");
        $this.next().slideDown(350);
        $this.children(".collapse-icon").removeClass("fa-plus");
        $this.children(".collapse-icon").addClass("fa-minus");
        flag = 0;
    }
});

// Custom theme
$('.menu-list-item').click(function () {
    var text = $(this).children('.menu-list-title').text();
    console.log(text);
    $(".bg-custom").css("background-color", text);
});