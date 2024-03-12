document.addEventListener("DOMContentLoaded", function() {
    var calcularButtons = document.querySelectorAll('.calcular');
    calcularButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var ejercicio = this.getAttribute('data-ejercicio');
            if (ejercicio === 'area') {
                obtenerArea();
                } else if (ejercicio === 'suma') {
                    sumarNumeros();
                    } else if (ejercicio === 'elevar') {
                        obtenerElevado();
                        }else if (ejercicio === 'conversion') {
                            obtenerConversion();
                            }else if (ejercicio === 'perimetro') {
                                obtenerPerimetroCuadrado();
                                }else if (ejercicio === 'cilindro') {
                                    obtenerCilindro();
                                    }else if (ejercicio === 'circunferencia'){
                                        obtenerCircunferencia();
                                        }else if (ejercicio === 'promedio'){
                                            obetenerPromedio();
            }
        });
    });
});

/*N1-OP*/
function obtenerArea() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = (base * altura) / 2;

    alert (  area.innerHTML = "El área del tríaungulo es: " + area);
}

/*N2-OP*/
function sumarNumeros() {
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var suma = n1 + n2;

    alert( suma.innerHTML = "El resultado de la suma es: " + suma);
}

/*N3-OP*/
function obtenerElevado() {
    var numero = parseFloat(document.getElementById('numeroC').value);
    var cuadrado = numero * numero; 

    alert('El cuadrado del número ingresado es: ' + cuadrado.toFixed(2) );
}

/*N4-OP*/
function obtenerConversion() {
    var euro = parseFloat(document.getElementById('cantidad').value);
    var dolar = 1.08;
    var cantidadDolares = euro * dolar;

    alert(euro + ' euros equivalen a ' + cantidadDolares.toFixed(2) + ' dólares.');
}

/*N5-OP*/
function obtenerPerimetroCuadrado() {
    var lado = parseFloat(document.getElementById('lado').value);
    var area = lado * lado;
    var perimetro = 4 * lado;

    alert('El área del cuadrado es: ' + area.toFixed(2) + '. El perímetro del cuadrado es: ' + perimetro.toFixed(2) + '.');
}

/*N6-OP*/
function obtenerCilindro() {
    var radio = parseFloat(document.getElementById('radio').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var areaLateral = 2 * Math.PI * radio * altura;
    var areaTotal = areaLateral + (2 * Math.PI * radio * radio);
    var volumen = Math.PI * radio * radio * altura;

    alert('El área lateral del cilindro es: ' + areaLateral.toFixed(2) + '. El área total del cilindro es: ' + areaTotal.toFixed(2) + '. El volumen del cilindro es: ' + volumen.toFixed(2) + '.');
}

/*N7-OP*/
function obtenerCircunferencia(){
    var radioCircunferencia = parseFloat(document.getElementById('radioCircunferencia').value);
    var longitudCircunferencia = 2 * Math.PI * radioCircunferencia;
    var areaCirculoInscrito = Math.PI * radioCircunferencia * radioCircunferencia;

    alert('La longitud de la circunferencia es: ' + longitudCircunferencia.toFixed(2) + '. El área del círculo inscrito es: ' + areaCirculoInscrito.toFixed(2) + '.');
}

/*N8-OP*/
function obetenerPromedio() {
    var numero1 = parseFloat(document.getElementById('numerop1').value);
    var numero2 = parseFloat(document.getElementById('numerop2').value);
    var numero3 = parseFloat(document.getElementById('numerop3').value);
    var promedio = (numero1 + numero2 + numero3) / 3;

    alert('El promedio de los tres números ingresados es: ' + promedio.toFixed(2));
}
