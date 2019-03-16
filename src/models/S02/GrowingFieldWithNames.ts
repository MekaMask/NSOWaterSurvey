namespace VarsWebApi.Models {
    /**ข้อมูลแปลงเพาะปลูกพืช ที่ระบุชนิดพืชที่ปลูกด้วย */
    export interface GrowingFieldWithNames extends GrowingField {
        /**ในรอบ 12 เดือนที่ผ่านมาที่แปลงนี้ปลูกพืช ชนิดใด (ระบุได้ไม่เกิน 5 ชนิด) - รวมอื่นๆ */
        Plantings: PlantItem[];
        /**
         * อื่น ๆ รวมกับข้อข้างบนแล้วไม่เกิน 5 ชนิด
         * @remarks  
         * พืชอื่นๆ ให้ใส่กำหนดชื่อเอง ส่วนรหัส โปรแกรมจะกำหนดให้โดยแยกตามประเภทพืช
         * เช่น พืชไร่ 3xxx, ไม้ดอก ไม้ประดับ 4xxx เป็นต้น
         */
        OtherPlantings: PlantItem[];
    }
}