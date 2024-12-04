import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-excluir-aluno',
  templateUrl: './excluir-aluno.component.html',
})
export class ExcluirAlunoComponent implements OnInit {
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.alunosService.getAlunoById(id).subscribe((data) => {
        this.aluno = data;
      });
    }
  }

  onDelete(): void {
    if (this.aluno && this.aluno.id) {
      this.alunosService.deleteAluno(this.aluno.id).subscribe(() => {
        alert('Aluno excluído com sucesso!');
        this.router.navigate(['/alunos']);
      });
    }
  }
}
