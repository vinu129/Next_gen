function open_menu(layout) {
    if ($(window).width() <= 768) {
        if (layout == "add-menu") {
            $(".setting-menu").hide();
        }
        else {
            $(".add-menu").hide();
        }
    }
    $("." + layout).toggle(200);
}

function change_val() {
    var text = $('#title_name').val();
    console.log(text);
    $("#content-title").text(text);
}

var flag = 0;

$('.nav-toggle').click(function () {
    if (flag == 0) {
        $('#site-nav').css("width", "250px");
        $('.nav-title').show();
        $('.add-menu').css("left", "250px");
        $('.nav-icon').css("width", "30px");
        $('.nav-link').css({"justify-content":"flex-start"});
        flag = 1;
    }
    else {
        $('#site-nav').css("width", "55px");
        $('.nav-title').hide();
        $('.add-menu').css("left", "50px");

        flag = 0;
    }
})

$('.close-menu').click(function () {
    $('.add-menu').hide(200);
})