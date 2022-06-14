import { Component, HostListener, OnInit } from '@angular/core';
import {
  faShuffle,
  faShoppingBasket,
  faHeart,
  faFlag,
  faFilterCircleDollar,
  faLeaf,
  faAppleWhole,
  faTruck,
  faArrowsRotate,
  faHeadset,
  faLock,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}
  navBarFixed: boolean = false;
  @HostListener('window:scroll',['$event'])onScroll(){
    if(window.scrollY> 100)
      {this.navBarFixed = true}
    else  
      {this.navBarFixed = false}
     
    // window.scrollY > 100 ? this.navBarFixed = true : this.navBarFixed = false
  }
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  public now: any = new Date();
  public Day: any = this.now.getDate();
  public Hours: any = this.now.getHours();
  public Minutes: any = this.now.getMinutes();

  constructor() {
    setInterval(() => {
      this.now = new Date().getSeconds();
    }, 1);
  }
  faShuffle = faShuffle;
  faHeart = faHeart;
  faShoppingBasket = faShoppingBasket;
  faFlag = faFlag;
  faFilterCircleDollar = faFilterCircleDollar;
  faLeaf = faLeaf;
  faAppleWhole = faAppleWhole;
  faTruck = faTruck;
  faArrowsRotate = faArrowsRotate;
  faHeadset = faHeadset;
  faLock = faLock;
  faEye = faEye;

  ngOnInit(): void {}
}
