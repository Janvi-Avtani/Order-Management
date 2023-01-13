public with sharing class apexConnection {
    
    @AuraEnabled(cacheable=true)
    public static List<OrderItem> searchOrderWithName(String pName){
        String searchKey = '%'+pName+'%';
        return [select ProductNAme__c,Product_Code__c, Discount__c, Brand__c, Stock_Quantity__c from OrderItem where ProductNAme__c LIKE :searchKey];
    }
    @AuraEnabled(cacheable=true)
    public static List<OrderItem> searchOrderWithBrand(String brand){
        String searchKey = '%'+brand+'%';
        return [select 	ProductNAme__c,Product_Code__c, Discount__c, Brand__c, Stock_Quantity__c from OrderItem where Brand__c LIKE :searchKey];
    }
    @AuraEnabled(cacheable=true)
    public static List<OrderItem> searchOrderWithMRP(Integer MRP){
       
        return [select 	ProductNAme__c,Product_Code__c, Discount__c, Brand__c, Stock_Quantity__c from OrderItem where UnitPrice =:MRP];
    }
}
