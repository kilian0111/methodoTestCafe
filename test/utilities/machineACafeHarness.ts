import {MachineACafeInterface} from "../../src/machineACafe.interface";
import {Piece} from "../../src/piece";
import {HardwareInterface} from "../../src/hardware/hardware.interface";
import {HardwareFake} from "./hardwareFake";

export class MachineACafeHarness implements MachineACafeInterface {
    private _machineACafe: MachineACafeInterface;
    private _hardware: HardwareFake;
    private _sommeEncaisseeInitiale: number;
    private _cafesServisInitiaux: number;

    public constructor(machineACafe: MachineACafeInterface,
                       hardware: HardwareFake) {
        this._machineACafe = machineACafe;
        this._hardware = hardware;
        this._sommeEncaisseeInitiale = machineACafe.GetSommeEncaissee();
        this._cafesServisInitiaux = machineACafe.GetNombreCafesServis();
    }

    public GetDeltaSommeEncaissee() {
        return this.GetSommeEncaissee() - this._sommeEncaisseeInitiale;
    }

    public GetDeltaCafesServis() {
        return this.GetNombreCafesServis() - this._cafesServisInitiaux;
    }

    GetSommeEncaissee(): number {
        return this._machineACafe.GetSommeEncaissee();
    }
    GetNombreCafesServis(): number {
        return this._machineACafe.GetNombreCafesServis();
    }

    SimulerInsertionArgent(prix: Piece) {
        this._hardware.SimulerInsertionArgent(prix);
    }
}