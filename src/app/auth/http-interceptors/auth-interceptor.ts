import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private accountService : AuthService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.accountService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if(token){
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }
        return next.handle(request).pipe(
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse){
        if (error.error instanceof ErrorEvent) {
            console.error('Ocorreu um erro: ', error.error.message)
        }
        else{
            console.error('Código erro: ', error.status, `Error: ${JSON.stringify(error.error)}`)
        }
        return throwError('Ocorreu um erro, tente novamente!')
    }

    

}