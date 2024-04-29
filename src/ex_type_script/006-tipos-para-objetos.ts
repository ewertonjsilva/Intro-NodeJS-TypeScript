function cadastrar(cliente: { nome: string, dataNascimento: Date}){
    console.log(cliente.nome);
    console.log(cliente.dataNascimento);
}

cadastrar({nome: 'Josivalno', dataNascimento: new Date('2001-5-19')});
