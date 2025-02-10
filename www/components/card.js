function cardInicio(img, textButton, link) {

    return (

        document.write(
            '<div class="card">',
                '<img class="card-img-top" src="'+img+'">',
                    '<div class="card-body">',
                        '<a href="'+link+'" class="btn btnNormal">'+textButton+'</a>',
                    '</div>',
            '</div>'
        )
    );

}