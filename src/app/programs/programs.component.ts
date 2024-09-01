import { Component, inject } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
  translate: TranslateService = inject(TranslateService)
  getPrograms(){
    let programs: any[] = []
    this.translate.get("programs").subscribe((data: any) => {
      programs = data;
    })
    return programs;
  }


}
