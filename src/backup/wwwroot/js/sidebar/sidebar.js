import $ from "jquery";
export class sidebar {
    constructor() {
        this.sidebarSelectorCloseButton = "";
        this.sidebarSelectorDropdowns = ".sidebar-dropdown > a";
    }
    init() {
        $(this.sidebarSelectorDropdowns).on("click", function () {
            $(".sidebar-submenu").slideUp(200);
            if ($(this).parent().hasClass("active")) {
                $(".sidebar-dropdown").removeClass("active");
                $(this).parent().removeClass("active");
            }
            else {
                $(".sidebar-dropdown").removeClass("active");
                $(this).next(".sidebar-submenu").slideDown(200);
                $(this).parent().addClass("active");
            }
        });
        $("#toggle-sidebar").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });
        $("#pin-sidebar").on("click", function () {
            if ($(".page-wrapper").hasClass("pinned")) {
                $(".page-wrapper").removeClass("pinned");
                $("#sidebar").off("mouseenter mouseleave");
            }
            else {
                $(".page-wrapper").addClass("pinned");
                $("#sidebar").on("mouseenter", function () {
                    console.log("mouseenter");
                    $(".page-wrapper").addClass("sidebar-hovered");
                });
                $("#sidebar").on("mouseleave", function () {
                    console.log("mouseout");
                    $(".page-wrapper").removeClass("sidebar-hovered");
                });
            }
        });
        $("#overlay").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });
        var themes = "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";
        $('[data-theme]').on("click", function (evt) {
            $('[data-theme]').removeClass("selected");
            $(this).addClass("selected");
            $('.page-wrapper').removeClass(themes);
            $('.page-wrapper').addClass(evt.attr('data-theme'));
        });
        var bgs = "bg1 bg2 bg3 bg4";
        $('[data-bg]').on("click", function (evt) {
            $('[data-bg]').removeClass("selected");
            $(this).addClass("selected");
            $('.page-wrapper').removeClass(bgs);
            $('.page-wrapper').addClass(evt.attr('data-bg'));
        });
        $("#toggle-bg").on("change", function (e) {
            e.preventDefault();
            $('.page-wrapper').toggleClass("sidebar-bg");
        });
        $("#toggle-border-radius").on("change", function (e) {
            e.preventDefault();
            $('.page-wrapper').toggleClass("border-radius-on");
        });
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
//# sourceMappingURL=sidebar.js.map