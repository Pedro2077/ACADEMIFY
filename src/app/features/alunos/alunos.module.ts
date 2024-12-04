import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AlunosRoutingModule } from './alunos-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ListarAlunosComponent } from './pages/listar-alunos/listar-alunos.component';
import { IncluirAlunoComponent } from './pages/incluir-aluno/incluir-aluno.component';
import { EditarAlunoComponent } from './pages/editar-aluno/editar-aluno.component';
import { VisualizarAlunoComponent } from './pages/visualizar-aluno/visualizar-aluno.component';

@NgModule({
  declarations: [
    ListarAlunosComponent,
    IncluirAlunoComponent,
    EditarAlunoComponent,
    VisualizarAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlunosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AlunosModule { }
