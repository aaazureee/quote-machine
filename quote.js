$(document).ready(function () {
    quote();

    function strip(html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    var content = "";

    function quote() {
        $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=1&callback=",
            success: function (data) {
                var post = data.shift();
                content = strip(post.content).trim() + " - " + post.title; // The data is an array of posts. Grab the first one.
                $("#content").html("<blockquote class='blockquote'>" + post.content + "</blockquote>");
                $("#author").html("<em> - " + post.title + "</em>");
            },
            cache: false
        });
    }

    $("#quote").click(function () {
        quote();
    });
    $("#tweet").click(function () {
        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + content);
    });
});
