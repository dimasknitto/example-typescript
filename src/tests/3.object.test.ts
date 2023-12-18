describe('Pengetesan Objects', () => {
    type Person = {
        nama: string,
        umur?: number
    }

    let object1: Person = {
        nama: 'Knitto',
        umur: 12
    }

    let object2: Person = {
        nama: 'Knitto'
    }

    let object3: Person = {
        nama: 'Knitto',
        umur: 12
    }


    it('harus mempunyai nilai yang sama', () => {
        expect(object1).toEqual(object3)
    })

    it('harus mempunyai arsiran data yang sama', () => {
        expect(object1).toMatchObject(object2)
        expect(object1).toMatchObject(object3)
    })

    it('harus mempunyai key yang sama', () => {
        expect(object1).toHaveProperty('nama')
        expect(object1).not.toHaveProperty('id')
    })
})