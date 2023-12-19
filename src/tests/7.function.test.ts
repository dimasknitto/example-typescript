describe('Pengujian Function ', () => {
    async function pengujianFunctionAsync(nilai1: number, detik: number = 1000): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (nilai1 > 4) {
                    resolve(nilai1 * 2)
                } else {
                    reject('nilai dibawah 4')
                }
            }, detik);
        })
    }

    const pengujianCatch = (nilai: number) => {
        try {
            if (nilai > 2) return nilai * 3

            throw new Error('Invalid')
        } catch (error) {
            return error
        }
    }

    describe('Pengujian Function General', () => {
        function perkalian(nilai1: number, nilai2: number) {
            return nilai1 + nilai2
        }


        it('function pengujian hasil', () => {
            expect(perkalian(1, 2)).toBe(3)
            expect(perkalian(1, 2)).not.toBe(1)
        })
    })


    describe('Pengujian Arrow Fanction', () => {
        const perkalian = (nilai1: number, nilai2: number) => {
            return nilai1 + nilai2
        }

        it('function arrow pengujian hasil', () => {
            expect(perkalian(1, 2)).toBe(3)
            expect(perkalian(1, 2)).not.toBe(1)
        })
    })


    describe('Pengujian Async', () => {

        it('nilai lebih dari 4 dikalikan 2', async () => {
            expect.assertions(2);

            expect(await pengujianFunctionAsync(5)).toBe(10)
            await expect(pengujianFunctionAsync(2)).rejects.toEqual(expect.any(String))
        })
    })

    describe('Pengujian Async denga waktu tidak tentu', () => {

        it('nilai waktu dimasukan lebih dari 4000ms', async () => {
            const test1 = await pengujianFunctionAsync(5, 5000) // masukan lebih dari 4 detik

            expect(test1).toEqual(10)
        }, 10000) //diberi waktu 10 detik
    })


    describe('Pengujian Catch', () => {
        it('maukan nillai lebih dari 2', () => {
            expect(pengujianCatch(4)).toBe(4 * 3)
        })

        it('masukan nilai dibawah 3', () => {
            const test1 = pengujianCatch(1)
            
            expect(test1).toEqual(new Error('Invalid'))
        })

    })
})