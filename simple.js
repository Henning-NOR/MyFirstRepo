$.ajax ({
    url: 'https://api.github.com/repos/Henning-NOR/MyFirstRepo',
    success: function(response) {
        console.log(response);
    }
})