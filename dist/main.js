// import mo = require("colors/lib/colors.js");
// import * as fs from "colors";
var Review = (function () {
    function Review() {
    }
    Review.prototype.addreviewForMovie = function (nameForMovie, starForMovie, cmdForMovie) {
        var a = { Movie: "i", star: "2", cmd: "a" };
        a.Movie = nameForMovie;
        a.star = starForMovie;
        a.cmd = cmdForMovie;
        Review.reviewdb.push(a);
        alert("sucessfully added");
        console.log("sucessfully added");
        console.log("_____________________________________________________________");
    };
    Review.prototype.reviewFormovie = function (Moviename) {
        console.log("Movie Review");
        var movie = Review.reviewdb.filter(function (i) { return i.Movie == Moviename; });
        return movie;
        // movie.forEach((i:any) =>console.log(i.Movie+'  '+i.star+'  '+i.cmd));
        // console.log("_____________________________________________________________");
    };
    Review.reviewdb = [];
    return Review;
}());
var payment = (function () {
    function payment() {
    }
    payment.prototype.addshowForMovie = function (nameForMovie, placeForMovie, priceForMovie, show, screenname, seats) {
        var a = {};
        a.Movie = nameForMovie;
        a.place = placeForMovie;
        a.price = priceForMovie;
        a.show = show;
        a.Nameofscreen = screenname;
        a.nOfSeats = seats;
        payment.paymentdb.push(a);
        alert("Show added");
    };
    payment.prototype.makepaymentFormovie = function (Moviename, place, screen, seats, show) {
        var movie = payment.paymentdb.filter(function (i) { return (i.Movie == Moviename && i.place == place); });
        // movie.forEach((i:any) =>console.log(i));
        if (movie.length !== 0) {
            var se = movie.filter(function (i) { return i.show == show; });
            // se.forEach((i:any) =>console.log(i));
            if (se.length !== 0) {
                var me = se.filter(function (i) { return i.nOfSeats >= seats; });
                if (me.length !== 0) {
                    for (var i in payment.paymentdb) {
                        if (payment.paymentdb[i].Movie == Moviename && payment.paymentdb[i].place == place && payment.paymentdb[i].show == show) {
                            payment.paymentdb[i].nOfSeats = payment.paymentdb[i].nOfSeats - seats;
                            console.log("Movie Booked");
alert("Movie Booked");

                            console.log("_____________________________________________________________");
                            break;
                        }
                    }
                }
                else {
                    alert("seats are full");
                    console.log("seats are full");
                    

                    console.log("_____________________________________________________________");
                }
            }
            else {
                alert("show is not available");
                console.log("show is not available");
               
                console.log("_____________________________________________________________");
            }
        }
        else {
            alert("Movie is not playing in that screen");
            console.log("Movie is not playing in that screen");
            console.log("_____________________________________________________________");
        }
    };
    payment.prototype.alldetails = function () {
        console.log("Movie     place      show       Name of screen   available seats");
        //       for (let value of payment.paymentdb) {
        //  console.log(value.Movie+'       '+value.place+'        '+value.show+'        '+value.Nameofscreen+'     '+value.nOfSeats);
        // }
        // let a=payment.paymentdb
        return payment.paymentdb;
        //    for (let value of payment.paymentdb) {
        //  console.log(value.Movie+'       '+value.place+'        '+value.show+'        '+value.Nameofscreen+'     '+value.nOfSeats);
        // }
        // console.log("__________________________________________________________________________");
    };
    payment.paymentdb = [];
    return payment;
}());
var search = (function () {
    function search() {
    }
    search.prototype.addSearch = function (nameForMovie, placeForMovie, priceForMovie, show, screenname, seats) {
        var a = {};
        a.Movie = nameForMovie;
        a.place = placeForMovie;
        a.price = priceForMovie;
        a.show = show;
        a.Nameofscreen = screenname;
        a.nOfSeats = seats;
        search.searchdb.push(a);
    };
    search.prototype.listOfMovies = function (place) {
        // var mov=search.searchdb
        var mov = search.searchdb.filter(function (i) { return (i.place == place); });
        return mov;
        // for (let value of mov) {
        //   console.log(value.Movie);
        // }
    };
    search.prototype.listofSceen = function (place, movie) {
        var mov = search.searchdb.filter(function (i) { return (i.place == place && i.Movie == movie); });
        return mov;
        //    for (let value of mov) {
        //      console.log("Screen Name");
        //   console.log(value.Nameofscreen);
        //      console.log("_____________________________________________________________");
        // }
    };
    search.searchdb = [];
    return search;
}());
var system = (function () {
    function system() {
        this.r = new Review();
        this.s = new search();
        this.p = new payment();
    }
    system.prototype.adddetails = function (movie, place, screen, price, show, seats) {
        this.s.addSearch(movie, place, price, show, screen, seats);
        this.p.addshowForMovie(movie, place, price, show, screen, seats);
    };
    system.prototype.getreview = function (movie) {
        return this.r.reviewFormovie(movie);
    };
    system.prototype.setreview = function (movie, star, cmd) {
        this.r.addreviewForMovie(movie, star, cmd);
    };
    system.prototype.Alldetails = function () {
        return this.p.alldetails();
    };
    system.prototype.searchByPlace = function (place) {
        return this.s.listOfMovies(place);
    };
    system.prototype.searchByMovie = function (place, movie) {
        return this.s.listofSceen(place, movie);
    };
    system.prototype.makePayment = function (Moviename, place, screen, seats, show) {
        this.p.makepaymentFormovie(Moviename, place, screen, seats, show);
    };
    return system;
}());

// var sa = new system();
// sa.adddetails("remo", "vellore", "galaxy", 120, "evening", 120);
// sa.adddetails("i", "vellore", "galaxy", 120, "evening", 120);
// sa.adddetails("kodi", "vellore", "l", 120, "evening", 120);
// sa.adddetails("okok", "vellore", "v", 120, "evening", 120);
// sa.setreview("i", 3, "nil");

// console.log(sa.getreview("i"));
// sa.makePayment("okok","vellore","galaxy",3,"evening");
// sa.makePayment("okok","vellore","galaxy",119,"evening");
// console.log(sa.Alldetails());
