import { Component } from '@angular/core';
import {Disciplina} from './disciplina.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    info: string = null;
    selecionado = null;
    exibir= false;
    codigo: number = null;
    nome: string = null;
    professor:string = null;
    descricao: string = '';
    disciplinas = [
        new Disciplina(2525,'Lingua Portuguesa','David',
            'O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(25252,'Arte', 'Marcus','2O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'
        ),
        new Disciplina(263985,'Edutação Fisica', 'Xavier','3O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(2563978,'Matematica', 'João','4O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(22525,'Historia',
            'Pedro','656 objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(69969,'Geografia',
            'Madia','3432O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(6989595,'Ciencias', 'Fabiano','23432O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(87987,'Redação',
            'Fernando','32432O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(7427423,'Lingua Estrageira Moderna- Inglês',
            'Edina',' 32432O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.'),
        new Disciplina(98585,'Ensino Religioso',
            'Marla','3432O objetivo norteador da BNCC de Língua Portuguesa é ' +
            'garantir a todos os alunos o acesso aos saberes ' +
            'linguísticos necessários para a participação social e o exercício ' +
            'da cidadania, pois é por meio da língua que ' +
            'o ser humano pensa, comunica-se, tem acesso à informação, expressa ' +
            'e defende pontos de vista, partilha ou ' +
            'constrói visões de mundo e produz conhecimento.')
    ];

    selecionar(disciplina) {
        // console.log(disciplina);
        this.selecionado = disciplina;

    }

    salvar() {
        const d = new Disciplina(this.codigo,this.nome,this.professor, this.descricao);
        //console.log();
        this.disciplinas.push(d);
        this.codigo= null;
        this.nome = null;
        this.professor = null;
        this.descricao = null;
        this.oculta('oculta');
    }
  excluir(disciplina) {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
              + disciplina.nome + '"?')) {
          const i = this.disciplinas.indexOf(disciplina);
          this.disciplinas.splice(i, 1);
      }
  }
    editar(disciplina) {
        this.oculta('exibir');
        this.nome = disciplina.nome;
        this.descricao = disciplina.descricao;
        this.codigo = disciplina.codigo;
        this.professor = disciplina.professor;

    }
    cancel() {
        this.nome = null;
        this.descricao = null;
        this.codigo = null;
        this.professor = null;
        this.selecionado = null;
    }
   oculta(local:  any) {
        this.exibir = local ==='exibir' ? true : false;
    }
}
