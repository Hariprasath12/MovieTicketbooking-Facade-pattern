class Review {
         private static reviewdb:any=[];
      
    addreviewForMovie(nameForMovie:string,starForMovie:number,cmdForMovie:string)  {
        var a:any={Movie:"i",star:"2",cmd:"a"};
        a.Movie=nameForMovie;
        a.star=starForMovie;
        a.cmd=cmdForMovie;
        Review.reviewdb.push(a);
        console.log("sucessfully added");
 }
 reviewFormovie(Moviename:string) {
   
     let movie= Review.reviewdb.filter((i:any) => i.Movie==Moviename);

     console.log(movie);

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
     movie.forEach((i:any) =>console.log(i));
       if(movie.length!==0){
          var se= movie.filter((i:any) =>i.show==show);
            se.forEach((i:any) =>console.log(i));
                if(se.length!==0){
                    var me=se.filter((i:any) =>i.nOfSeats>=seats);
                     if(me.length!==0){
                       // var a= payment.paymentdb.map(i=>(i.Movie==Moviename && i.place==place && i.show==show && i.nOfSeats>=seats) );
                        // var a=payment.paymentdb.findIndex(me[0]);
                        // console.log(a);
                     }
                     else{
                   console.log("seats are full");
                  console.log("available in ");
                  // se.forEach(i=>console.log(se[i].show));
                     }
                }
                else{
                  console.log("show is not available");
                  console.log("available in ");
                  // se.forEach((i,x)=>console.log(x[i].show));
                }
               
           }
           else{
               console.log("Movie is not playing in that screen");
           }


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

for (let value of mov) {
  console.log(value.Movie);
}

   }
 listofSceen(place:string,movie:string){
     var mov= search.searchdb.filter((i:any)  => ( i.place==place && i.Movie==movie) );
   for (let value of mov) {
  console.log(value.Nameofscreen);
}
 }
 alldetails(){
   console.log("Movie     place      show       Name of screen   available seats");
   for (let value of search.searchdb) {
 console.log(value.Movie+'       '+value.place+'        '+value.show+'        '+value.Nameofscreen+'     '+value.nOfSeats);
}
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
    Alldetails(){
      this.s.alldetails();
    }
    searchByPlace(place:string){
     this.s.listOfMovies(place);

    }
    searchByMovie(place:string,movie:string){
      this.s.listofSceen(place,movie);
    }
    makePayment(Moviename:string,place:string,screen:string,seats:number,show:string){
     this.p.makepaymentFormovie(Moviename,place,screen,seats,show);

    }
}

const sa=new system();
sa.adddetails("remo","vellore","galaxy",120,"evening",120);
sa.Alldetails();