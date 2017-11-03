import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

export interface IUserInfo {
    name: string;
    userId: string;
}

@Injectable()
export class UserInfoService {
    guessWhoUrl = 'http://guesswho/EmployeeData.ashx';
    private users: Observable<IUserInfo[]>;

    constructor (
        private _http: HttpClient
    ) { }

    public parseUserId (userId: string): string {
        if (!userId || userId === 'Autoplay') {
            return null;
        }

        return userId.replace('TRADEME\\', '');
    }

    public getUserFullName (userId: string): Observable<string> {
        if (!userId || userId === 'Autoplay') {
            return Observable.of(userId);
        }

        userId = this.parseUserId(userId);

        return this.getAllUsers().pipe(map(users => {
            const user = users.find(u => u.userId === userId);
            return user ? user.name : userId;
        }));
    }

    public getAllUsers (): Observable<IUserInfo[]> {
        return this.users || (this.users = this._http.get<IUserInfo[]>(this.guessWhoUrl));
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
