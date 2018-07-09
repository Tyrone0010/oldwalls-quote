import { createSelector } from 'reselect';

const wizardStepIndex =  (state:any, props:any) =>{
    return  state.wizard.wizardStep || 0;
}

const customers = (state:any, props:any) =>{
    return state.quote.customers || [];
}

const customerCount = (state:any, props:any) =>{
    if(state.quote.customers){
        return state.quote.customers.length;
    }else{
        return 0;
    }
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