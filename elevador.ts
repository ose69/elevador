class Elevador{
    pisosTotales:number;
    pisoActual:number;
    estadoPuerta:string;
    constructor(pisosTotal) {
        this.estadoPuerta="abierta";
        this.pisoActual=1;
        this.pisosTotales=pisosTotal;
    }
    public ePuerta(estado){
        if (this.estadoPuerta!="abierta") {
            return "puerta cerrada" + estado;
        }
        else "abierta";
    }
    public abrirPuerta(){
        if(this.estadoPuerta!="abierta"){
            return "se abre puerta";
        }
    }
    public cerrarPuerta(){
        if(this.estadoPuerta==="abierta"){
            return "cerrando puerta";
        }
    }
    private subir() {
        if (this.pisoActual===1 &&this.pisoActual<this.pisosTotales) {
            return "subiendo";
        }
    } 
    private bajar() {
        if (this.pisoActual>1 && this.pisoActual<=this.pisosTotales) {
            return "bajando";
        }
    }
    private irA(destino) {
        if (destino > this.pisosTotales || destino < this.pisosTotales) {
            return false;
        }
        else {
            if (destino > this.pisoActual) {
                this.subir(destino);
            }
            else if (destino < this.pisoActual) {
                this.bajar(destino);
            }
            else {
                return 'El destino es el piso actual.';
            }
        }
    }
//https://github.com/Gilberto-Felipe/elevador.ts/blob/4464596ba845e217bee232f20a818872d1f7437f/elevador.js
}
