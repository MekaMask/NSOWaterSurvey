namespace VarsWebApi.Models {
    export interface DetailWaterManagement {
        /**ชื่อของแหล่งน้ำ */
        Name: string;

        /**แหล่งน้้านี้ใช้ท้าน้้าประปา */
        UseForPlumbing: boolean;

        /**แหล่งน้้านี้ใช้ท้าการผลิต/อุตสาหกรรม  */
        UseForFactory: boolean;

        /**แหล่งน้้านี้ใช้เพื่อการเกษตร  */
        UseForFarming: boolean;

        /**แหล่งน้้านี้ใช้เพื่อการบริการ  */
        UseForService: boolean;

        /**แหล่งน้้านี้ใช้เพื่อวัตถุประสงค์อื่นๆ */
        UseForOther: boolean;
        /**ระบุชื่อหากใช้แหล่งน้ำนี้เพื่อประโยชน์อื่นๆ */
        Other: string;

        /**พื้นที่ของแหล่งน้ำ */
        ProjectArea: FieldSize;
    }
}
