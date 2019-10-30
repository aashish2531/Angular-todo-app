import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { todoData } from '../todoData'
import { ListService } from '../list.service'
import {CartService} from '../cart.service'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private listSrvs: ListService,private route: ActivatedRoute,
    private cartService: CartService) { }

  public ngOnInit(){
    this.showdata();
  }

  pageUsers : object;

  showdata(){
    this.listSrvs.getConfig()
    .subscribe((data) => {
        this.pageUsers = data;
    });
  }

  addToCart(product) {
   // window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  // addToCart(product) {
  //   // window.alert('Your product has been added to the cart!');
  //   // this.cartService.addToCart(product);
  //   this.cartService.addToCart(product).subscribe((val) => {
  //     alert("Successfully!");
  //     this.showdata();
  //   },
  // (error) => {
  //   console.log(error)
  //   alert("Internal Data Entry Error");
  // });
  // }

  deleteRow(id){
    this.listSrvs.deleteData(id).subscribe((val) => {
      alert("deleted");
      this.showdata();
    },
    (response) => {
      alert("not deleted")
    });
  }
}
