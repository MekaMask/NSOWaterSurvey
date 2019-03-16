namespace VarsWebApi.Models
{
    /**การค้าและบริการ */
    export interface Commercial
    {
        /**ชื่อสถานประกอบการ / หน่วยงาน */
        Name: string;
        
        /**สถาณประกอบการให้บริการในลักษณะใด */
        ServiceType: string;

        /**
         * ประเภทบ้าน / อาคาร / สิ่งปลูกสร้าง (ถามเฉพาะกรณีเป็นยูนิตย่อย)
         * @remarks  
         * หากเป็น ส่วนกลาง ให้ใช้เป็นประเภทเดียวกับ สิ่งปลุกสร้างหลัก
         */
        BuildingCode: string;

        /**สถานศึกษา/โรงเรียน/สถาบันการศึกษา */
        QuestionForAcademy: Academy;

        /**โรงแรม/รีสอร์ท/เกสต์เฮาส์ */
        HotelsAndResorts: HotelsAndResorts;

        /**สถานพยาบาล/โรงพยาบาล/สถานสงเคราะห์ */
        Hospital: Hospital;

        /**คอนโด/อพาร์ทเม้นต์/หอพัก/แมนชั่น/แฟลต */
        Building: Building;

        /**ศาสนสถาน/วัด/ส้านักสงฆ์/ส้านักปฏิบัติธรรม */
        Religious: Religious;

        /**สถานประกอบการบริการประเภทอื่น ๆ */
        OtherBuilding: OtherBuilding;

        /**ใช้แหล่งน้ำ */
        WaterSources: WaterSources;


    }
}
