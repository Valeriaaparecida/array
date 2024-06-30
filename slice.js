/*const sala = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme','Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const sala1 = sala.slice(0, 10);
const sala2 = sala.slice(10);
console.log(sala1);
console.log(sala2);*/

//METODO SLICE SERVE PARA DIVIDIR O ARRAY A PARTIR DO INDICE QUE SE QUER DIVIDIR

const sala = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme','Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const sala1 = sala.slice(0, sala.length/2);
const sala2 = sala.slice(sala.length/2);
console.log(sala1);
console.log(sala2);