import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JSendResponse } from './jsend.interface';

@Injectable()
export class JSendInterceptor<T> implements NestInterceptor<T, JSendResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<JSendResponse<T>> {
    return next.handle().pipe(
      map(data => ({
        status: 'success',
        data
      }))
    );
  }
}