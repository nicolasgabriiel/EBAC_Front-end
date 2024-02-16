const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 7.9 },
    { nome: "Pedro", nota: 5.2 },
    { nome: "Ana", nota: 6 },
    { nome: "Carlos", nota: 5.9 }
];

const alunosAprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6 
})

console.log(alunosAprovados)