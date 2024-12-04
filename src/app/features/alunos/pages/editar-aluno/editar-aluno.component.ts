import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
})
export class EditarAlunoComponent implements OnInit {
  alunoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.alunosService.getAlunoById(id).subscribe((aluno) => {
        this.alunoForm = this.fb.group({
          matricula: [{ value: aluno.matricula, disabled: true }, Validators.required],
          nome: [aluno.nome, [Validators.required, Validators.minLength(3)]],
          dataNascimento: [aluno.dataNascimento, Validators.required],
        });
      });
    }
  }

  onSubmit(): void {
    if (this.alunoForm.valid) {
      const alunoAtualizado = {
        ...this.alunoForm.value,
        matricula: this.alunoForm.get('matricula')?.value, // Reativa o campo desativado
      };
      this.alunosService.updateAluno(alunoAtualizado).subscribe(() => {
        alert('Aluno atualizado com sucesso!');
        this.router.navigate(['/alunos']);
      });
    }
  }
}
