import { Component, Input } from '@angular/core';
import { dadosExperiencias } from 'src/app/models/dadosExperiencia.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() dadosExperiencias?:dadosExperiencias;
  encaminhaParaLink(){
    window.open(this.dadosExperiencias?.link);
  }
}
