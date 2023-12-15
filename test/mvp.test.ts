import "./utilities/machineACafeMatchers"
import {Piece} from "../src/piece";
import {MachineACafeBuilder} from "./utilities/machineACafeBuilder";

describe('En tant que consommateur, je veux acheter un cafe, afin de le savourer avec mes collegues execrables',
    () => {
        test.each([
            [Piece.CinquanteCents],
            [Piece.UnEuro],
            [Piece.DeuxEuros]
        ])("ETANT DONNE une machine à cafe " +
            "QUAND on insere %s au moins le prix d'un cafe " +
            "ALORS un cafe est servi " +
            "ET l'argent est encaisse", (prix: Piece) => {
            const machine = new MachineACafeBuilder().Build();

            machine.SimulerInsertionArgent(prix);

            // @ts-ignore
            expect(machine).unePieceEstEncaissee(prix);

            // @ts-ignore
            expect(machine).unCafeEstServi();
        });

        test.each([
            [Piece.UnCentime],
            [Piece.DeuxCentimes],
            [Piece.CinqCentimes],
            [Piece.DixCentimes],
            [Piece.VingtCentimes]
        ])("ETANT DONNE une machine à cafe " +
            "QUAND on insere %s, somme inferieure au prix d'un cafe " +
            "ALORS aucun cafe n'est servi " +
            "ET l'argent est restitue", (prix: Piece) => {
            const machine = new MachineACafeBuilder().Build();

            machine.SimulerInsertionArgent(prix);

            // @ts-ignore
            expect(machine).aucuneSommeNEstEncaissee(prix);

            // @ts-ignore
            expect(machine).aucunCafeNEstServi();
        });

        test("ETANT DONNE une machine à cafe " +
            "QUAND on insere le prix d'un cafe, 2 fois " +
            "ALORS deux cafes sont servis " +
            "ET l'argent est encaisse", () => {
            const machine = new MachineACafeBuilder().Build();
            const prix = Piece.CinquanteCents;

            machine.SimulerInsertionArgent(prix);
            machine.SimulerInsertionArgent(prix);

            // @ts-ignore
            expect(machine).unePieceEstEncaissee(Piece.UnEuro);

            // @ts-ignore
            expect(machine).nCafesSontServis(2);
        });

        test("ETANT DONNE une machine à cafe dysfonctionnelle " +
            "QUAND on insere le prix d'un cafe " +
            "ALORS aucun cafe n'est servi " +
            "ET l'argent est encaisse", () => {
            const machine = new MachineACafeBuilder()
                .Dysfonctionnelle()
                .Build();

            const prix = Piece.CinquanteCents;
            machine.SimulerInsertionArgent(prix);

            // @ts-ignore
            expect(machine).aucuneSommeNEstEncaissee(prix);

            // @ts-ignore
            expect(machine).aucunCafeNEstServi();
        })
    });