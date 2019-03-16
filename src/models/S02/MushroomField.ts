namespace VarsWebApi.Models {
    // TODO: Mushroom Copy from GrowingField
    /**เพาะเชื้อและปลูกเห็ด  */
    export interface MushroomField {
        /**ตั้งอยู่ที่ใด */
        Location: Location;
        /**ขนาดพื้นที่เท่าไร กี่ตางรางวา */
        AreaSqM: number;
        /**ตั้งอยู่ในเขตชลประทานหรือไม่ */
        IrrigationField: boolean;
        /**ใช้น้้าจากแหล่งใดบ้าง */
        WaterSources: WaterSources;
    }
}
