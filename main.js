function include_header(){
    $.ajax({
        url: '/about/header.html' ,
        async: false,
    }).done(function(header_html){
        document.write(header_html);
    });
}
