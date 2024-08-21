import ITelefone from "./ITelefone";

interface IUsuario {
    id: number,
    ip: string,
    nome: string,
    cpf: string,
    telefone: ITelefone,
    dataCadastro: string,       
    dataNascimento: string,     
    dataUltimaAlteracao: string,
    email: string,
    emails: string,
    enderecos: string,
    estadoCivil: string,
    observacao: string,
    rg: number,
    sexo: string,
    status: boolean,
    tipoPessoa: string,
}

export default IUsuario;