import {CalculTPS, CalculTVQ} from "./Mathematique";

class MontantAvecTaxes {
    taxesTVQ = [8.5,9.5,9.975];
    annee = 0;
    montantSansTaxe= 0;
    tps= 0;
    tvq= 0;
    montantAvecTaxe= 0;


    constructor(annee, montantSansTaxe) {
        this.annee = annee;
        this.montantSansTaxe =Number(montantSansTaxe) ;
        this.tps = CalculTPS(this.getMontantSansTaxe()) ;
        this.tvq = CalculTVQ(this.getMontantSansTaxe(), this.taxesTVQ, this.getYear());
        this.montantAvecTaxe = this.getTVQ()+this.getTPS()+(this.getMontantSansTaxe());
    }

    getTPS() {
        return Math.ceil(this.tps* 100)/100;
    }
    getTVQ(){
        return Math.ceil(this.tvq* 100)/100;
    }
    getMontantSansTaxe(){
        return  Math.ceil(this.montantSansTaxe* 100)/100;
    }
    getMontantAvecTaxe (){
        return  Math.ceil(this.montantAvecTaxe * 100)/100;
    }
    getYear (){
        return this.annee;
    }

}
export default MontantAvecTaxes;
