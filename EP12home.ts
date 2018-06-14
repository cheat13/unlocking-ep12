import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public chocCake: Product;
  public pannaCotta: Product;
  public cheesecake: Product;
  public crepeCake: Product;
  public hotCoffee: Product;
  public iceCoffee: Product;

  public MyCart: Cart;

  constructor(public navCtrl: NavController) {
    this.ResetMyCart();

    this.chocCake = 
    {
      Name: "Chocolate cake",
      Price: 10,
      IsChecked: false,
      Image: "../../assets/imgs/chocolate cake.png",
    }
    this.pannaCotta = 
    {
      Name: "Panna cotta",
      Price: 20,
      IsChecked: false,
      Image: "../../assets/imgs/panna cotta.png",
    }
    this.cheesecake = 
    {
      Name: "Cheesecake",
      Price: 30,
      IsChecked: false,
      Image: "../../assets/imgs/cheesecake.png",
    }
    this.crepeCake = 
    {
      Name: "Crepe cake",
      Price: 40,
      IsChecked: false,
      Image: "../../assets/imgs/crepe cake.png",
    }
    this.hotCoffee = 
    {
      Name: "Hot coffee",
      Price: 50,
      IsChecked: false,
      Image: "../../assets/imgs/hot coffee.png",
    }
    this.iceCoffee = 
    {
      Name: "Ice coffee",
      Price: 60,
      IsChecked: false,
      Image: "../../assets/imgs/ice coffee.png",
    } 
  }

  History(){
    this.navCtrl.push(HistoryPage);
  }

  Payment(){
    this.navCtrl.push(PaymentPage, { CheckoutPrice: this.MyCart.TotalAmount });
  }

  ResetMyCart()
  {
    this.MyCart = 
    {
      ItemCount: 0,
      TotalAmount: 0,
    } 
  }

  SelectItem()
  {
    //รีเซ็ตตะกร้า
    this.ResetMyCart();

    if(this.chocCake.IsChecked)
    {
      this.MyCart.ItemCount = this.MyCart.ItemCount + 1;
      this.MyCart.TotalAmount = this.MyCart.TotalAmount + this.chocCake.Price;
    }
    if(this.pannaCotta.IsChecked)
    {
      this.MyCart.ItemCount = this.MyCart.ItemCount + 1;
      this.MyCart.TotalAmount = this.MyCart.TotalAmount + this.pannaCotta.Price;
    }     
    if(this.cheesecake.IsChecked)
    {
      this.MyCart.ItemCount = this.MyCart.ItemCount + 1;
      this.MyCart.TotalAmount = this.MyCart.TotalAmount + this.cheesecake.Price;
    }     
    if(this.crepeCake.IsChecked)
    {
      this.MyCart.ItemCount = this.MyCart.ItemCount + 1;
      this.MyCart.TotalAmount = this.MyCart.TotalAmount + this.crepeCake.Price;
    }     
    if(this.hotCoffee.IsChecked)
    {
      this.MyCart.ItemCount = this.MyCart.ItemCount + 1;
      this.MyCart.TotalAmount = this.MyCart.TotalAmount + this.hotCoffee.Price;
    }     
    if(this.iceCoffee.IsChecked)
    {
      this.MyCart.ItemCount = this.MyCart.ItemCount + 1;
      this.MyCart.TotalAmount = this.MyCart.TotalAmount + this.iceCoffee.Price;
    } 
  }
}

class Cart
{
  ItemCount: number;
  TotalAmount: number;
}

class Product
{
  Name: string;
  IsChecked: boolean;
  Image: string;
  Price: number;
}
