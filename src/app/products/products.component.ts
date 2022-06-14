import { Component, OnInit } from '@angular/core';
import { faShoppingBasket,faShuffle ,faPlay,faEye} from '@fortawesome/free-solid-svg-icons';
import { PeopleServiceService } from '../people-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  people$: any;
  faShoppingBasket = faShoppingBasket;
  faShuffle = faShuffle;
  faPlay = faPlay;
  faEye = faEye;

  constructor(private peopleService: PeopleServiceService) {}

  ngOnInit(): void {
    this.fetchPeople()
  }
  fetchPeople(): void {
    this.peopleService.fetchApi().subscribe(
      (response) => this.people$ = response
     
    );
    console.log(this.people$)
  }
}
