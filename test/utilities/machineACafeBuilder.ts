import {MachineACafe} from "../../src/machineACafe";
import {HardwareFake} from "./hardwareFake";
import {MachineACafeHarness} from "./machineACafeHarness";

export class MachineACafeBuilder {
    private _estDysfonctionnel: boolean = false;

    public Build(): MachineACafeHarness {
        const hardware = new HardwareFake(this._estDysfonctionnel);
        const machineReelle = new MachineACafe(hardware);
        return new MachineACafeHarness(machineReelle, hardware);
    }

    public Dysfonctionnelle() : MachineACafeBuilder {
        this._estDysfonctionnel = true;
        return this;
    }
}