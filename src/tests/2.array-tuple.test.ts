describe('Pengecekan array dan tuple', () => {
    let array1: number[] = [1, 2, 3]
    let array2: [string, number, boolean] = ['string', 1, false]

    it('Array1 harus sesuai dengan panjang nilai array nilai', () => {
        expect(array1.length).toBe(3)
    })

    it('Array1 harus memiliki panjang lebih dari 2', () => {
        expect(array1.length).toBeGreaterThan(2)
    })

    it('Array2 ke 3 harus bertipe boolean', () => {
        expect(array2[2]).toEqual(expect.any(Boolean))
    })

    it('Array2 String diubah ke uppper case', () => {
        expect(array2[0].toUpperCase()).toBe('STRING')
    })

})