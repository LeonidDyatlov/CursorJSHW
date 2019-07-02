function convert(amount)
{
    const usd=8;
    return amount*usd;
}
function reverse(str)
{
    return str.split("").reverse().join("");
}
function printStairs(n)
{
    for(let x=0;x<=n;x++)
    {
        const str="#";
        console.log(str.repeat(x));
    }
}
function sumRange(start,end)
{
    let sum=0;
    for(let i = start; i <= end; i++)
    {
        sum+=i;
    }
    return sum;
}
function min(a,b,c)
{
    let min=0;
    min=(a < b && a < c) ? a : (b < a && b < c ) ? b : c;
    return min;
}
function printPyramid(n)
{
    let num=1;
    for(let i = n; i > 0; i--)
    {   
        const str="#";
        const space=" ";
        console.log(space.repeat(i - 1) + str.repeat(num));
        num+= 2;
    }
}
function firstAndLastToUpper(str)
{
    const first=str[0].toUpperCase();
    const last=str[(str.length)-1].toUpperCase();
    return first+str.slice(1,(str.length-1))+last;
}
function cursorCheck(str)
{
    let words=["ironman","cursor","ostap"];
    for(n=0;n<=words.length-1;n++)
    return str.toLowerCase().indexOf(words[n]) >= 0;


}

function toUppercase(str)
{   
    let newstr="";
    let num;
    for(let n=0;n<str.length;n++)
    {
    num=str.charCodeAt(n);
    newstr+=String.fromCharCode(num-32);
    }
    return newstr;
    
}
function removeDuplicationLetters(str)
{
    
    let mas=[];
    let ans="";
    let newstr=str.split("");
    for(let n=0;n<newstr.length;n++)
    {
        if(newstr[n]!==newstr[n+1])
        {
            mas[n]=newstr[n];
        }
    }
    for(let x=0;x<mas.length;x++){
        if(mas[x]!=undefined)
        {
            ans+=mas[x];
        }
    }
    return ans;
}
function fibonacci(n){

    if(n==0)
    {
        return 0;
    }
    else if(n==1 || n==2)
    {
        return 1;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

