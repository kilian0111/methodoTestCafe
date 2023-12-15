import {Piece} from "./piece";
import {HardwareInterface} from "./hardware/hardware.interface";
import {MachineACafeInterface} from "./machineACafe.interface";

export class MachineACafe implements MachineACafeInterface {
    private _argentEncaisse = 0;
    private _cafesServis = 0;
    private _hardware;

    public constructor(hardware: HardwareInterface) {
        this._hardware = hardware;

        hardware.registerMoneyDetectedCallback(
            montant => this.Inserer(Piece.FromMontant(montant))
        );
    }

    public GetSommeEncaissee(): number {
        return this._argentEncaisse;
    }

    private Inserer(prix: Piece) : void {
        if(prix.ValeurEnCentimes < Piece.CinquanteCents.ValeurEnCentimes)
            return;

        const resultat = this._hardware.servirCafe();
        if(resultat != 0) return;

        this._argentEncaisse += prix.ValeurEnCentimes;
        this._cafesServis ++;
    }

    public GetNombreCafesServis() {
        return this._cafesServis;
    }
}