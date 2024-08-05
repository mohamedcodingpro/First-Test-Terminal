// mostProfitableDepartment.js
// export function mostProfitableDepartment(salesData) {
//     const departmentSales = salesData.reduce((acc, sale) => {
//         const { department, sales } = sale;
//         if (!acc[department]) {
//             acc[department] = 0;
//         }
//         acc[department] += sales;
//         return acc;
//     }, {});

//     let maxSales = 0;
//      let profitableDepartment = '';

//     for (const department in departmentSales) {
//         if (departmentSales[department] > maxSales) {
//              maxSales = departmentSales[department];
//              profitableDepartment = department;
//         }
//     }

//     return profitableDepartment;
// }
