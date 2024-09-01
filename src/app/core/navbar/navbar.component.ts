import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  translate: TranslateService = inject(TranslateService);
  isEnglish = false;

  translateText(lang: string) {
    this.translate.use(lang)
    if(lang == "en"){
      this.isEnglish = true;
    }
    else{
      this.isEnglish = false;
    }
  }
  translation(){
    if(this.isEnglish){
      this.translateText("es")
    }else {
      this.translateText("en")
    }
  }

}
