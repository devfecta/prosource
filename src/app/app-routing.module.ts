import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
	{ path: '', component: HomeComponent }
	, { path: '**', component: ErrorComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(
			routes,
			{ useHash: false, enableTracing: false }
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
