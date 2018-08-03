export class Birthday {
  constructor(month, day, year, age) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.age = age;
  }

  convertToMilli(){
    let conversion = this.age * 31556952000;
    return conversion;
  }

  compareGivenBirthday(){
    let birthDate = new Date(this.year, this.month-1, this.day).getFullYear();
    let currentDate = new Date().getFullYear();
    let age = currentDate - birthDate;
    return age;
  }

}
