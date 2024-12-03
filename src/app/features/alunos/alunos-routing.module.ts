import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunosComponent } from './pages/listar-alunos/listar-alunos.component';
import { IncluirAlunoComponent } from './pages/incluir-aluno/incluir-aluno.component';
import { EditarAlunoComponent } from './pages/editar-aluno/editar-aluno.component';
import { VisualizarAlunoComponent } from './pages/visualizar-aluno/visualizar-aluno.component';

const routes: Routes = [
  { path: '', component: ListarAlunosComponent },
  { path: 'novo', component: IncluirAlunoComponent },
  { path: 'editar/:id', component: EditarAlunoComponent },
  { path: 'visualizar/:id', component: VisualizarAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
