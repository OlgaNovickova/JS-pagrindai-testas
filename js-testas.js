/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

console.log('1 uzduotis')
function konvertacija () {

DollarSuma = EurSuma * 1.07 //xe.com currency converter
console.log(`Konvertuota suma doleriais: $${DollarSuma.toFixed(2)}`)
}

let EurSk1 = Math.floor(Math.random() * (1000 - 1 + 1) +1)
let EurSk2 = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
let EurSuma = EurSk1 + EurSk2

console.log(`Pirmas sugeneruotas skaičius: ${EurSk1} Eur, antras sugeneruotas skaičius: ${EurSk2} Eur. Skaičių suma: ${EurSuma} Eur`)

konvertacija()


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log('')
console.log('2 uzduotis')

function converter() {
	EurSum = DollarSum * 0.93 //xe.com currency converter
	console.log(`Konvertuota suma eurais: ${EurSuma.toFixed(2)} Eur`)
}

let Sk1 = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
let Sk2 = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
let DollarSum = Sk1 + Sk2

console.log(`Pirmas sugeneruotas skaičius: $${Sk1}, antras sugeneruotas skaičius: $${Sk2}. Skaičių suma: $${DollarSum}`)

converter()



/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

console.log('')
console.log('3 uzduotis')

function bmi_calculation() {
	let weight_kg = 63
	let height_m = 1.65
	let bmi = weight_kg / height_m ** 2

	console.log(`Žmogaus kūno masės indeksas - ${bmi.toFixed(2)}`)

	
	if (bmi > 25) {
		return `Žmogus turi viršsvorį`
	} else if (bmi >= 18.5 && bmi < 25) {
		return `Žmogaus svoris yra normalus`
	} else if (bmi < 18.5) {
		return `Žmogaus svoris yra per mažas`
	}
}

console.log(bmi_calculation())


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

console.log('')
console.log('4 uzduotis')

let amziusMetai = 41
let dienos = amziusMetai * 365 + 10 //skaičiuojami keliamieji metai, todėl +10
let valandos = dienos * 24
let minutes = valandos * 60
let sekundes = minutes * 60

console.log(`41 metai tai yra ${dienos} dienų arba ${valandos} valandų, arba ${minutes} minučių, arba ${sekundes} sekundžių`)

//šitą pirmą variantą tiesiog sau padariau. Man asmeniškai tai gražiau atrodo, nei su šitomis didelėmis sekundėmis. 

let AmziusMetai = 41
let Sekundes = AmziusMetai * 31536000 + 864000 //10 dienų paverčiam į sekundes
let Minutes = Sekundes / 60
let Valandos = Minutes / 60
let Dienos = Valandos / 24

console.log(`41 metai tai yra ${Sekundes} sekundžių arba ${Minutes} minučių, arba ${Valandos} valandų, arba ${Dienos} dienų`)



/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/


console.log('')
console.log('5 uzduotis')

let celsius = 36.8

function konvertavimasFiC() {
	let fahrenheit = (celsius * 9) / 5 + 32
	return fahrenheit.toFixed(1)
	
}

console.log(celsius + ' celsijaus laipsnių yra ' + konvertavimasFiC() + ' farenheito laipsnių')



let fahrenheit = 98.2

function konvertavimasCiF () {
	let celsius = (fahrenheit - 32) * 5/9
	return celsius.toFixed(1)
	
}

console.log(fahrenheit + ' farenheito laipsnių yra ' + konvertavimasCiF() + ' celsijaus laipsnių')


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

console.log('')
console.log('6 uzduotis')

let Skaicius = []
for (let i = 1; i <= 10; i ++) {
	Skaicius.push(i)
}

let masyvas = Skaicius.join('-')
console.log(masyvas)

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

console.log('')
console.log('7 uzduotis')

let a = 1
let string1 = ''
for (let i = 0; i < a; i++) {
	{
		string1 += '*'
	}
}

let b = 2
let string2 = ''
for (let i = 0; i < b; i++) {
	{
		string2 += '*'
	}
}

let c = 3
let string3 = ''
for (let i = 0; i < c; i++) {
	{
		string3 += '*'
	}
}

let d = 4
let string4 = ''
for (let i = 0; i < d; i++) {
	{
		string4 += '*'
	}
}

let e = 5
let string5 = ''
for (let i = 0; i < e; i++) {
	{
		string5 += '*'
	}
}

console.log(`${string1}\n${string2}\n${string3}\n${string4}\n${string5}`)



/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

console.log('')
console.log('8 uzduotis') 

let dabar = new Date(Date.now())
let Kaledos = new Date(dabar.getFullYear(), 11, 25)
let dienuSkirtumas = Kaledos - dabar
let likoDienu =  Math.floor(dienuSkirtumas / 1000 / 60 / 60 / 24)

console.log(`Iki Kalėdų liko ${likoDienu} dienos(-ų)!!!`)

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

console.log('')
console.log('9 uzduotis')

//1 variantas (duomenys jau masyve)

let vardai1 = ['Tomas', 'Dainius', 'Paulius', 'Jonas']

console.log(vardai1.join(','))

//2 variantas (masyvas tuščias. Duomenys įkelti per 'push' funkciją. Tiesiog parodyti, kad aš tai suprantu) :)

let vardai2 = []
vardai2.push('Tomas', 'Dainius', 'Paulius', 'Jonas')
console.log(vardai2.join('+'))




/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

console.log('')
console.log('10 uzduotis')

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let number = '0123456789'
let symbol = '@#$%^&*()_+~|}{><[]-='

let allChars = upperCase + lowerCase + number + symbol

function passwordGeneration() {
	let passwordLength = 12
	let password = ''

	for (let i = 0; i < passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * allChars.length)

		password += allChars[randomNumber]
	}
	return password
}

console.log('Jūsų slaptažodis: ' + passwordGeneration())





















