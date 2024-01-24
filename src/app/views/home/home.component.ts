import { AfterViewInit, Component, OnInit } from '@angular/core';
import { dadosExperiencias } from 'src/app/models/dadosExperiencia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove('show');
        }
      })
    })
      
    cards.forEach((el) => observer.observe(el));
  }

  dadosExperiencias:dadosExperiencias[] = [
    { tecnologias:['VueJs', 'SQL Server', 'Dot Net Core', 'Bootstrap'], 
      link:'https://www.linkedin.com/posts/eduardo-vinicius-b1a4661b9_gostaria-de-compartilhar-que-estou-come%C3%A7ando-activity-7018303540146122752-FBBg?utm_source=share&utm_medium=member_desktop', urlImage:'../../../assets/imgs/tecnologias1.png', 
      descricao: 'Durante 7 meses trabalhei em um sistema onde fora usadas estas principais tecnologias, aqui eu aprendi sobre como APIS funcionam e todo o fluxo de um sistema complexo'}, 

    { tecnologias:['Angular', 'Node', 'Javascript', 'AWS'], 
      link:'https://ciamotos.com.br',  
      urlImage:'../../../assets/imgs/ciamotos.jpeg', 
      descricao: 'Site desenvolvido inteiramente por mim, onde seu principal objetivo é ser a vitrine virtual da CIA MOTOS, o sistema consiste em pequenos cruds, sistema de login, e contato com a loja. Durante os meses desenvolvendo aprendi o básico do Framework Angular, backend com Javascript e a usar os serviçoes EC2, API Gateway e S3 bucket da AWS'},
    
    { tecnologias:['PHP', 'Javascript', 'Heidi SQL', 'Html Css'], 
      link:'https://www.linkedin.com/posts/eduardo-vinicius-b1a4661b9_gostaria-de-compartilhar-que-estou-come%C3%A7ando-activity-6984157501818589184-kOek?utm_source=share&utm_medium=member_desktop',
      urlImage:'../../../assets/imgs/php.jpg', 
      descricao: 'Durante meu periodo como programador PHP e Javascript aprendi muito sobre lógica de programação, resolver problemas e bugs, relações em bancos de dados SQL e também minha base no Javascript e Jquery'
    }
  ]

}
