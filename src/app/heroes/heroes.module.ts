import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HeroesRoutingModule } from './components/heroes/heroes-routing.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [CommonModule, FormsModule, MaterialModule, HeroesRoutingModule],
})
export class HeroesModule {}
