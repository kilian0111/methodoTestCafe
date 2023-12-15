export interface HardwareInterface{
    servirCafe(): number; // 0 si tout ok, sinon erreur
    registerMoneyDetectedCallback(callback: (moneyInserted: number) => void): void;

    
}