import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProfile } from "src/interfaces/profile.model";
import { Observable } from "rxjs";

@Injectable()
export class SignupService {
    private baseUrl = "https://05e9b651-176c-4bc8-94c8-3e22377450f3.mock.pstmn.io/";

    constructor(private svc: HttpClient) { }

    saveProfileData(data: IProfile): Observable<any> {
        return this.svc.post<string>(this.baseUrl + `save-profile`, data);
    }
}