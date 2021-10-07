const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', ''),
                b = prompt('На сколько оцените его', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done')
            } else {
                console.log('error')
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Хороший зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Киноман')
        } else {
            console.log('Error')
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: ()=> {
        personalMovieDB.privat = !personalMovieDB.privat
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Incorrect data')
                i--
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Favorite genre ${i + 1} is ${item}`)
        })

    }
};











/*let i = 1
while( i < 2){
    const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его', '');

    if( a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done')
        i++
    } else {
        console.log('error')
        i--;
    }

}*/

/*let i = 1
do{
    const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его', '');

    if( a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done')
        i++
    } else {
        console.log('error')
        i--;
    }
}
while( i < 2)*/


