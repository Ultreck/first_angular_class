import { Component } from '@angular/core';
import { faEdit, faPen, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


type bdgArr = (string | number)
interface Items {
  items:string,
  quantities:number,
  price:number,
}
@Component({
  selector: 'app-budget-app',
  templateUrl: './budget-app.component.html',
  styleUrls: ['./budget-app.component.css']
})
export class BudgetAppComponent {
  deleteIcon = faDeleteLeft;
  editIcon = faEdit;
  public capital:number = 0;
  public changeCap:any;
  public btnchangeCap = "text-white bg-green-500 px-6 py-1 mx-4";
  public addCap:number = 0;
  public balance:number = 0;
  public spent:number = 0;
  public items:string = "";
  public quantities:any;
  public price:any;
  public noCapitalErr = 'invisible text grid';
  public invalidPrice = 'hidden text grid';
  public invalidPriceText = 'Invalid Price! Total cost of the item is higher than the balance.';
  public btnDisable = 'text bg-blue-600 hover:bg-blue-700 text-white py-2 font-bold';
  public saveChangesBtn = 'hidden';
  public btnfctles = ' hidden';
  public budgetObj = {}
  public budgetArray: Items[] = []
  public calcu : number = 0;
  public editIndex:any;
  public editedObj:any;

    ngOnInit(){
      if(!localStorage.getItem("capital")){
        localStorage.setItem("capital", JSON.stringify(prompt("Please enter your capital")))
      }

      if(JSON.parse(localStorage["capital"]) === "" || JSON.parse(localStorage["capital"]) === null){
        this.noCapitalErr = "grid text-red-500 "
        this.btnDisable = "invisible "
        this.btnchangeCap = "invisible"
        this.btnfctles = "flex text-center pl-32 bg-blue-300 text-white py-2 font-bold "
        this.capital = 0;
        this.balance = 0;
      }
      if(!localStorage.getItem("BudgetData")){
        localStorage.setItem("BudgetData", JSON.stringify(this.budgetArray))
      }

      
      if(!localStorage.getItem("balance")){
        this.balance = JSON.parse(localStorage["capital"]);
        localStorage.setItem("balance", JSON.stringify(this.balance))
      }
      
      if(localStorage.getItem("BudgetData")){
        this.budgetArray = JSON.parse(localStorage["BudgetData"]) 
      }

      if(localStorage.getItem("capital")){
        this.capital = JSON.parse(localStorage["capital"])
      }

      if(localStorage.getItem("balance")){
        this.balance = JSON.parse(localStorage["balance"])
      }
      

      if(JSON.parse(localStorage["capital"]) !== "" && JSON.parse(localStorage["balance"]) !== "") {
        this.spent = JSON.parse(localStorage["capital"]) -  JSON.parse(localStorage["balance"]);
      }
      else{
        this.spent = 0;
      }
    }
    
    


    addBudget(){
      let {items, price, quantities} = this;
      
      if(this.price * this.quantities > this.balance){
        this.invalidPrice = "flex"
        this.invalidPriceText =   " Invalid Price!  Cost of the item is higher than the balance.";
      }
      else if(this,price * this.quantities === 0){
        this.invalidPrice = "flex"
        this.invalidPriceText =   " Invalid Price! Provide non-zero value for both price and quantity.";
        
      }
      else{
        this.budgetArray.push({items, price, quantities})
        localStorage.setItem("BudgetData", JSON.stringify(this.budgetArray))
        this.balance = JSON.parse(localStorage["balance"]) - (this.price * this.quantities);
        localStorage.setItem("balance", JSON.stringify(this.balance));
            }

      if(JSON.parse(localStorage["capital"]) !== "" && JSON.parse(localStorage["balance"]) !== "") {
        this.spent = JSON.parse(localStorage["capital"]) -  (JSON.parse(localStorage["balance"]));
      }
      else{
        this.spent = 0;
      }
      this.items = "";
      this.quantities = '';
      this.price = '';
      // location.reload();
    }


    handleDelete(data:any, e:any){
      this.budgetArray.splice(e, 1)
      localStorage.setItem("BudgetData", JSON.stringify(this.budgetArray));
      this.balance = this.balance + (data.price * data.quantities);
      this.spent = this.spent -  (data.price * data.quantities);
      localStorage.setItem("balance", JSON.stringify(this.balance))
}


handleEdit(data:any, e:any){
  // console.log(data, e);
  this.editIndex = e;
  this.items = data.items;
  this.price = data.price;
  this.quantities = data.quantities;
  this.btnDisable = "hidden";
  this.saveChangesBtn = "text bg-green-600 hover:bg-green-700 text-white py-2 font-bold";
  this.balance = this.balance + (data.price * data.quantities);
  this.spent = this.spent -  (data.price * data.quantities);
  localStorage.setItem("balance", JSON.stringify(this.balance))
  
}
saveChanges(){
  console.log(this.editIndex);
   this.editedObj = {items:this.items, price:this.price, quantities:this.quantities};
  this.budgetArray[this.editIndex] = this.editedObj;
  localStorage.setItem("BudgetData", JSON.stringify(this.budgetArray));
  this.btnDisable = "text bg-blue-600 hover:bg-blue-700 text-white py-2 font-bold";
  this.saveChangesBtn = "hidden";
  this.balance = JSON.parse(localStorage["balance"]) - (this.price * this.quantities);
  localStorage.setItem("balance", JSON.stringify(this.balance));
      if(JSON.parse(localStorage["capital"]) !== "" && JSON.parse(localStorage["balance"]) !== "") {
        this.spent = JSON.parse(localStorage["capital"]) -  (JSON.parse(localStorage["balance"]));
      }
      else{
        this.spent = 0;
      }
  this.items = "";
  this.quantities = '';
  this.price = '';
  
}


handleChangeCap(){
  this.changeCap = prompt("Change Your Capital");
  localStorage.setItem("capital", JSON.parse( this.changeCap));
  this.capital = JSON.parse(localStorage["capital"]);
  this.balance = JSON.parse(localStorage["capital"]);
  localStorage.setItem("balance", JSON.stringify(this.balance));
  this.noCapitalErr = "invisible text grid ";
  this.btnDisable = "'text bg-blue-600 hover:bg-blue-700 text-white py-2 font-bold ";
  this.btnfctles = "hidden ";
  
}

handleAddCap(){
  this.addCap =Number(prompt("Set Your Capital")) ;
  this.capital = JSON.parse(localStorage["capital"]) + this.addCap;
  localStorage.setItem("capital", JSON.stringify(this.capital));
  this.balance = JSON.parse(localStorage["capital"]);
  localStorage.setItem("balance", JSON.stringify(this.balance));
  this.btnchangeCap = "text-white bg-green-500 px-6 py-1 mx-4";
  this.noCapitalErr = "invisible text grid ";
  this.btnDisable = "'text bg-blue-600 hover:bg-blue-700 text-white py-2 font-bold ";
  this.btnfctles = "hidden ";
}


}
