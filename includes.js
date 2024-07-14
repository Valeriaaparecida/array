const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {

         //const [alunos, medias] = lista;     nova sintaxe de desestruturação

        const indice = lista[0].indexOf(aluno); // const indice = alunos.indexOf(aluno);
        const mediaAluno = lista[1][indice];    //const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}