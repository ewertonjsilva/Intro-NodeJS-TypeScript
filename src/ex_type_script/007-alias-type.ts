type Cliente = {
    nome: string,
    dataNascimento: Date
};

function cadastrarExType(cliente: Cliente) {
    console.log(cliente.nome);
    console.log(cliente.dataNascimento);
}

cadastrarExType({nome: 'Jainilza', dataNascimento: new Date('1999-07-30')});

