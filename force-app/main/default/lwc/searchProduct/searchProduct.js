import { LightningElement, wire } from 'lwc';
import findProductName from '@salesforce/apex/apexConnection.searchOrderWithName';
import findProductBrand from '@salesforce/apex/apexConnection.searchOrderWithBrand';
import findProductMRP from '@salesforce/apex/apexConnection.searchOrderWithMRP';
import { NavigationMixin } from 'lightning/navigation';

const cols=[
    {
        label:"Product Name",
        fieldName:"ProductNAme__c",
        type:"text"
    },
    {
        label:"Product Code",
        fieldName:"Product_Code__c",
        type:"text"
    },
    {
        label:"Discount",
        fieldName:"Discount__c",
        type:"number"
    },
    {
        label:"Brand",
        fieldName:"Brand__c",
        type:"text"
    },
    {
        label:"Stock Quantity",
        fieldName:"Stock_Quantity__c",
        type:"number"
    },
    { type: "button", typeAttributes: {  
        label: 'Edit Product',  
        disabled: false,  
        iconPosition: 'centre'  
    } }
   
];
export default class SearchProduct extends NavigationMixin(LightningElement) {

   

    columns=cols;
    productDataName;
    productDataBrand;
    productDataMRP;
    productError;
    key;
    

    handleInputProductName(event){

        this.key=event.target.value;
        this.fetctProductNameInfo();
    }
    fetctProductNameInfo(){
        findProductName({pName : this.key})
        .then( data =>{
            this.productDataName=data;
        })
        .catch(error =>{
            this.productError=error;
        })
    }
    handleInputBrand(event){

        this.key=event.target.value;
        this.fetctProductBrandInfo();
    }
    fetctProductBrandInfo(){
        findProductBrand({brand : this.key})
        .then( data =>{
            this.productDataBrand=data;
            console.table(Discount__c);
        })
        .catch(error =>{
            this.productError=error;
        })
    }
    handleInputProductMRP(event){

        this.key=event.target.value;
        this.fetctProductMRPInfo();
    }
    fetctProductMRPInfo(){
        findProductMRP({MRP : this.key})
        .then( data =>{
            this.productDataMRP=data;
        })
        .catch(error =>{
            this.productError=error;
        })
    }
    callRowAction( event ) {  
          
        const recId =  event.detail.row.Id;    
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'OrderItem',  
                    actionName: 'edit'  
                }  
            })  
  
    }

    


}
