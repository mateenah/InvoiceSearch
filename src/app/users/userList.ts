export interface IUserList {
    invoiceId: number,
    sender: {
        name: string,
        street: string,
        city: string,
        postalcode: string
    },
    receiver:
    {
        name: string,
        street: string,
        city: string,
        postalcode: string
    },
    invoiceDate: string,
    payBy: string,
    lines: [
        {
            qty: number,
            description: string,
            vat: number,
            price: number
        }
    ],
    totalPrice: number,
    account: string
}
