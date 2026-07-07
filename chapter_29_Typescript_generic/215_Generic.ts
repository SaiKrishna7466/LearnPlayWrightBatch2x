//Generics

//Normal function
function getString(name:string) :string {
    return name;
}
console.log(getString("Krishna"));

//converted above function into generic
function getString2<T>(name:T) {
    return name;
}
console.log(getString2<string>("Sai"));
console.log(getString2<number>(90));

//Generic used in function
function getFirstResult<T>(results: T[]) {
    return results[0]!;
}
console.log(getFirstResult<number>([100,200,300]));
console.log(getFirstResult<string>(["Login","Signup","Register"]));
