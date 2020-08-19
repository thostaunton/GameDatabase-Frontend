import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './pie-chart';
import { BarChartComponent } from './bar-chart';
import { TableComponent } from './table';
import { AddGameComponent } from './add-game';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
    { path: 'pie-chart', component: PieChartComponent },
    { path: 'bar-chart', component: BarChartComponent },
    { path: 'table', component: TableComponent },
    { path: 'data-table', component: DataTableComponent },
    { path: 'add-game', component: AddGameComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
