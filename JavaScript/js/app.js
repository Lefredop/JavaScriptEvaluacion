var display = document.getElementById("display");
var operacion = "";
var num1 = 0;
var num2 = 0;
var Calculadora = {
    init: function (){
        var cero = document.getElementById("0")
        var uno = document.getElementById("1")
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")
        var cinco = document.getElementById("5")
        var seis = document.getElementById("6")
        var siete = document.getElementById("7")
        var ocho = document.getElementById("8")
        var nueve = document.getElementById("9")
        var on = document.getElementById("on")
        var sign = document.getElementById("sign")
        var raiz = document.getElementById("raiz")
        var divicion = document.getElementById("dividido")
        var multiplicacion = document.getElementById("por")
        var resta = document.getElementById("menos")
        var punto = document.getElementById("punto")
        var igual = document.getElementById("igual")
        var suma = document.getElementById("mas")

        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        cero.addEventListener("mouseup", function(){
            cero.setAttribute("style", "transform:scale(1,1)")
        });
        cero.addEventListener("click", function(){
            clickEn("0");
        });

        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        uno.addEventListener("mouseup", function(){
            uno.setAttribute("style", "transform:scale(1,1)")
        });
        uno.addEventListener("click", function(){
            clickEn("1");
        });

        dos.addEventListener("mousedown", function(){
            dos.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        dos.addEventListener("mouseup", function(){
            dos.setAttribute("style", "transform:scale(1,1)")
        });
        dos.addEventListener("click", function(){
            clickEn("2");
        });

        tres.addEventListener("mousedown", function(){
            tres.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        tres.addEventListener("mouseup", function(){
            tres.setAttribute("style", "transform:scale(1,1)")
        });
        tres.addEventListener("click", function(){
            clickEn("3");
        });

        cuatro.addEventListener("mousedown", function(){
            cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        cuatro.addEventListener("mouseup", function(){
            cuatro.setAttribute("style", "transform:scale(1,1)")
        });
        cuatro.addEventListener("click", function(){
            clickEn("4");
        });

        cinco.addEventListener("mousedown", function(){
            cinco.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        cinco.addEventListener("mouseup", function(){
            cinco.setAttribute("style", "transform:scale(1,1)")
        });
        cinco.addEventListener("click", function(){
            clickEn("5");
        });

        seis.addEventListener("mousedown", function(){
            seis.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        seis.addEventListener("mouseup", function(){
            seis.setAttribute("style", "transform:scale(1,1)")
        });
        seis.addEventListener("click", function(){
            clickEn("6");
        });

        siete.addEventListener("mousedown", function(){
            siete.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        siete.addEventListener("mouseup", function(){
            siete.setAttribute("style", "transform:scale(1,1)")
        });
        siete.addEventListener("click", function(){
            clickEn("7");
        });

        ocho.addEventListener("mousedown", function(){
            ocho.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        ocho.addEventListener("mouseup", function(){
            ocho.setAttribute("style", "transform:scale(1,1)")
        });
        ocho.addEventListener("click", function(){
            clickEn("8");
        });

        nueve.addEventListener("mousedown", function(){
            nueve.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        nueve.addEventListener("mouseup", function(){
            nueve.setAttribute("style", "transform:scale(1,1)")
        });
        nueve.addEventListener("click", function(){
            clickEn("9");
        });

        on.addEventListener("mousedown", function(){
            on.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        on.addEventListener("mouseup", function(){
            on.setAttribute("style", "transform:scale(1,1)")
        });
        on.addEventListener("click", function(){
            clickEn("on");
            document.getElementById("display").textContent= "0";
        });

        sign.addEventListener("mousedown", function(){
            sign.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        sign.addEventListener("mouseup", function(){
            sign.setAttribute("style", "transform:scale(1,1)")
        });
        sign.addEventListener("click", function(){
            clickEn("sign");
            var num = display.textContent;
            display.textContent = parseFloat(num) * (-1);
        });

        raiz.addEventListener("mousedown", function(){
            raiz.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        raiz.addEventListener("mouseup", function(){
            raiz.setAttribute("style", "transform:scale(1,1)")
        });
        raiz.addEventListener("click", function(){
            clickEn("√");
        });

        divicion.addEventListener("mousedown", function(){
            divicion.setAttribute("style", "transform:scale(0.95,0.95")
        });
        divicion.addEventListener("mouseup", function(){
            divicion.setAttribute("style", "transform:scale(1,1)")
        });
        divicion.addEventListener("click", function(){
            clickEn("/");
        });

        resta.addEventListener("mousedown", function(){
            resta.setAttribute("style", "transform:scale(0.95,0.95)")
        });
        resta.addEventListener("mouseup", function(){
            resta.setAttribute("style", "transform:scale(1,1)")
        });
        resta.addEventListener("click", function(){
            clickEn("-")
        });

        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style", "transform:scale(0.95,0.95")
        });
        punto.addEventListener("mouseup", function(){
            punto.setAttribute("style", "transform:scale(1,1)")
        });
        punto.addEventListener("click", function() {
            if (display.textContent.indexOf(".") == -1) {
            clickEn(".");
        }});

        igual.addEventListener("mousedown", function(){
            igual.setAttribute("style", "transform:scale(0.95,0.95")
        });
        igual.addEventListener("mouseup", function(){
            igual.setAttribute("style", "transform:scale(1,1)")
        });
        igual.addEventListener("click", function(){
            clickEn("+");
            num2 = display.textContent;
            resolucion()
            
            });

        multiplicacion.addEventListener("mousedown", function(){
            multiplicacion.setAttribute("style", "transform:scale(0.95,0.95")
        });
        multiplicacion.addEventListener("mouseup", function(){
            multiplicacion.setAttribute("style", "transform:scale(1,1)")
        });
        multiplicacion.addEventListener("click", function(){
            clickEn("*");
        });

        suma.addEventListener("mousedown", function(){
            suma.setAttribute("style", "transform:scale(0.95,0.95")
        });
        suma.addEventListener("mouseup", function(){
            suma.setAttribute("style", "transform:scale(1,1)")
        });
        suma.addEventListener("click", function(){
            clickEn("+");
        });

        function limpiar(){
            display.textContent = "";
        }
        
        function resetear(){
            display.textContent = "";
            num1 = 0;
            num2 = 0;
            operacion = "";
        }
        resetear()
        suma.onclick = function () {
            num1 = display.textContent;
            operacion = "+";
            limpiar();
        }
        resta.onclick = function(){
            num1 = display.textContent;
            operacion = "-";
            limpiar();
        }
        multiplicacion.onclick = function(){
            num1 = display.textContent;
            operacion = "*";
            limpiar();
        }
        divicion.onclick = function(){
            num1 = display.textContent;
            operacion = "/";
            limpiar();
        }
        igual.onclick = function () {
            num2 = display.textContent;
            operacion = "="
            resolucion();
        }
        limpiar()
        resolucion()
        function resolucion(){
        
            switch(operacion){
                case "+":
                display.textContent = parseFloat(num1) + parseFloat(num2);
                break;
            
                case "-":
                display.textContent = parseFloat(num1) - parseFloat(num2);
                break;
            
                case "*":
                display.textContent = parseFloat(num1) * parseFloat(num2);
                break;
            
                case "/":
                display.textContent = parseFloat(num1) / parseFloat(num2);
                break;
        }}
        
            
        function clickEn(num) {
            if(display.textContent.length < 8) {
            display.textContent += num;
            }
            }
            
    }
}


Calculadora.init()
    



