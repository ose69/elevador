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
    public irA(destino) {
        if (destino>this.pisosTotales||destino<this.pisosTotales) {
            return false;
        }
        else{
            if (destino>this.pisoActual&&destino<this.pisosTotales) {
                this.subir(destino);
            }
            else if (destino<this.pisoActual) {
                this.bajar(destino);
            }
            else{
                return 'el destino es el piso actual|'
            }
        }
    }
    public bajar(destino){
        while(this.pisoActual>destino){
            this.pisoActual--;
        }
        return this.pisoActual;
    }
    public subir(destino){
        while(destino<this.pisosTotales&& destino<this.pisoActual){
            this.pisoActual++;
        }
        return this.pisoActual;
    }

}
let elevador= new Elevador(5,false);
elevador.abrirPuerta();
elevador.cerrarPuerta();
elevador.irA();