export interface Projecao {
  saldoDevedor: number;
  juros: number;
  saldoDevedorAjustado: number;
  valorParcela: number;
  vencimento: Date;
}

export interface UserDTO {
  id: string;
  cpf: string;
  uf: string;
  nascimento: string;
  vlEmprestimo: number;
  vlAPagarMes: number;
  projecao: Projecao[];
  created_at: Date;
}

export interface UserInputDTO {
  id: string;
  cpf: string;
  uf: string;
  nascimento: string;
  vlEmprestimo: string;
  vlAPagarMes: string;
}
