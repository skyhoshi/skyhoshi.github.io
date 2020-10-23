import $ from "jquery";

export class sidebar {
    constructor() { }

    sidebarSelectorCloseButton: string = "";
    sidebarSelectorDropdowns: string = ".sidebar-dropdown > a";
    init() {

        // Dropdown menu
        $(this.sidebarSelectorDropdowns).on("click", function () {
            $(".sidebar-submenu").slideUp(200);
            if ($(this).parent().hasClass("active")) {
                $(".sidebar-dropdown").removeClass("active");
                $(this).parent().removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this).next(".sidebar-submenu").slideDown(200);
                $(this).parent().addClass("active");
            }
        });
        //toggle sidebar
        $("#toggle-sidebar").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });
        //Pin sidebar
        $("#pin-sidebar").on("click", function () {
            if ($(".page-wrapper").hasClass("pinned")) {
                // unpin sidebar when hovered
                $(".page-wrapper").removeClass("pinned");
                $("#sidebar").off("mouseenter mouseleave");
            } else {
                $(".page-wrapper").addClass("pinned");
                $("#sidebar").on("mouseenter",
                    function () {
                        console.log("mouseenter");
                        $(".page-wrapper").addClass("sidebar-hovered");
                    });
                $("#sidebar").on("mouseleave",
                    function () {
                        console.log("mouseout");
                        $(".page-wrapper").removeClass("sidebar-hovered");
                    }
                );

            }
        });


        //toggle sidebar overlay
        $("#overlay").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });

        //switch between themes 
        var themes = "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";
        $('[data-theme]').on("click", function (evt:any) {
            $('[data-theme]').removeClass("selected");
            $(this).addClass("selected");
            $('.page-wrapper').removeClass(themes);
            $('.page-wrapper').addClass(evt.attr('data-theme'));
        });

        // switch between background images
        var bgs = "bg1 bg2 bg3 bg4";
        $('[data-bg]').on("click", function (evt:any) {
            $('[data-bg]').removeClass("selected");
            $(this).addClass("selected");
            $('.page-wrapper').removeClass(bgs);
            $('.page-wrapper').addClass(evt.attr('data-bg'));
        });

        // toggle background image
        $("#toggle-bg").on("change", function (e) {
            e.preventDefault();
            $('.page-wrapper').toggleClass("sidebar-bg");
        });

        // toggle border radius
        $("#toggle-border-radius").on("change", function (e) {
            e.preventDefault();
            $('.page-wrapper').toggleClass("border-radius-on");
        });

        //custom scroll bar is only used on desktop
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(".sidebar-content").mCustomScrollbar({
                axis: "y",
                autoHideScrollbar: true,
                scrollInertia: 300
            });
            $(".sidebar-content").addClass("desktop");

        }

        return;
    }


}


