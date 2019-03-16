namespace VarsWebApi.Models {
    export interface RecordControlLog {
        At: Date | string;
        /**เดี๋ยวกำหนดอีกที เช่น เริ่มสำรวจ, หยุดชั่วคราว, ไปต่อ ไรงี้ */
        OperationCode: string;
    }
}

