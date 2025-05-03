function sumatoria()
{
    var a,b,mensaje,resultado;
    var contador;
    contador = 0
    a = prompt("Ingrese el primer numero.");
    b = prompt("Ingrese el segundo numero.");
    resultado = parseInt(a) + parseInt(b);
    mensaje = ("La suma entre " + a + " y " + b +" es: " + resultado);
    alert(mensaje);
    if (parseInt(a) > parseInt(b))
    {resultado = parseInt(a) ** parseInt(b);
    document.writeln(a + " elevado a " + b + " es: " + resultado);}
    else
    aux = parseInt(b)
    {while(parseInt(a) <= parseInt(aux))
    {contador += 1;
        aux = parseInt(aux) - parseInt(a);
    }
    document.writeln(b+" divido "+a+" es: "+contador + " y el resto es: " + aux)
    }
}

