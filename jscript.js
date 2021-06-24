"use strict"

// 1. Susikurkite objektą "Klase", konstruktoriaus kurti šiam objektui nereikia.

//    const klase = {};

// 2. Sukurkite 20 objektų masyvą, kuriame yra objektai "Studentai". Objektą sukurkite pasinaudodami konstruktoriumi.
//"Studentas" konstruktorius turi sukurti tokį objektą:
//*id - skaičius
//*vardas - tekstas
//*pavarde - tekstas
//*pazymys - skaičius
//*lankomumamas - masyvas, 20 elementų, užpildytas "x" ir "n" reikšmėmis.
//*data - šios dienos data.

function Studentas(id, vardas, pavarde, pazymys, lankomumas, data) {
    this.id = id;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.pazymys = pazymys;
    this.lankomumas = lankomumas;
    this.data = data;

};
/*
const s1 = new Studentas("1", "Tomas", "Tomauskas", 10, "x", new Date());
const s2 = new Studentas("2", "Tomas", "Tomauskas", 10, "x", new Date());
const s3 = new Studentas("3", "Tomas", "Tomauskas", 10, "x", new Date());
const s4 = new Studentas("4", "Tomas", "Tomauskas", 10, "x", new Date());
const s5 = new Studentas("5", "Tomas", "Tomauskas", 10, "x", new Date());
const s6 = new Studentas("6", "Tomas", "Tomauskas", 10, "x", new Date());
const s7 = new Studentas("7", "Tomas", "Tomauskas", 10, "x", new Date());
const s8 = new Studentas("8", "Tomas", "Tomauskas", 10, "x", new Date());
const s9 = new Studentas("9", "Tomas", "Tomauskas", 10, "x", new Date());
const s10 = new Studentas("10", "Tomas", "Tomauskas", 10, "x", new Date());
const s11 = new Studentas("11", "Tomas", "Tomauskas", 10, "x", new Date());
const s12 = new Studentas("12", "Tomas", "Tomauskas", 10, "x", new Date());
const s13 = new Studentas("13", "Tomas", "Tomauskas", 10, "x", new Date());
const s14 = new Studentas("14", "Tomas", "Tomauskas", 10, "x", new Date());
const s15 = new Studentas("15", "Tomas", "Tomauskas", 10, "x", new Date());
const s16 = new Studentas("16", "Tomas", "Tomauskas", 10, "x", new Date());
const s17 = new Studentas("17", "Tomas", "Tomauskas", 10, "x", new Date());
const s18 = new Studentas("18", "Tomas", "Tomauskas", 10, "x", new Date());
const s19 = new Studentas("19", "Tomas", "Tomauskas", 10, "x", new Date());
const s20 = new Studentas("20", "Tomas", "Tomauskas", 10, "x", new Date());


let studentai = [
    s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20
]
*/

let studentai = [];

for (let i=0; i < 20; i++) {
    let id = i + 1;
    let vardas = "Vardas" + (i + 1);
    let pavarde = "Pavarde" + (i + 1);

    let min = 1;
    let max = 10;
    let pazymys = Math.floor(Math.random() * (max - min + 1) + min);

    let lankomumas = [];
    for (let j=0; j < 20; j++) {
        if (Math.random() < 0.5) {
            lankomumas[j] = "x";
        } else {
            lankomumas[j] = "n";
        }
    }

    let data = new Date();

    studentai[i] = new Studentas(id, vardas, pavarde, pazymys, lankomumas, data);

}

console.log(studentai);





// 3. Studentų objektų masyvą patalpikinti į objektą "Klase".

//     const klase = {
//     studentai
//      };



// 4. Objekte "Klase", sukurkite metodą, kuris išvestų bendrą studentų pažymių vidurkį.

const klase = {
    studentai,

    pazymiuVidurkis: function () {
        let suma = 0;
        for (let i in this.studentai) {
           suma += this.studentai[i].pazymys;

        } return suma / this.studentai.length;

    }
    
    };

    console.log(klase);
    console.log(klase.pazymiuVidurkis());



    

