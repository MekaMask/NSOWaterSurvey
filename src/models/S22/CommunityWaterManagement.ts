namespace VarsWebApi.Models {
    export interface CommunityWaterManagement {
        /**ในหมู่บ้าน/ชุมชนแห่งนี้มี แหล่งน้้าสาธารณะ (สระน้้า/ หนอง/ บึง/ อ่างเก็บน้้า) หรือไม่  */
        HasPublicWater: boolean;

        /**หาก “มี” มีจ้านวนกี่แหล่ง */
        PublicWaterCount: number | null;

        /**รายละเอียดของแหล่งน้ำสาธารณะ  */
        Details: DetailWaterManagement[];


        /**น้้าประปาส่วนภูมิภาค   */
        PWA: boolean;

        /**น้้าประปานครหลวง  */
        MWA: boolean;

        /**น้้าประปาอื่นๆ  */
        OtherPlumbing: boolean;

        /**ในหมู่บ้าน/ชุมชน เป็นที่ตั้งของแหล่งผลิตน้้าประปาอื่นๆ (หมู่บ้าน, อบต., เทศบาล, ชุมชน, นิคม, ภูเขา, ฯลฯ)  ใช่หรือไม่  */
        HasWaterService: boolean;

        /**หาก “ใช่” ในหมู่บ้าน/ชุมชน มีแหล่งผลิตน้้าประปาอื่นๆ กี่หน่วยงาน  */
        WaterServiceCount: number | null;

        /**รายละเอียดของหน่วยงานแหล่งผลิตน้ำประปา */
        WaterServices: DetailOrgWaterSupply[];

        /**ในหมู่บ้าน/ชุมชนมีระบบบ้าบัดน้้าเสียหรือไม่  (ให้กา  ใน  เพียงข้อเดียว)  */
        HasWaterTreatment: boolean;


        /**ในช่วงเวลา 5 ปีที่ผ่านมา หมู่บ้าน/ชุมชนแห่งนี้เคยเกิดภัยธรรมชาติหรือไม่   */
        HasDisaster: boolean;
        /**ถ้าเคย ภัยธรรมชาติที่เกิดมีอะไรบ้าง (ให้เลือกได้หลายข้อ)  */
        Disasters: NaturalDisaster;

        /**ในหมู่บ้าน/ชุมชนแห่งนี้มีการเตือนภัยและมาตรการช่วยเหลือน้้าท่วมหรือไม่   */
        HasDisasterWarning: boolean;
        /**ถ้ามีลักษณะการดำเนินการเป็นอย่างไร (ให้เลือกได้หลายข้อ)    */
        DisasterWarningMethods: DisasterWarningMethod;
    }
}
