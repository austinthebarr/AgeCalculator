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

}
