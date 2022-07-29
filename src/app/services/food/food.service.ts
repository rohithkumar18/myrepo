import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[] {
    return tag== "All" ?
    this.getAll() : this.getAll().filter(food => food.tags?.
      includes(tag));
  }
  getAllTag():Tag[]{
    return [
      { name: 'All', count: 8},
      { name: 'FastFood', count: 3},
      { name: 'Pizza', count: 1},
      { name: 'Lunch', count: 2},
      { name: 'Trending', count: 4},
      { name: 'Burger', count: 1},
      { name: 'Fry', count: 0},
      { name: 'Soup', count: 0}
    ];

  } 

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'FrenchFries',
        price: 10,
        CookTime:'10-15',
        favorite:true,
        origins:['Belgium'],
        star:4,
        imageUrl: '/assets/image1.jpg',
        tags: ['FastFood','yum-fries','Trending'],

      },
      {
        id: 2,
        name: 'Chapathi',
        price: 10,
        CookTime:'5-10',
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl: '/assets/image2.jpg',
        tags:['chapathi','western','Lunch'],

      },
      {
        id: 3,
        name: 'Biriyani',
        price: 25,
        CookTime:'20-30',
        favorite:true,
        origins:['India'],
        star:5,
        imageUrl: '/assets/image3.jpg',
        tags:['Fast-biriyani','egg','Trending','Lunch'],

      },
      {
        id: 4,
        name: 'idli',
        price: 10,
        CookTime:'10-15',
        favorite:false,
        origins:['India'],
        star:5,
        imageUrl: '/assets/image4.jpg',
        tags:['favorites','2-mins'],

      },
      {
        id: 5,
        name: 'Pepperoni pizza',
        price: 20,
        CookTime:'15-20',
        favorite:true,
        origins:['Italy'],
        star:5,
        imageUrl: '/assets/image5.jpg',
        tags:['FastFood','Pizza','Trending'],

      },
      {
        id: 6,
        name: 'Burger',
        price: 10,
        CookTime:'5-10',
        favorite:false,
        origins:['Germany'],
        star:3,
        imageUrl: '/assets/image6.jpg',
        tags:['FastFood','Burger','Trending'],

      },
      {
        id: 7,
        name: 'Veg panner',
        price: 25,
        CookTime:'15-20',
        favorite:false,
        origins:['india'],
        star:4,
        imageUrl: '/assets/image7.jpg',
        tags:['healthy','paneer-masala','Trending in veg'],

      },
      {
        id: 8,
        name: 'Masala dosa',
        price: 15,
        CookTime:'10-15',
        favorite:true,
        origins:['india'],
        star:4,
        imageUrl: '/assets/image8.jpg',
        tags:['indian','favorite'],

      }

    ]
  }
}
