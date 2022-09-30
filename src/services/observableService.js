import { Observable } from 'rxjs';

export const getNumbers = new Observable((subscriber) => {
    subscriber.next(1);  // emits 1
    subscriber.next(2);  // emits 2
    subscriber.next(3);  // emits 3
    setTimeout(() => {
      subscriber.next(4);  // emits 4
      subscriber.complete();  // Finally, the observable is completed and finishes
    }, 1000);  // wait 1 second before execute
});