import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient,private authService:AuthService,private router:Router,private alertCtrl:AlertController) { this.getCovidData() }
  covidGlobal: any;

  getCovidData(){
    this.http.get('https://api.covid19api.com/summary')
      .subscribe(data => {
        console.log(data["Global"]);

        this.covidGlobal = data["Global"];
      })
  }

    async logOut():Promise<void>{
      this.authService.logOutUser().then(
        ()=>{
          this.router.navigateByUrl('login');
        },
        async error => {
          const alert = await this.alertCtrl.create({
            message:error.message,
            buttons:[{text:'ok',role:'cancel'}]
          });
          await alert.present();
        }
      );
    

  }
}
