namespace VarsWebApi.Models {
    /**ในรอบ 1 ปีที่ผ่านมา ใช้น้้าปริมาณเท่าไร ต่อเดือนโดยเฉลี่ย */
    export enum GroundWaterQuantity {
        /**ทราบปริมาณน้้า  */
        CubicMeterPerMonth = 1,
        /**ไม่ทราบปริมาณน้้าแต่ทราบค่าน้้า  */
        WaterBill = 2,
        /**ไม่ทราบ */
        Unknown = 3
    }
}