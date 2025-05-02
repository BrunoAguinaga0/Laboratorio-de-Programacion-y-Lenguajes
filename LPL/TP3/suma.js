function sumatoria()
{
    var a,b,mensaje,resultado;
    a = prompt("Ingrese el primer numero.")
    b = prompt("Ingrese el segundo numero.")
    resultado = parseInt(a) + parseInt(b)
    mensaje = ("La suma entre " + a + " y " + b +" es: " + resultado)
    alert(mensaje)
}