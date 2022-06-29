import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { Category, User } from './modal/Modal';
import { CategoryService } from './service/category.service';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { ProfileComponent } from './profile/profile.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User = {} as User;
  categories: Category[];
  isLogin = false;
  welcomeUsername = "";

  constructor(public dialog: MatDialog, private userService: UserService, private categoryService: CategoryService) {
    this.userService.findByUsername(userService.getUsername()).subscribe(user => {
      this.user = user;
    })

    if(this.userService){
      this.isLogin = true;
      this.welcomeUsername = this.userService.getUsername();
    }

  }
  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  login() {
     this.dialog.open(LoginComponent);
  }
  register() {
    this.dialog.open(RegisterComponent);
 }
}
