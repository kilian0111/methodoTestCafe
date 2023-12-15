export class Piece {
    static UnCentime: Piece = new Piece(1);
    static DeuxCentimes: Piece = new Piece(2);
    static CinqCentimes: Piece = new Piece(5);
    static DixCentimes: Piece = new Piece(10);
    static VingtCentimes: Piece = new Piece(20);
    static CinquanteCents: Piece = new Piece(50);
    static UnEuro: Piece = new Piece(100);
    static DeuxEuros: Piece = new Piece(200);

    public readonly ValeurEnCentimes: number;

    private constructor(valeurEnCentimes: number) {
        this.ValeurEnCentimes = valeurEnCentimes;
    }

    static FromMontant(montant: number) {
        if(montant == 1) return Piece.UnCentime;
        if(montant == 2) return Piece.DeuxCentimes;
        if(montant == 5) return Piece.CinqCentimes;
        if(montant == 10) return Piece.DixCentimes;
        if(montant == 20) return Piece.VingtCentimes;
        if(montant == 50) return Piece.CinquanteCents;
        if(montant == 100) return Piece.UnEuro;
        if(montant == 200) return Piece.DeuxEuros;
        throw new Error("Le montant ne correspond à aucune piece");
    }

    public toString(){
        return this.ValeurEnCentimes + 'cts';
    }
}