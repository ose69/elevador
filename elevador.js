var Elevador = /** @class */ (function () {
    function Elevador(pisosTotal) {
        this.estadoPuerta = "abierta";
        this.pisoActual = 1;
        this.pisosTotales = pisosTotal;
    }
    Elevador.prototype.ePuerta = function (estado) {
        if (this.estadoPuerta != "abierta") {
            return "puerta cerrada" + estado;
        }
        else
            "abierta";
    };
    Elevador.prototype.abrirPuerta = function () {
        if (this.estadoPuerta != "abierta") {
            return "se abre puerta";
        }
    };
    Elevador.prototype.cerrarPuerta = function () {
        if (this.estadoPuerta === "abierta") {
            return "cerrando puerta";
        }
    };
    /* public subir() {
         if (this.pisoActual===1 &&this.pisoActual<this.pisosTotales) {
             return "subiendo";
         }
     }
     public bajar() {
         if (this.pisoActual>1 && this.pisoActual<=this.pisosTotales) {
             return "bajando";
         }
     }*/
    Elevador.prototype.irA = function (destino) {
        if (destino > this.pisosTotales || destino < this.pisosTotales) {
            return false;
        }
        else {
            if (destino > this.pisoActual && destino < this.pisosTotales) {
                this.subir(destino);
            }
            else if (destino < this.pisoActual) {
                this.bajar(destino);
            }
            else {
                return 'el destino es el piso actual|';
            }
        }
    };
    Elevador.prototype.bajar = function (destino) {
        while (this.pisoActual > destino) {
            this.pisoActual--;
        }
        return this.pisoActual;
    };
    Elevador.prototype.subir = function (destino) {
        while (destino < this.pisosTotales && destino < this.pisoActual) {
            this.pisoActual++;
        }
        return this.pisoActual;
    };
    return Elevador;
}());
