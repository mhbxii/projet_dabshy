import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  region: any = [
    'Tunis', 'Ben Arous', 'Manouba', 'Ariana', 'Kebili', 'Sfax', 'Gafsa', 
    'Nabeul', 'Bizerte', 'Jendouba', 'Kef', 'Béja', 'Kairouan', 'Kasserine', 
    'Sidi Bouzid', 'Tozeur', 'Tataouine', 'Medenine', 'Gabes', 'Sousse', 
    'Monastir', 'Mahdia', 'Zaghouan', 'Siliana'
  ];
  categories = [
    { type: 'Upper Wear', items: ['T-shirt', 'Blouse', 'Sweater'] },
    { type: 'Bottom Wear', items: ['Jeans', 'Shorts', 'Skirt'] },
    { type: 'Outerwear', items: ['Jacket', 'Coat', 'Hoodie'] },
    { type: 'Footwear', items: ['Sneakers', 'Boots', 'Sandals'] }
  ];
  
  applyFilter(){
    alert("filter clicked!");
  };
}
