const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];
const tamanhoNome = alunos.filter((aluno) =>{
    return aluno.length < 4;             
});

console.log(tamanhoNome);