import { error } from "console";

describe('pengujian casting as type', () => {


    function castingValue(value: any): string | null {
        const result = value as string;
        return typeof result === 'string' ? result : null;
    }

    it('test variabel casting benar angka', () => {
        expect(castingValue('satu')).toBe('satu')
    })

    it('test variabel casting salah', () => {
        expect(castingValue(1)).toBeNull()
    })
})