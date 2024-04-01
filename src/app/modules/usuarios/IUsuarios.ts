export interface IUsuarios{
   
    nome: string;
    
    idCliente: number

    email: string;
    
    senha: string;
    
    tipoUsuario: number;
    
    cpf: string;
    
    rg: string;
    
    dataNascimento: Date | null;
    
    celular: string;
    
    endereço: string;
    
    cep: string;
    
    cidade: string;
    
    estado: string;
    
    statusConta: string;
}
