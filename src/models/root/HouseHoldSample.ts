namespace VarsWebApi.Models {
    /**ครัวเรือน - หน่วยตัวอย่าง */
    export interface HouseHoldSample extends ModelBase {
        EA: string;
        BuildingId: string;

        /**ข้อมูลหน่วยย่อย บันทึกเมื่อ N > 1 */
        SubUnit: SubUnit;

        /**G1 - สถานที่นี้มีผู้อยู่อาศัยติดต่อกันนานเกิน 3 เดือนใช่หรือไม่  */
        IsHouseHold: boolean;
        /**G2 - ผู้ที่อาศัยอยู่ในสถานที่นี้มีพื้นที่ปลกูพืชเลี้ยงสัตว์หรือท้าการเกษตรเองใช่หรือไม่  */
        IsAgriculture: boolean;
        /**G3 - สถานที่นี้ใช้เพื่อทำการผลิตใช่หรือไม่  */
        IsFactorial: boolean;
        /**G4 - สถานที่นี้ใช้เพื่อทำการบริการใช่หรือไม่  */
        IsCommercial: boolean;

        /**บันทึกปัญหา/อุปสรรค หรือข้อความทั่วไปเพื่อเตือนความจำ */
        Comments: Comment[];

        /**ครัวเรือนที่อยู่อาศัย */
        Residence: Residential;
        /**การทำการเกษตร */
        Agriculture: Agriculture;
        /**การผลิตสินค้า */
        Factory: Factorial;
        /**การค้าและการบริการ */
        Commerce: Commercial;
        /**การใช้น้ำ */
        WaterUsage: WaterUsage;
        /**ปัญหาอุทกภัย */
        Disaster: Disasterous;

        /**ข้อมูลพื้นฐานส่วนบุคคล */
        Closing: ClosingInfo;


        /**Record Control Compartment */
        RecCtrl: RecordControl;
    }
}