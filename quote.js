$(document).ready(function() {
            $("#quote").click(function(e) {
                e.preventDefault();
                $.ajax({
                    url: "https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=1&callback=",
                    success: function(data) {
                        var post = data.shift(); // The data is an array of posts. Grab the first one.
                        $("#content").html("<blockquote class='blockquote'>" + post.content + "</blockquote>");
                        $("#author").html("<em> - " + post.title + "</em>");
                    },
                    cache: false
                });
            });
        });
