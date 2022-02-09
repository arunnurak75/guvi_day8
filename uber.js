//4.write a class to calculate uber price.
class Uber {
    static BaseFare = 10;
    static CostPerMile = 5;
    static CostPerMinute = 1;
    static BookingFee = 5;
    constructor(time=1,mile=1){
        this.time=time;
        this.mile=mile;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(`the total price is ${(Uber.BaseFare)+(Uber.BookingFee)+((Uber.CostPerMinute)*time)+((Uber.CostPerMile)*mile)} only`);
    }
}
let bike = new Uber();
bike.totalPrice(15,10); 
