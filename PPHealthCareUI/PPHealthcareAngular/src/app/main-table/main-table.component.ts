import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModule } from '../Modules/RegisterModule';
import { MainService } from '../Services/main.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  
  displayedColumns: string[] = ['ID', 'Name', 'Activation_status', 'Date_of_Birth','Action'];
  dataSource: RegisterModule[]=[];
  EditModalData: RegisterModule | undefined;
  Activation_status_options: string[]=['true','false'];
  EditForm!: FormGroup;
  datebeforepipe!: Date;

  constructor(private fb: FormBuilder, private service: MainService,private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.EditForm = this.fb.group({
      id: ['',Validators.required],
      name: ['', [Validators.required]] ,
      activation_status: ['',[Validators.required]],
      date_of_birth: ['',[Validators.required]]   
    });

    this.service.GetAllUser().subscribe((list:any)=>{ 
      this.dataSource=list;
      console.log(this.dataSource); 
    });
  }

  OnDelete(id:number){
    this.service.DeleteUser(id).subscribe((data)=>{
      if(data){
        this.dataSource.filter((num : any)=>{
          return num!==id;
        });
      }
      this.ngOnInit();  
    });
    
    console.log(id);
  }

  OpenEditModal(user: RegisterModule){
    this.EditModalData=user;
    this.EditForm.get('id')?.setValue(user.id);
    this.EditForm.get('name')?.setValue(user.name);
    this.EditForm.get('activation_status')?.setValue(user.activation_status);
    this.datebeforepipe=user.birth_date;
    
    this.EditForm.get('date_of_birth')?.setValue(this.datepipe.transform(user.birth_date,'mediumDate'));
    
    
  }
  
  OnSubmit(button: HTMLButtonElement ){
    const user: RegisterModule = { id: this.getValue('id') ,name: this.getValue('name'),  activation_status: this.getValue('activation_status'), birth_date: this.datebeforepipe};
   
     this.service.EditUser(user).subscribe(data => {
     
      button.click();
      this.ngOnInit();
    
 
     } );
    
    
  }

  getValue(name: string) {

    return this.EditForm.get(name)?.value;
  }

 
  

}
