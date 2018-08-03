import { Age } from './../src/age.js';
describe('Age', function(){

  it('should test whether an Age has three values', function(){
    let age = new Age(09,07,1991);
    expect(age.month).toEqual(09);
    expect(age.day).toEqual(07);
    expect(age.year).not.toEqual(1992);
  });
});
