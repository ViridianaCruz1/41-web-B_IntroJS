'use strict'

const book = {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    yearPublication: 1967,
    country: 'Colombia',
    status: 'disponible',
    chapters: [],

    describeBook(){
        console.log(`El libro titulado ${this.title}, del autor ${this.author} publicado en el año ${this.yearPublication} en ${this.country} está actualmente ${this.status}`);
    },

    addChapter(chapter){
        this.chapters.push(chapter)
    },

    deleteChapter(chapter){
        const index = this.chapters.indexOf(chapter);
        if(index !== -1){
            this.chapters.splice(index, 1);
        }
    },
};


book.describeBook();
book.addChapter('La Fundación de Macondo');
book.addChapter('La Peste del Insomnio');
book.addChapter('El Remedio de Melquíades');
book.addChapter('Amores Prohibidos y Destinos Trágicos');
book.addChapter('El Diluvio y el Ocaso de Macondo');
console.log(book.chapters);
book.deleteChapter('Amores Prohibidos y Destinos Trágicos')
console.log(book.chapters);