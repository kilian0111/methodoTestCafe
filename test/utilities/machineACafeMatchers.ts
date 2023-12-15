import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';
import {MachineACafeHarness} from "./machineACafeHarness";
import {Piece} from "../../src/piece";

const aucunCafeNEstServi: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown) {
        if(!(actual instanceof MachineACafeHarness))
            throw new Error("Only works with MachineACafeHarness");

        const delta = actual.GetDeltaCafesServis();
        const pass = delta == 0;
        const message = pass
            ? `Au moins un cafe devait être servi, aucun ne l'a ete.`
            : `Aucun cafe ne devait être servi, ${delta} l'ont ete.`;

        return {
            message: () => message,
            pass: pass
        }
    };

const unCafeEstServi: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown) {
        if(!(actual instanceof MachineACafeHarness))
            throw new Error("Only works with MachineACafeHarness");

        const delta = actual.GetDeltaCafesServis();
        const pass = delta == 1;
        const message = pass
            ? `Un cafe ne devait pas être servi, il l'a ete.`
            : `Un cafe devait être servi, ${delta} l'ont ete.`;

        return {
            message: () => message,
            pass: pass
        }
    };

const nCafesSontServis: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, n: unknown) {
        if(!(actual instanceof MachineACafeHarness))
            throw new Error("Only works with MachineACafeHarness");

        if(typeof n !== 'number')
            throw new Error("Only works with number");

        const delta = actual.GetDeltaCafesServis();
        const pass = delta == n;
        const message = pass
            ? `${n} cafes ne devaient pas être servis, ${delta} l'ont ete.`
            : `${n} cafes devaient être servis, ${delta} l'ont ete.`;

        return {
            message: () => message,
            pass: pass
        }
    };

const unePieceEstEncaissee: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, piece: unknown) {
        if(!(actual instanceof MachineACafeHarness))
            throw new Error("Only works with MachineACafeHarness");

        if(!(piece instanceof Piece))
            throw new Error("Only works with Piece");

        const delta = actual.GetSommeEncaissee();
        const pass = delta == piece.ValeurEnCentimes;

        const message = pass
            ? `Il ne fallait pas encaisser ${piece}. ${delta} centimes l'ont ete.`
            : `Il fallait encaisser ${piece}. ${delta} centimes l'ont ete.`;

        return {
            message: () => message,
            pass: pass
        }
    };

const aucuneSommeNEstEncaissee: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown) {
        if(!(actual instanceof MachineACafeHarness))
            throw new Error("Only works with MachineACafeHarness");

        const delta = actual.GetSommeEncaissee();
        const pass = delta == 0;

        const message = pass
            ? `Il fallait encaisser de l'argent. Ca n'est pas le cas.`
            : `Il ne fallait pas encaisser d'argent. ${delta} centimes l'ont ete.`;

        return {
            message: () => message,
            pass: pass
        }
    };

expect.extend({
    unCafeEstServi,
    nCafesSontServis,
    aucunCafeNEstServi,
    aucuneSommeNEstEncaissee,
    unePieceEstEncaissee
});