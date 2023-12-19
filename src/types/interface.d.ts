
interface Kendaraan {
    nama: string
    tipe: "mobil" | "motor"
}

interface Konvensional extends Kendaraan {
    bahanBakar: 'Solar' | 'Pertalite'
}

interface Modern extends Kendaraan {
    battery : number | string,
}