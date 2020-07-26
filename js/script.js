$(document).ready(function () {
    $(".click1").click(function () {
        $("#para1").toggle();
        $(".hide1").toggle();
    });
    $(".click2").click(function () {
        $("#para2").toggle();
        $(".hide2").toggle();
    });
    $(".click3").click(function () {
        $("#para3").toggle();
        $(".hide3").toggle();
    });
    $('form#submitform').submit(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var text = $('#text').val();
        alert("Hey " + name + " Thank you for reaching out to us.We have received your details!");
    });

    $(".row1").hover(function () {
        $(".img1").css({ "opacity": "0.2", "transition": "3s" });
        $("#part1").show();
    },
        function () {
            $(".img1").css("opacity", "1");
            $("#part1").hide();
        });
    $(".row2").hover(function () {
        $(".img2").css({ "opacity": "0.2", "transition": "3s" });
        $("#part2").show();
    },
        function () {
            $(".img2").css("opacity", "1")
            $("#part2").hide();
        });
    $(".row3").hover(function () {
        $(".img3").css({ "opacity": "0.2", "transition": "3s" });
        $("#part3").show();
    },
        function () {
            $(".img3").css("opacity", "1")
            $("#part3").hide();
        });
    $(".row4").hover(function () {
        $(".img4").css({ "opacity": "0.2", "transition": "3s" });
        $("#part4").show();
    },
        function () {
            $(".img4").css("opacity", "1")
            $("#part4").hide();
        });
    $(".row5").hover(function () {
        $(".img5").css({ "opacity": "0.2", "transition": "3s" });
        $("#part5").show();
    },
        function () {
            $(".img5").css("opacity", "1")
            $("#part5").hide();
        });
    $(".row6").hover(function () {
        $(".img6").css({ "opacity": "0.2", "transition": "3s" });
        $("#part6").show();
    },
        function () {
            $(".img6").css("opacity", "1")
            $("#part6").hide();
        });
    $(".row7").hover(function () {
        $(".img7").css({ "opacity": "0.2", "transition": "3s" });
        $("#part7").show();
    },
        function () {
            $(".img7").css("opacity", "1")
            $("#part7").hide();
        });
    $(".row8").hover(function () {
        $(".img8").css({ "opacity": "0.2", "transition": "3s" });
        $("#part8").show();
    },
        function () {
            $(".img8").css("opacity", "1")
            $("#part8").hide();
        });
});