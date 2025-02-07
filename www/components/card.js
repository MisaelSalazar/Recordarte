function cardInicio(img, title, textButton) {
    
    return(

        document.write(
            '<div class="card">',
                '<img class="card-img-top" src="'+img+'">',
                '<div class="card-body">',
                    '<h5 class="card-title">'+title+'</h5>'
            
        ),
        document.write('<form action="">'),
            document.write('<input class = "form-text h1" type="text" placeholder="Mi nombre">'),
            document.write('<br>'),
            document.write('<input class="btn btnNormal" type="submit" value="'+textButton+'">'),
            document.write('</form>'),
        document.write('</div></div>')
    );

}