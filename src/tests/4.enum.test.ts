describe("Pengetesan tipe data enum", () => {
    enum UkuranBaju {
        s = 's',
        m = 'm',
        l = 'l',
        xl = 'xl',
        xxl = 'xxl'
    }

    type Baju = {
        nama: string,
        ukuran: UkuranBaju
    }

    const bajuBatikS: Baju = {
        nama: "Batik",
        ukuran: UkuranBaju.m
    }

    it("cek semua nilai enum harus sesuai ", () => {
        expect(UkuranBaju.s).toBe('s')
        expect(UkuranBaju.m).toBe('m')
        expect(UkuranBaju.l).toBe('l')
        expect(UkuranBaju.xl).toBe('xl')
        expect(UkuranBaju.xxl).toBe('xxl')

        for (const key in UkuranBaju) {
            if (Object.prototype.hasOwnProperty.call(UkuranBaju, key)) {
                const color = UkuranBaju[key];
                expect(UkuranBaju[color as keyof typeof UkuranBaju]).toBeTruthy()
            }
        }
    })

})