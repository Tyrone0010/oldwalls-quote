import {schema} from 'normalizr';

export const staffMember = new schema.Entity('staffMember');
export const customer = new schema.Entity('customer');
export const quotation = new schema.Entity('quotation', {
    staffMember: staffMember,
    customers: [customer]
});
export const quotes = new schema.Entity('quotes');
export const quote = new schema.Entity('quote');
export const menuItems = new schema.Entity('menuItems');
export const menuSections = new schema.Entity('menuSections');
export const menus = new schema.Entity('menus');
export const venue = new schema.Entity('venue');
export const venues = new schema.Array({venues: venue})