import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseCRUDService {
  private dbPath = '';

  constructor(private db: AngularFireDatabase) {}

  withPath(path: string) {
    this.dbPath = path;
    return this;
  }

  createItem(item: any): void {
    this.db.list(this.dbPath).push(item);
  }

  getItems(): Observable<any[]> {
    return this.db.list(this.dbPath).snapshotChanges();
  }

  updateItem(key: string, value: any): Promise<void> {
    return this.db.list(this.dbPath).update(key, value);
  }

  deleteItem(key: string): Promise<void> {
    return this.db.list(this.dbPath).remove(key);
  }
  
  deleteAll(): Promise<void> {
    return this.db.list(this.dbPath).remove();
  }
}
