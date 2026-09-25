export interface Documento {
  id: number;
  nome: string;
  criador: string; //Trocar para id do usuario futuramente
  dataCriacao: Date;
  ativo: boolean;
  imageURL: string;
}
