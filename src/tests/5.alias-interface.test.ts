describe('Pengetesan Alias dan Interfaces', () => {
    describe('Pengetesan Alias', () => {
        type UkuranBaju = {
            size: 's' | 'm' | 'l' | 'xl' | 'xxl'
        }

        type WarnaBaju = {
            warna: string
        }

        type Baju = {
            nama: string
        }

        const bikinBaju: Baju | UkuranBaju = {
            nama: 'Kaos',
            size: 'xl'
        }

        it('Pengecekan vakue ukuran baju', () => {
            expect(bikinBaju).toEqual(expect.any(Object));
        })
    })

    describe('Pengetesan Interface', () => {
        // interface UkuranBaju {
        //     size: 's' | 'm' | 'l' | 'xl' | 'xxl'
        // }

        // interface WarnaBaju extends UkuranBaju  {
        //     warna: string
        // }

        // interface Baju extends WarnaBaju {
        //     nama: string
        // }

        // const bikinBaju: Baju = {
        //     nama:'kaos',
        //     size : 'l',
        //     warna: ''
        // }

        interface Baju {
            size: 's' | 'm' | 'l' | 'xl' | 'xxl'
        }

        interface Baju {
            nama: string
        }

        interface Baju {
            warna: string
        }

        const bikinBaju: Baju = {
            size: 'l',
            nama: 'baju',
            warna: 'merah'
        }

        it('Pengecekan object parameter', () => {
            expect(bikinBaju).toMatchObject({
                size: 'l'
            })
        })
    })

})