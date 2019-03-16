namespace VarsWebApi.Models {
    /**ทราบปริมาณน้้า */
    export enum WaterQuantity {
        /**ทราบปริมาณน้้า  */
        CubicMeterPerMonth = 1,
        /**ไม่ทราบปริมาณน้้า แต่ทราบค่าน้้า  */
        WaterBill = 2,
        /**ไม่ทราบปริมาณน้้าและค่าน้้าเนื่องจากไม่มีมิเตอร์แยกจากส่วนกลาง  */
        UnknowNoMeter = 3,
        /**ไม่ทราบปริมาณน้้าและค่าน้้าเนื่องจากได้รับการยกเว้น    */
        UnknowExcepted = 4
    }

}

