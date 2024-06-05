const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabets', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function filterKata(filter, limit, panggil) {
    const kata = names.filter(function(name) {
        return name.toLowerCase().includes(filter.toLowerCase())
    })
    const jumlah = kata.slice(0, limit)
    panggil(jumlah)
}
function output(gabung) {
    console.log(gabung.join(', '))
}
filterKata("an", 3, output)
