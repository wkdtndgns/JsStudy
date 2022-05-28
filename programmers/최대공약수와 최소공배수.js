 const gcd = ( a,b ) => {
       if( b===0 ) return a; 
       else return gcd(b, a%b);
}
function solution(n, m) {
    var  i = gcd(n,m);   
    return [i, n*m/i];
}
