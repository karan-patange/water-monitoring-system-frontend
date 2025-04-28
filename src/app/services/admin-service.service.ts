import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl = 'http://localhost:9292/api/household';

  private getAllurl = 'http://localhost:9292/api/household/getAllHouseholds'

  constructor(private http: HttpClient, private router:Router) {}

  getAllHouseholds(): Observable<any[]> {

    return this.http.get<any[]>(this.getAllurl);
  }

  getHouseholdUsage(householdId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${householdId}/usage`);
  }

  private apiUrl = 'http://localhost:9292/api/household';
  
  getTotalUsage(householdId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total?householdId=${householdId}`);
  }
  


 




  deleteHousehold(id: number) {
    return this.http.delete(`http://localhost:9292/api/household/deletehousehold/${id}`, { responseType: 'text' });
  }

  private waterUsageUrl = 'http://localhost:9292/api/household/waterUsage';

  getUsageByHouseholdId(householdId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.waterUsageUrl}/household/${householdId}`);
  }
  

private getHouseholdByUsernameurl ='http://localhost:9292/api/household/getHouseholdByUsername'


  // getHouseholdByUsername(userName:String) : Observable<any> {
  //   return this.http.get<any>(`${this.getHouseholdByUsernameurl}/${userName}`);
  // }

  getHouseholdByUsername(userName: string) : Observable<any> {
    return this.http.get<any>(`${this.getHouseholdByUsernameurl}/${userName}`);
  }



  
loginWithRole(userName: string, passWord: string, role: string) {
  const params = {
    userName,
    passWord,
    role
  };
  return this.http.post('http://localhost:9292/api/household/loginwithrole', null, {
    params,
    responseType: 'text'
  });
}
logout() {
  localStorage.clear();
  this.router.navigate(['/login']).then(() => {
    window.location.reload(); // Force a hard reload to avoid cache
    console.log("usr loges out");
  });
}
}
