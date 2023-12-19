describe('Pengujian Class', () => {
    class Buku {
        private nama: string;

        constructor(nama: string) {
            this.nama = nama;
        }

        getNama(): string {
            return `Nama Buku ${this.nama}`
        }
    }

    it('Pengeteasan fungsi pada class', () => {
        const judul:string = 'koding'
        const buatBuka = new Buku(judul)

        expect(buatBuka.getNama()).toBe(`Nama Buku ${judul}`)
        expect(buatBuka.getNama()).toContain(judul)
        expect(buatBuka.getNama()).toContain('Buku')
    })
})