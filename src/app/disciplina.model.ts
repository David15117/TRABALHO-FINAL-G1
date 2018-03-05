export class Disciplina {
    codigo: number;
    nome: string;
    professor:string;
    descricao: string;
    constructor(codigo: number,nome: string,professor: string, descricao: string) {
      this.codigo = codigo;
      this.nome = nome;
      this.professor = professor;
      this.descricao = descricao;
    }
  }
