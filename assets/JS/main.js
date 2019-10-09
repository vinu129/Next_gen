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
        $('.nav-link').css({ "justify-content": "flex-start" });
        flag = 1;
    }
    else {
        $('#site-nav').css("width", "60px");
        $('.nav-title').hide();
        $('.add-menu').css("left", "60px");

        flag = 0;
    }
})



$('.close-menu').click(function () {
    $('.add-menu').hide(200);
})


// $('.collapse').click(function () {
//     $('.collapse-body').slideToggle('slow');
// });

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