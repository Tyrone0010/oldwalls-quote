import { createSelector } from 'reselect';

const wizardStepIndex =  (state:any, props:any) =>{
    return  state.wizard.wizardStep || 0;
}

const customers = (state:any, props:any) =>{
    return state.quote.customers || [];
}

const customerCount = (state:any, props:any) =>{
    if(state.quote.customerCount){
        return state.quote.customerCount;
    }else{
        return 0;
    }
}

const quoteSummary = (state:any, props:any) => {
    return state.quoteForm.quoteSummary;
}

export const makeGetWizardStepIndex= () => {
    return createSelector(
        [wizardStepIndex],
        (index) => {
            return  index;
        }
    )
}

export const makeGetCustomers= () => {
    return createSelector(
        [customers, customerCount],
        (customers:any, customerCount: number) => {
            return  {
                customers: customers,
                customerCount: customerCount
            };
        }
    )
}

export const makeGetCustomerCount= () => {
    return createSelector(
        [customerCount],
        (customerCount: number) => {
            return  customerCount;
        }
    )
}

export const makeGetQuoteSummary= () => {
    return createSelector(
        [quoteSummary],
        (quoteSummary: any) => {
            return  quoteSummary;
        }
    )
}