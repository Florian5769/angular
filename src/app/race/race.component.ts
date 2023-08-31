import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'ns-race',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  Pony: Pony[] | undefined;

  constructor(private PonyService: PonyService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.PonyService.getPony()
    .subscribe(Pony => this.Pony = Pony);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.PonyService.addPony({ name } as Pony)
      .subscribe(Pony => {
        this.PonyService.push(Pony);
      });
  }

  delete(hero: Pony): void {
    this.PonyService = this.PonyService.filter(h => h !== hero);
    this.PonyService.deletePony(hero.id).subscribe();
  }

}
