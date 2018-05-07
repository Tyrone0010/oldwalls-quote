import {schema} from 'normalizr';

export const staffMember = new schema.Entity('staffMember');
export const customer = new schema.Entity('customer');
export const quotation = new schema.Entity('quotation', {
    staffMember: staffMember,
    customers: [customer]
});
export const quotes = new schema.Entity('quotes');