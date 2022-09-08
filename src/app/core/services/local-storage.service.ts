import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setPropertyToLocalStorage(itemName: string, itemValue: string): void {
    localStorage.setItem(itemName, itemValue);
  }

  deleteAllPropertiesFromLocalStorage() {
    localStorage.clear();
  }

  getProperty(propertyName: string) {
    return localStorage.getItem(propertyName);
  }
}
