describe('Pengujian tipe', () => {
    const buatMobil:Konvensional = {
        nama: 'Kijang',
        tipe:'mobil',
        bahanBakar:'Solar'
    }

    const buatMotor:Modern = {
        nama: 'U win Fly',
        tipe:'motor',
        battery: '12000 mah'
    }
    
    it('pengecekan hirarki ', () => {
        expect(buatMotor).toHaveProperty('battery', '12000 mah');
    })
})