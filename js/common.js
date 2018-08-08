$(".timeline_tab_wr .tab").click(function() {
    $(".timeline_tab .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".grey_sec_tab .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


