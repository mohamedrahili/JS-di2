const t =[2,3,2,4,5,6];
var x = 9;
var p = false;
for( i=0; i<t.length; i++)
{
    if( t[i]==x)
        p= true;
}
if (p==false)
{
    console.log("False");
}
else
{
    console.log("True");
}