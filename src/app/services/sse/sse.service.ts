import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  constructor(private _zone: NgZone) {}

  private _isConnectionActive: boolean = false;
  private _reconnectAttemptsLeft = 10; //number times it will attempts to re-establish connection
  getServerSentEvent(url: string) {
    console.log('Establishing connection with url' + url);
    return Observable.create(observer => {
      while (
        this._reconnectAttemptsLeft > 0 &&
        this._isConnectionActive != true
      ) {
        //debugger;
        this._isConnectionActive = true;
        const eventSource = new EventSource(url);

        eventSource.onopen = () => {
          console.log('isConnectionActive =' + this._isConnectionActive);
          this._reconnectAttemptsLeft = 10; //reset attempts
        };

        eventSource.onmessage = event => {
          this._zone.run(() => {
            observer.next(event);
          });
        };

        eventSource.onerror = error => {
          console.log(this._reconnectAttemptsLeft);
          this._reconnectAttemptsLeft -= 1;
          console.log('Connection error');
          if (this._reconnectAttemptsLeft > 0) {
            console.log(
              'Reconnecting.. attempts left =',
              this._reconnectAttemptsLeft
            );
          } else {
            observer.error(error);
            eventSource.close();
          }

          this._zone.run(() => {
            //
          });
        };
      }
    });
  }

  private _connect(observer) {}
}
