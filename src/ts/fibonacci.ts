export function fibonacci(zahl: number){
    let vorletzteZahl = 0;
    let letzteZahl = 1;
    for(let i = 2; i <= zahl; i++){
        let zwischenergebnis = vorletzteZahl;
        vorletzteZahl = letzteZahl;
        letzteZahl = zwischenergebnis + vorletzteZahl;
    }
    return letzteZahl;
}
