import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../service/category.service';
import { Category } from '../modal/Modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categories: Category[];
  isLogin = false;
  footCategories :any;

  constructor(public dialog: MatDialog, private categoryService: CategoryService) {
    this.categoryService.findAllCategories().subscribe(categories => {
      this.categories = categories;
    })
    if(this.categories){
      //this.isLogin = true;
      this.footCategories = this.categoryService.findAllCategories();
    }
  }

  ngOnInit(): void {
  }
}
