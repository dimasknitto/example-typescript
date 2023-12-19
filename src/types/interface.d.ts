
export interface Kendaraan {
    nama: string
    tipe: "mobil" | "motor"
}

export interface Konvensional extends Kendaraan {
    bahanBakar: 'Solar' | 'Pertalite'
}

export interface Modern extends Kendaraan {
    battery : number | string,
}