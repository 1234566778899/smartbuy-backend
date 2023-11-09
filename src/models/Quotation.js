const { Schema, model } = require('mongoose');

const QuotationSchema = Schema({
    cok: Number,
    comision: Number,
    currency: String,
    customer: { type: Schema.Types.ObjectId, ref: 'user' },
    car: {
        brand: String,
        model: String,
        price: Number,
        yearManufactured: Number,
        color: String,
        img: String,
        otherDetails: String,
    },
    fee: Number,
    initialDue: Number,
    finalDue: Number,
    frecuencyPay: Number,
    gastAdm: Number,
    insure: Number,
    loanAmount: Number,
    numDues: Number,
    portes: Number,
    risk: Number,
    daysYear: Number,
    totalInterest: Number,
    totalAmort: Number,
    totalSegDes: Number,
    totalRisk: Number,
    totalComi: Number,
    totalPortes: Number,
    tir: Number,
    tasaDes: Number,
    TCEA: Number,
    van: Number,
    initialCost: Number,
    flows: [
        {
            n: Number,
            tea: Number,
            tep: Number,
            pg: String,
            si: Number,
            i: Number,
            cuota: Number,
            a: Number,
            pp: Number,
            segDes: Number,
            segRis: Number,
            comision: Number,
            portes: Number,
            gastAdm: Number,
            sf: Number,
            flujo: Number,
        }
    ]
}, {
    timestamps: true
})

module.exports = model('quotation', QuotationSchema);