namespace VarsWebApi.Models {
    export enum BuildingType {
        /**1 บ้านเดี่ยว  */
        SingleHouse = 1,
        /**2 บ้านแฝด/ทาวน์เฮ้าส์/ทาวน์โฮม  */
        TownHouse = 2,
        /**3 ห้องแถว/เรือนแถว/ตึกแถว   */
        ShopHouse = 3,
        /**4 อาคารสูง(คอนโดฯ/แมนชั่น/แฟลต/อพาร์ทเมนท์)  */
        Apartment = 4,
        /**5 อาคารสำนักงานเอกชน */
        Office = 5,
        /**6 โรงแรม/รีสอร์ท/เกสเฮาส์   */
        Hotel = 6,
        /**7 สถานพยาบาล : ภาครัฐ */
        PublicHospital = 7,
        /**8 สถานพยาบาล : ภาคเอกชน  */
        PrivateHospital = 8,
        /**9 สถานที่ราชการ/รัฐวิสาหกิจ  */
        GovernmentOffice = 9,
        /**10 ศาสนสถาน */
        Religious = 10,
        /**11 สถานศึกษา : ภาครัฐ    */
        PublicSchool = 11,
        /**12 สถานศึกษา : ภาคเอกชน   */
        PrivateSchool = 12,
        /**13 โกดัง / โรงงาน    */
        Factory = 13,
        /**14 โรงเรือนเพาะปลูก/เลี้ยงสัตว์    */
        GreenHouse = 14,
        /**15 อาคารกำลังก่อสร้าง    */
        UnderConstruction = 15,
        /**16 อื่นๆ   */
        Other = 16
    }
}