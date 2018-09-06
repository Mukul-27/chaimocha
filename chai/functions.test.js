let assert=require('chai').assert;
let expect=require('chai').expect;

let func=require('./functions');

describe('Add',()=>{
it('should assert add two numbers',()=>{
let res=func.add(1,2);

assert.equal(res,3);
});
it('should expect add two numbers',()=>{
let res=func.add(2,5);

expect(res).to.equal(7).to.be.a('number');
});
it('should async add two numbers',(done)=>{
	func.asyncAdd(2,3,(sum)=>{
	expect(sum).to.equal(5);
	done();
	});
});
});

describe('Square',()=>{
it('Should square a number',()=>{
let res=func.square(4);

assert.typeOf(res,'number');
assert.equal(res,16);
});
});