export function CalculTVQ(montant, taxes, annee) {
    return montant * (taxeSelonAnnee(taxes, annee) /100);
}

export function CalculTPS(montant) {return  montant * (5/100) ;}

function taxeSelonAnnee(taxes, annee) {
    if(annee==2011){ return taxes[0];}
    else if(annee==2012)   {  return taxes[1];}
    else {  return taxes[2];}
}



