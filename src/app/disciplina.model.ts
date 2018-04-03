import {isBoolean} from 'util';

export class Disciplina {
    codigo: number;
    nome: string;
    professor:string;
    descricao: string;
    data: Date;
    ativa: Boolean;
    tipo: string;
    periodo: string;
    constructor(codigo: number,nome: string,professor: string, descricao: string, data?: Date, ativa?:boolean,tipo?: string,periodo? : string) {
      this.codigo = codigo;
      this.nome = nome;
      this.professor = professor;
      this.descricao = descricao;
      this.data = data;
      this.ativa = ativa;
      this.tipo = tipo;
      this.periodo = periodo;
    }
  }
