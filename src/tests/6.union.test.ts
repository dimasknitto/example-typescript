describe("Pengetesan Union", () => {
    function hurufAtauAngka(value: number | string): number | string {
        return value
    }


    it("pengetesan union huruf", () => {
        expect(hurufAtauAngka('111')).toEqual(expect.any(String))
    })

    it("pengetesan union bukan angka", () => {
        expect(hurufAtauAngka(111)).not.toEqual(expect.any(String))
    })
    
    it("pengetesan union angka", () => {
        expect(hurufAtauAngka(111)).toEqual(expect.any(Number))
    })
})