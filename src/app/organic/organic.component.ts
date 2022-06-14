import { PeopleServiceService } from '../people-service.service';
import { faShoppingBasket,faShuffle ,faPlay,faEye} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-organic',
  templateUrl: './organic.component.html',
  styleUrls: ['./organic.component.scss']
})
export class OrganicComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  faShuffle = faShuffle;
  faPlay = faPlay;
  faEye = faEye;

  organicProducts$: any;

  constructor(private peopleService: PeopleServiceService) { }

  ngOnInit(): void {
    this.fetchOrganic()
  }
  fetchOrganic(): void {
    this.peopleService.fetchOrganic().subscribe(
      (response) => this.organicProducts$ = response
     
    );
    console.log(this.organicProducts$)
  }

}
