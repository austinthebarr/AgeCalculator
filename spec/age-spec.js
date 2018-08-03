import { Birthday } from './../src/age.js';
describe('Birthday', function(){

  it('should test whether an Age has four values', function(){
    let date = new Birthday(9,7,1991,26);
    expect(date.month).toEqual(9);
    expect(date.day).toEqual(7);
    expect(date.year).not.toEqual(1992);
    expect(date.age).toEqual(26);
  });

  it('should convert age to milliseconds', function(){
    let date = new Birthday(9,7,1991,26);
    expect(date.convertToMilli()).toEqual(820480752000);
  });

  it('should convert age to milliseconds', function(){
    let date = new Birthday(9,7,1991,27);
    expect(date.convertToMilli()).not.toEqual(820480752000);
  });

  it('should calcuate age of user', function(){
    let date = new Birthday(9,7,1991);
    expect(date.compareGivenBirthday()).toEqual(27);
  });

  it('should calcuate age of user, should not be equal', function(){
    let date = new Birthday(9,7,1991);
    expect(date.compareGivenBirthday()).not.toEqual(25);
  });
});
