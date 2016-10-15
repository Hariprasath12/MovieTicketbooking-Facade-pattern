var Review = (function() {
    function Review() {}
    Review.prototype.addreviewForMovie = function(nameForMovie, starForMovie, cmdForMovie) {
        var a = {
            Movie: "i",
            star: "2",
            cmd: "a"
        };
        a.Movie = nameForMovie;
        a.star = starForMovie;
        a.cmd = cmdForMovie;
        Review.reviewdb.push(a);
        console.log("sucessfully added");
    };
    Review.prototype.reviewFormovie = function(Moviename) {
        var movie = Review.reviewdb.filter(function(i) {
            return i.Movie == Moviename;
        });
        console.log(movie);
    };
    Review.reviewdb = [];
    return Review;
}());
var payment = (function() {
    function payment() {}
    payment.prototype.addshowForMovie = function(nameForMovie, placeForMovie, priceForMovie, show, screenname, seats) {
        var a = {};
        a.Movie = nameForMovie;
        a.place = placeForMovie;
        a.price = priceForMovie;
        a.show = show;
        a.Nameofscreen = screenname;
        a.nOfSeats = seats;
        payment.paymentdb.push(a);
    };
    payment.prototype.makepaymentFormovie = function(Moviename, place, screen, seats, show) {
        var movie = payment.paymentdb.filter(function(i) {
            return (i.Movie == Moviename && i.place == place);
        });
        // movie.forEach((i:any) =>console.log(i));
        if (movie.length !== 0) {
            var se = movie.filter(function(i) {
                return i.show == show;
            });
            // se.forEach((i:any) =>console.log(i));
            if (se.length !== 0) {
                var me = se.filter(function(i) {
                    return i.nOfSeats >= seats;
                });
                if (me.length !== 0) {
                    for (var i in payment.paymentdb) {
                        if (payment.paymentdb[i].Movie == Moviename && payment.paymentdb[i].place == place && payment.paymentdb[i].show == show) {
                            payment.paymentdb[i].nOfSeats = payment.paymentdb[i].nOfSeats - seats;
                            console.log("Movie Booked");
                            break;
                        }
                    }
                } else {
                    console.log("seats are full");
                    console.log("available in ");
                }
            } else {
                console.log("show is not available");
                console.log("available in ");
            }
        } else {
            console.log("Movie is not playing in that screen");
        }
    };
    payment.prototype.alldetails = function() {
        console.log("Movie     place      show       Name of screen   available seats");
        for (var _i = 0, _a = payment.paymentdb; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log(value.Movie + '       ' + value.place + '        ' + value.show + '        ' + value.Nameofscreen + '     ' + value.nOfSeats);
        }
    };
    payment.paymentdb = [];
    return payment;
}());
var search = (function() {
    function search() {}
    search.prototype.addSearch = function(nameForMovie, placeForMovie, priceForMovie, show, screenname, seats) {
        var a = {};
        a.Movie = nameForMovie;
        a.place = placeForMovie;
        a.price = priceForMovie;
        a.show = show;
        a.Nameofscreen = screenname;
        a.nOfSeats = seats;
        search.searchdb.push(a);
    };
    search.prototype.listOfMovies = function(place) {
        // var mov=search.searchdb
        var mov = search.searchdb.filter(function(i) {
            return (i.place == place);
        });
        for (var _i = 0, mov_1 = mov; _i < mov_1.length; _i++) {
            var value = mov_1[_i];
            console.log(value.Movie);
        }
    };
    search.prototype.listofSceen = function(place, movie) {
        var mov = search.searchdb.filter(function(i) {
            return (i.place == place && i.Movie == movie);
        });
        for (var _i = 0, mov_2 = mov; _i < mov_2.length; _i++) {
            var value = mov_2[_i];
            console.log(value.Nameofscreen);
        }
    };
    search.searchdb = [];
    return search;
}());
var system = (function() {
    function system() {
        this.r = new Review();
        this.s = new search();
        this.p = new payment();
    }
    system.prototype.adddetails = function(movie, place, screen, price, show, seats) {
        this.s.addSearch(movie, place, price, show, screen, seats);
        this.p.addshowForMovie(movie, place, price, show, screen, seats);
    };
    system.prototype.Alldetails = function() {
        this.p.alldetails();
    };
    system.prototype.searchByPlace = function(place) {
        this.s.listOfMovies(place);
    };
    system.prototype.searchByMovie = function(place, movie) {
        this.s.listofSceen(place, movie);
    };
    system.prototype.makePayment = function(Moviename, place, screen, seats, show) {
        this.p.makepaymentFormovie(Moviename, place, screen, seats, show);
    };
    return system;
}());
var sa = new system();
sa.adddetails("remo", "vellore", "galaxy", 120, "evening", 120);
sa.adddetails("i", "vellore", "galaxy", 120, "evening", 120);
sa.adddetails("kodi", "vellore", "galaxy", 120, "evening", 120);
sa.adddetails("okok", "vellore", "galaxy", 120, "evening", 120);
sa.searchByMovie("vellore", "i");
// sa.makePayment("okok","vellore","galaxy",3,"evening");
// sa.makePayment("okok","vellore","galaxy",119,"evening");
sa.Alldetails();