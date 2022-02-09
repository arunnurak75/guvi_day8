//Write a “person” class to hold all the details.
class person {
    constructor(Name,DOB,Marital_Status,Gender,Age,Address,Mobile_No,Email,Voter_ID,Aadhar_No) {
    this.Name = Name;
    this.DOB = DOB;
    this.Marital_Status = Marital_Status;
    this.Gender = Gender; 
    this.Age = Age;
    this.Address = Address ;
    this.Mobile_No = Mobile_No; 
    this.Email = Email;
    this.Voter_ID=Voter_ID
    this.Aadhar_No = Aadhar_No;
    }
    person_name() {
    return `my name is ${this.Name}`;
    }
    person_DOB() {
    return `my DOB is ${this.DOB}`;
    }
    person_Marital_Status() {
        return `my Marital_Status is ${this.Marital_Status}`;
        }
    person_gender() {
    return `i am a ${this.Gender}`;
    }
    person_age() {
        return `my age is ${this.Age}`;
        }
    person_address() {
    return `my address is ${this.Address}`;
    }
    person_mobile_no() {
    return `my mobile_no is ${this.Mobile_No}`;
    }
    person_Email() {
    return `my email id is ${this.Email}`;
    }
    person_voter_id() {
        return `voter id no is ${this.Voter_ID}`;
        }
    person_aadhar_no() {
        return `aadhar_no is ${this.Aadhar_No}`;
        }
    }
    //object
    const person_obj = new person("ARUN","29-10-96","SINGLE",
    "MALE","24","no30 thangarai st","9176882233","arunk@gmail.com","830209282","9083746326362736");
    console.log(person_obj.person_name());
    console.log(person_obj.person_DOB());
    console.log(person_obj.person_Marital_Status())
    console.log(person_obj.person_gender());
    console.log(person_obj.person_age());
    console.log(person_obj.person_address());
    console.log(person_obj.person_mobile_no());
    console.log(person_obj.person_Email());
    console.log(person_obj.person_voter_id());
    console.log(person_obj.person_aadhar_no());