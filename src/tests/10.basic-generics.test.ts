describe('Pengujian Basic-Generics', () => {

    function transform<T>(value: T): T {
        return value;
    }

    function transformMultiple<T, S>(value1:T, value2:S):[T, S] {
        return [value1, value2];
    }

    it('Masukan transform angka', () => {
        expect(transform(1)).toEqual(expect.any(Number))
    })

    it('Masukan transform string', () => {
        expect(transform('string')).toEqual(expect.any(String))
    })

    it('Masukan transform multiple', () => {
        expect(transformMultiple('string', 'string')).toEqual(['string', 'string'])
    })

    it('uji tipe data', () => {
        const result = transformMultiple('hello', 42);

        const [stringValue, numberValue] = result;
        expect(typeof stringValue).toBe('string');
        expect(typeof numberValue).toBe('number');
    })
})