function convert(amount)
{
    return amount*8;
}
function reverse(str)
{
    let splitStr=str.split("");
    let reverseArr=splitStr.reverse();
    let joinArr=reverseArr.join("");
    return joinArr;
}
function printStairs(n)
{
    for(let x=0;x<=n;x++)
    {
        let str="#";
        console.log(str.repeat(x));
    }
}
function sumRange(start,end)
{
    let sum=0;
    for(let n=start;n<=end;n++)
    {
        sum+=n;
    }
    return sum;
}
function min(a,b,c)
{
    if(a<b && a<c)
    {
        return a;
    }
    else if(b<a && b<c)
    {
        return b;
    }
    else
    {
        return c;
    }
}
function printPyramid(n)
{
    let num=1;
    for(let x=n;x>0;x--)
    {   
        const str="#";
        const space=" ";
        console.log(space.repeat(x-1)+str.repeat(num));
        num+=2;
    }
}
function firstAndLastToUpper(str)
{
    let first=str[0].toUpperCase();
    let last=str[(str.length)-1].toUpperCase();
    console.log(first+str.slice(1,(str.length-1))+last);
}
function cursorCheck(str)
{
    let words=["ironman","cursor","ostap"];
    for(n=0;n<=words.length-1;n++)
    if((str.toLowerCase().indexOf(words[n]))>=0)
    {
        return true;
    }
    else{
        return false;
    }
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
    return console.log(newstr);
    
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
    return console.log(ans);
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

