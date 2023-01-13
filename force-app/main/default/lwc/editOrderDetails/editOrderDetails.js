import { LightningElement,api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

import NAME_FIELD from '@salesforce/schema/Order.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Order.AccountId';
import STARTDATE_FIELD from '@salesforce/schema/Order.EffectiveDate';
import STATUS_FIELD from '@salesforce/schema/Order.Status';
import CONTRACTnO_FIELD from '@salesforce/schema/Order.ContractId';

export default class EditOrderDetails extends NavigationMixin(LightningElement) {

    // objectApiName is "Order" when this component is called
    @api objectApiName;
    @api recordId;
    // Expose field to make it available in the template
    fields = [NAME_FIELD, ACCOUNT_FIELD, STARTDATE_FIELD, STATUS_FIELD,CONTRACTnO_FIELD];
    closeModal() {
        // Navigation to Order record
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Order',
                actionName: 'view'
            },
        });
    }
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: 'Message',
            message: 'The order '+this.recordId+' has been updated successfully.',
            variant: 'success',
        });
        this.dispatchEvent(evt);
        // Navigation to Order record
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Order',
                actionName: 'view'
            },
        });
    }
}