import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile$ = this.route.data.pipe(map((x: any) => x.profile));

  constructor(private route: ActivatedRoute, private api: ApiService) {
    console.log(this.route.snapshot.data);


    // this.route.data.subscribe({
    //   next: value => console.log(value)
    // })


    // this.router.paramMap.pipe(map(params => params.get('username')), switchMap(username => this.api.getProfile(username))).subscribe({
    //   next: value => console.log(value)
    // });
  }

  ngOnInit(): void {
  }

}
