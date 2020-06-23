import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any>{
  constructor(private api: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.getProfile(route.paramMap.get("username")).pipe(map((x: any) => x.profile));
    // this.router.paramMap.pipe(map(params => params.get('username')), switchMap(username => this.api.getProfile(username))).subscribe({
    //   next: value => console.log(value)
    // });

  }
}
