$(() => {
    $.get('/components/contactus.html', {}, (data) => {
        $('#contact').html(data)
    })
    $.get('/components/storiesofchange.html', {}, (data) => {
        $('#stories').html(data)
    })
})