namespace VarsWebApi.Models {
    /**ข้อมูลแปลงเพาะปลูกพืช */
    export interface GrowingField {
        /**ตั้งอยู่ที่ใด */
        Location: Location;

        /**ขนาดพื้นที่เท่าไร กี่ไร่ กี่งาน กี่ตางรางวา */
        Area: Area;

        /**ที่แปลงนี้ตั้งอยู่ในเขตชลประทานหรือไม่ */
        IrrigationField: boolean;

        /**ที่แปลงนี้ใช้น้้าจากแหล่งใดบ้าง */
        WaterSources: WaterSources;
    }
}