/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var n = prompt("Introduce un número y se mostrará su factorial");

if ((n==0) || (n==1))
{
    alert("\nEl resultado es 1");
}
else
{
for (var i=n-1; i>1; i--)
{
    n=n*i;
    alert("\nIteracion nº"+i+" valor :"+n);
}

alert ("\nEl resultado es :"+n);
}