
// import mo = require("colors/lib/colors.js");
// import * as fs from "colors";
class Review {
         private static reviewdb:any=[];
      
    addreviewForMovie(nameForMovie:string,starForMovie:number,cmdForMovie:string)  {
        var a:any={Movie:"i",star:"2",cmd:"a"};
        a.Movie=nameForMovie;
        a.star=starForMovie;
        a.cmd=cmdForMovie;
        Review.reviewdb.push(a);
        console.log("sucessfully added");
     console.log("_____________________________________________________________");

 }
 reviewFormovie(Moviename:string) {
    console.log("Movie Review");
     let movie= Review.reviewdb.filter((i:any) => i.Movie==Moviename);
     return movie;
            // movie.forEach((i:any) =>console.log(i.Movie+'  '+i.star+'  '+i.cmd));

     // console.log("_____________________________________________________________");

 }
}

class payment {
          static paymentdb:any=[];
      
    addshowForMovie(nameForMovie:string,placeForMovie:string,priceForMovie:number,show:string,screenname:string,seats:number)  {
        var a:any={};
        a.Movie=nameForMovie;
        a.place=placeForMovie;
        a.price=priceForMovie;
        a.show=show;
        a.Nameofscreen=screenname;
        a.nOfSeats=seats;
        payment.paymentdb.push(a);
        
 }


 makepaymentFormovie(Moviename:string,place:string,screen:string,seats:number,show:string) {
     var movie= payment.paymentdb.filter((i:any)  => (i.Movie==Moviename && i.place==place) );
     // movie.forEach((i:any) =>console.log(i));
       if(movie.length!==0){
          var se= movie.filter((i:any) =>i.show==show);
            // se.forEach((i:any) =>console.log(i));
                if(se.length!==0){
                    var me=se.filter((i:any) =>i.nOfSeats>=seats);
                     if(me.length!==0){
                       
                         for (var i in payment.paymentdb) {
     if (payment.paymentdb[i].Movie == Moviename && payment.paymentdb[i].place==place && payment.paymentdb[i].show==show ) {
        payment.paymentdb[i].nOfSeats =payment.paymentdb[i].nOfSeats-seats;
        console.log("Movie Booked");
     console.log("_____________________________________________________________");

        break; 
     }
   }



                     }
                     else{
                   console.log("seats are full");
                  console.log("available in ");
     console.log("_____________________________________________________________");

                  // se.forEach(i=>console.log(se[i].show));
                     }
                }
                else{
                  console.log("show is not available");
                  console.log("available in ");
     console.log("_____________________________________________________________");

                  // se.forEach((i,x)=>console.log(x[i].show));
                }
               
           }
           else{
               console.log("Movie is not playing in that screen");
     console.log("_____________________________________________________________");

           }


       } 
     
      alldetails():Object{
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
 }
     

 }
class search {
  private static searchdb:any=[];
           
    addSearch(nameForMovie:string,placeForMovie:string,priceForMovie:number,show:string,screenname:string,seats:number)  {
        var a:any={};
        a.Movie=nameForMovie;
        a.place=placeForMovie;
        a.price=priceForMovie;
        a.show=show;
        a.Nameofscreen=screenname;
        a.nOfSeats=seats;
        search.searchdb.push(a);
        
 }
   listOfMovies(place:string){
     // var mov=search.searchdb
     var mov= search.searchdb.filter((i:any)  => ( i.place==place) );
 return mov;
// for (let value of mov) {
//   console.log(value.Movie);
// }

   }
 listofSceen(place:string,movie:string){
     var mov= search.searchdb.filter((i:any)  => ( i.place==place && i.Movie==movie) );
     return mov;
//    for (let value of mov) {
//      console.log("Screen Name");
//   console.log(value.Nameofscreen);
//      console.log("_____________________________________________________________");

// }
 }

 
     
     

 }
class system{

  r:Review;
  s:search;
  p:payment;
  constructor() {
        this.r= new Review();
        this.s= new search();
        this.p=new payment();

    }

    adddetails(movie:string,place:string,screen:string,price:number,show:string,seats:number){
        this.s.addSearch(movie,place,price,show,screen,seats);
        this.p.addshowForMovie(movie,place,price,show,screen,seats);

    }
    getreview(movie:string){
      return this.r.reviewFormovie(movie);
    }
    setreview(movie:string,star:number,cmd:string){
      this.r.addreviewForMovie(movie,star,cmd);
    }
    Alldetails(){
      return this.p.alldetails();
    }
    searchByPlace(place:string){
      return this.s.listOfMovies(place);

    }
    searchByMovie(place:string,movie:string){
      return this.s.listofSceen(place,movie);
    }
    makePayment(Moviename:string,place:string,screen:string,seats:number,show:string){
     this.p.makepaymentFormovie(Moviename,place,screen,seats,show);

    }
}

const sa=new system();
sa.adddetails("remo","vellore","galaxy",120,"evening",120);
sa.adddetails("i","vellore","galaxy",120,"evening",120);
sa.adddetails("kodi","vellore","galaxy",120,"evening",120);
sa.adddetails("okok","vellore","galaxy",120,"evening",120);
sa.setreview("i",3,"nil");
sa.getreview("i");
sa.searchByMovie("vellore","i");

// sa.makePayment("okok","vellore","galaxy",3,"evening");
// sa.makePayment("okok","vellore","galaxy",119,"evening");
console.log(sa.Alldetails());
