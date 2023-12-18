describe('Pengetesan variabel', () => {
    let nama = 'knitto'
    let umur = 15

    it('pengecekan harus sesuai dengan nilai', () => {
        let nama1 = 'knitto'
        let nama2 = 'textile'

        expect(nama).toBe(nama1)
        expect(nama).not.toBe(nama2)
    })

    it('pengecekan tipe data Nama', () => {
        expect(nama).toEqual(expect.any(String));
    })

    it('pengecekan bukan angka', () => {
        expect(nama).not.toEqual(expect.any(Number))
    })

    it('pengecekan bukan boolean', () => {
        expect(nama).not.toEqual(expect.any(Boolean))
    })

    it('pengecekan umur harus number', () => {
        expect(umur).toEqual(expect.any(Number))
        expect(umur + umur).toBe(umur * 2)
    })
})